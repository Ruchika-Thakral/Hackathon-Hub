package com.example.capstone.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.RegisterEvaluatorDTO;
import com.example.capstone.DTO.TeamDetailsDTO;
import com.example.capstone.DTO.TeamUserDetailsDTO;
import com.example.capstone.DTO.ChangePasswordDTO;
import com.example.capstone.DTO.EvaluatorDTO;
import com.example.capstone.DTO.GetEvaluatorsDTO;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserDetailsDTO;
import com.example.capstone.Entity.Participant;
import com.example.capstone.Entity.Role;
import com.example.capstone.Entity.Team;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.FailedToSendEmailException;
import com.example.capstone.Exceptions.InvalidEmailException;
import com.example.capstone.Exceptions.InvalidUserException;
import com.example.capstone.Exceptions.UserAlreadyExistsException;
import com.example.capstone.Exceptions.UserNotFoundException;
import com.example.capstone.Repository.UserRepository;

import jakarta.persistence.Tuple;

@Service
public class UserService{
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private OtpService otpService;

	@Autowired
	private MailService mailService;

	@Autowired
	private HashService hashService;

	@Autowired
	private PasswordGenerationService passwordGenerationService;

	
	/**
	 * Generates OTP for user registration and sends it via email.
	 * 
	 * @param user The UserDTO object containing user details
	 * @return true if OTP generation and email sending were successful, false
	 *         otherwise
	 * @throws UserAlreadyExistsException if a user with the provided email already
	 *                                    exists
	 */
	public boolean generateOTP(UserDTO user) {
		Optional<User> user1 = userRepository.findByEmail(user.getEmail());
		if (user1.isEmpty()) {
			// Generate OTP
			String otp = otpService.generateOTP();
			String subject = "Otp verification";
			// Email body
			String body = "Dear Candidate,\r\n" + "\r\n" + "Your One-Time Password (OTP) is: " + otp + " .\r\n" + "\r\n"
					+ "If you did not request this OTP, please ignore this message.\r\n" + "\r\n"
					+ "For security reasons, do not share this OTP with anyone.\r\n" + "\r\n" + "Thank you,\r\n"
					+ "\r\n" + "\n" + "Regards,\n" + "Team HackerHub";
			// Send email with OTP
			if (mailService.sendEmail(user.getEmail(), body, subject)) {
				// Generate hash for OTP and password
				String otpHash = hashService.generateHash(otp);
				String passwordHash = hashService.generateHash(user.getPassword());
				// Save OTP and user details
				otpService.saveOtp(user.getEmail(), user.getName(), passwordHash, otpHash);
				return true;
			} else {
				return false; // Email sending failed
			}
		} else {
			throw new UserAlreadyExistsException("User already exists");
		}
	}

	/**
	 * Validates the OTP for user registration and creates a new user if not already
	 * existing.
	 * 
	 * @param email The email address of the user
	 * @param otp   The One-Time Password (OTP) for verification
	 * @throws InvalidUserException if a user with the provided email already exists
	 */
	public void validateOTP(String email, String otp) {
		// Verify OTP
		UserDTO userDto = otpService.verifyOtp(email, hashService.generateHash(otp));
		// Check if user already exists
		if (userRepository.findByEmail(email).isPresent())
			throw new InvalidUserException("User already exists");
		else {
			// Create new user
			User user = new User();
			user.setEmail(userDto.getEmail());
			user.setName(userDto.getName());
			user.setPassword(userDto.getPassword());
			user.setRole(Role.participant);
			user.setAvailable(true);
			user.setAssignedHackathon(-1);
			userRepository.saveAndFlush(user); // Save user to database
		}
	}

	/**
	 * Method to verify user credentials and retrieve user details if authentication
	 * is successful
	 * 
	 * @param email    The email address of the user
	 * @param password The password of the user
	 * @return UserDetailsDTO containing user details if authentication is
	 *         successful
	 * @throws InvalidUserException  if email or password is incorrect
	 * @throws UserNotFoundException if the user does not exist
	 */
	public UserDetailsDTO verifyUser(String email, String password) {
		// Check if user exists
		Optional<User> optionalUser = userRepository.findByEmail(email);
		if (optionalUser.isPresent()) {
			User user = optionalUser.get();
			String hash = hashService.generateHash(password);
			// Verify password
			if (user.getPassword().equals(hash)) {
				// Create UserDetailsDTO with user details
				UserDetailsDTO userDetailsDTO = new UserDetailsDTO();
				userDetailsDTO.setUserId(user.getUserId());
				userDetailsDTO.setName(user.getName());
				userDetailsDTO.setAvailable(user.isAvailable());
				userDetailsDTO.setEmail(user.getEmail());
				userDetailsDTO.setRole(user.getRole());
				userDetailsDTO.setAssignedHackathon(user.getAssignedHackathon());
				return userDetailsDTO; // Return UserDetailsDTO
			} else {
				throw new InvalidUserException("Invalid email or password");
			}
		} else {
			throw new UserNotFoundException("User not exists");
		}
	}

	/**
	 * Adds a new evaluator to the system and sends welcome email with login
	 * credentials.
	 * 
	 * @param addEvaluatorDTO The RegisterEvaluatorDTO containing evaluator details
	 * @throws UserAlreadyExistsException if a user with the provided email already
	 *                                    exists
	 * @throws FailedToSendEmailException if the email sending process fails
	 */
	public void addEvaluator(RegisterEvaluatorDTO addEvaluatorDTO) {
		// Check if the user already exists
		Optional<User> user = userRepository.findByEmail(addEvaluatorDTO.getEmail());
		if (user.isPresent()) {
			// Throw exception if user already exists
			throw new UserAlreadyExistsException("User already exists as " + user.get().getRole());
		} else {
			// Create a new evaluator
			User evaluator = new User();
			evaluator.setAvailable(true);
			evaluator.setEmail(addEvaluatorDTO.getEmail());
			evaluator.setName(addEvaluatorDTO.getName());
			evaluator.setRole(addEvaluatorDTO.getRole());
			evaluator.setAssignedHackathon(-1);
			evaluator.setAssignedHackathon(null);
			// Generate a random password
			String password = passwordGenerationService.generatePassword();
			// Hash the password
			evaluator.setPassword(hashService.generateHash(password));
			// Compose email
			String subject = "Welcome to – Your Account Details";
			String body = "Dear Evaluator,\r\n" + "\r\n" + "We are delighted to welcome you to HackerHub as a "
					+ addEvaluatorDTO.getRole()
					+ ". Your account has been successfully created, and you are now ready to access our platform.\r\n"
					+ "\r\n" + "Below are your login credentials:\r\n" + "\r\n" + "Username: "
					+ addEvaluatorDTO.getEmail() + "\r\n" + "\r\n" + "Password: " + password + "\r\n" + "\r\n"
					+ "Please use the provided credentials to log in to your account." + "\r\n"
					+ "We appreciate your participation and look forward to your valuable contributions to HackerHub.\r\n"
					+ "\r\n" + "Best regards,\r\n" + "\r\n" + "Team HackerHub";
			// Send email with login credentials
			if (mailService.sendEmail(addEvaluatorDTO.getEmail(), body, subject)) {
				// Save the evaluator to the database
				userRepository.save(evaluator);
			} else {
				// Throw exception if email sending fails
				throw new FailedToSendEmailException("Failed to send Email Exception");
			}
		}
	}

	/**
	 * Retrieves users from the database based on their IDs.
	 * 
	 * @param evaluators The list of EvaluatorDTO objects containing user IDs
	 * @return The list of users retrieved from the database
	 */
	public List<User> getUsersByIds(List<EvaluatorDTO> evaluators) {
		List<User> users = new ArrayList<>();
		for (EvaluatorDTO e : evaluators) {
			Optional<User> user = userRepository.findById(e.getUserId());
			users.add(check(user));
		}
		return users;
	}

	/**
	 * Retrieves users from the database based on their email addresses.
	 * 
	 * @param evaluators The list of email addresses of the users
	 * @return The list of users retrieved from the database
	 */
	public List<User> getUsers(List<String> evaluators) {
		List<User> users = new ArrayList<>();
		for (String e : evaluators) {
			Optional<User> user = userRepository.findByEmail(e);
			users.add(check(user));
		}
		return users;
	}

	/**
	 * Updates the information of users in the database.
	 *
	 * @param users The list of users to be updated
	 */
	public synchronized void updateUsers(List<User> users) {
		userRepository.saveAll(users);
	}

	/**
	 * Retrieves user details from the database based on the user ID.
	 * 
	 * @param id The ID of the user
	 * @return The UserDetailsDTO containing user details
	 */
	public UserDetailsDTO returnUserDetails(int id) {
		Tuple t = userRepository.findUserById(id);
		UserDetailsDTO user = new UserDetailsDTO();
		user.setUserId((int) t.get(0));
		user.setName((String) t.get(1));
		user.setEmail((String) t.get(2));
		user.setRole((Role) t.get(3));
		return user;
	}

	/**
	 * Checks if the user is present and available. Throws exceptions if user is not
	 * found or not available.
	 * 
	 * @param user The Optional<User> object representing the user
	 * @return The User object if present and available
	 * @throws UserAlreadyExistsException if the user is already assigned to another
	 *                                    team
	 * @throws UserNotFoundException      if the user is not found
	 */
	public User check(Optional<User> user) {
		if (user.isPresent()) {
			if (!user.get().isAvailable()) {
				throw new UserAlreadyExistsException(user.get().getName() + " User is already exists in another team");
			} else {
				return user.get();
			}
		} else {
			throw new UserNotFoundException("User not found exception");
		}
	}

	/**
	 * Finds a user in the database based on the email address.
	 * 
	 * @param email The email address of the user
	 * @return The User object found in the database
	 * @throws UserNotFoundException if the user is not found
	 */
	public User findUserByEmail(String email) {
		Optional<User> user = userRepository.findByEmail(email);
		return check(user);

	}

	/**
	 * Finds a user in the database based on the user ID.
	 * 
	 * @param id The ID of the user
	 * @return The User object found in the database
	 * @throws UserAlreadyExistsException if the user is already assigned to another
	 *                                    team
	 * @throws UserNotFoundException      if the user is not found
	 */
	public User findUserById(int id) {
		Optional<User> user = userRepository.findById(id);
		if (user.isPresent()) {
			if (!user.get().isAvailable()) {
				throw new UserAlreadyExistsException(user.get().getName() + " User is already exists in another team");
			} else {
				return user.get();
			}
		} else {
			throw new UserNotFoundException("User not found exception");
		}
	}

	/**
	 * Retrieves a user from the database based on the user ID.
	 * 
	 * @param userId The ID of the user
	 * @return The User object found in the database
	 * @throws UserNotFoundException if the user is not found
	 */
	public User getUser(int userId) {
		Optional<User> user = userRepository.findById(userId);
		if (user.isEmpty()) {
			throw new UserNotFoundException("User not found exception");
		} else {
			return user.get();
		}

	}

	/**
	 * Retrieves available evaluators from the database based on their roles.
	 * 
	 * @param roles The list of roles of evaluators to retrieve
	 * @return The list of GetEvaluatorsDTO containing available evaluators
	 */
	public List<GetEvaluatorsDTO> getAvailableEvaluators(List<Role> roles) {
		return userRepository.findUsersByRolesAndIsAvailable(roles);
	}

	/**
	 * Removes a participant from the user's list of participants.
	 * 
	 * @param user        The User object from which the participant is to be
	 *                    removed
	 * @param participant The Participant object to be removed
	 */
	public void removeParticipant(User user, Participant participant) {
		user.getParticipants().remove(participant);
		userRepository.save(user);
	}

	public void generateOTP(int userId, String email) {
		String otp = otpService.generateOTP();
		Optional<User> user = userRepository.findById(userId);
		if (user.isPresent()) {
			if (email.equals(user.get().getEmail())) {
				String subject = "Otp verification";
				String body = "Dear Candidate,\r\n" + "\r\n" + "Your One-Time Password (OTP) is: " + otp + " .\r\n"
						+ "\r\n" + "If you did not request this OTP, please ignore this message.\r\n" + "\r\n"
						+ "For security reasons, do not share this OTP with anyone.\r\n" + "\r\n" + "Thank you,\r\n"
						+ "\r\n" + "\n" + "Regards,\n" + "Team HackerHub";
				if (mailService.sendEmail(email, body, subject)) {
					otpService.saveOtp(email, null, null, otp);
				} else {
					throw new FailedToSendEmailException("Failed to send Email Exception");
				}
			} else {
				throw new InvalidEmailException("Email is not valid");
			}
		} else {
			throw new InvalidUserException("User not found");
		}

	}

	public void verifyUserAndChangePassword(ChangePasswordDTO changePasswordDTO) {
		String otp = otpService.getOTP(changePasswordDTO.getEmail());
		if (otp.equals(changePasswordDTO.getOtp())) {
			Optional<User> user = userRepository.findByEmail(changePasswordDTO.getEmail());
			user.get().setPassword(hashService.generateHash(changePasswordDTO.getPassword()));
			userRepository.save(user.get());
			otpService.deleteById(changePasswordDTO.getEmail());

		}
	}

	public List<TeamDetailsDTO> getTeamDetails(int userId) {
		User user = userRepository.findById(userId).orElse(null);

		if (user != null) {
			List<TeamDetailsDTO> teamDetailsDTOs = user.getParticipants().stream().map(participant -> {
				TeamDetailsDTO teamDetailsDTO = new TeamDetailsDTO();
				Team team = participant.getTeam();
				teamDetailsDTO.setTeamId(team.getTeamId());
				teamDetailsDTO.setConsolidatedRating(team.getConsolidatedRating());
				teamDetailsDTO.setIdeaDomain(team.getIdeaDomain());
				teamDetailsDTO.setIdeaFiles(team.getIdeaFiles());
				teamDetailsDTO.setIdeaRepo(team.getIdeaRepo());
				teamDetailsDTO.setIdeaTitle(team.getIdeaTitle());
				teamDetailsDTO.setStatus(team.getStatus());
				teamDetailsDTO.setName(team.getName());
				teamDetailsDTO.setTeamUserDetailsDTOs(team.getParticipants().stream().map(userParticipant -> {
					User teamMember = userParticipant.getUser();
					TeamUserDetailsDTO teamUserDetailsDTO = new TeamUserDetailsDTO();
					teamUserDetailsDTO.setEmail(teamMember.getName());
					teamUserDetailsDTO.setLeader(userParticipant.isLeader());
					teamUserDetailsDTO.setUserId(teamMember.getUserId());
					teamUserDetailsDTO.setName(teamMember.getName());
					return teamUserDetailsDTO;
				}).collect(Collectors.toList()));
				return teamDetailsDTO;
			}).collect(Collectors.toList());

			return teamDetailsDTOs;
		} else {
			throw new UserNotFoundException("User not found exception");
		}
	}

}
