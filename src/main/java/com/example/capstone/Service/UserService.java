package com.example.capstone.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.RegisterEvaluatorDTO;
import com.example.capstone.DTO.EvaluatorDTO;
import com.example.capstone.DTO.GetEvaluatorsDTO;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserDetailsDTO;
import com.example.capstone.Entity.Participant;
import com.example.capstone.Entity.Role;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.FailedToSendEmailException;
import com.example.capstone.Exceptions.InvalidUserException;
import com.example.capstone.Exceptions.UserAlreadyExistsException;
import com.example.capstone.Exceptions.UserNotFoundException;
import com.example.capstone.Repository.UserRepository;

import jakarta.persistence.Tuple;

@Service
public class UserService {
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

	public boolean generateOTP(UserDTO user) {
		String otp = otpService.generateOTP();
		String subject= "Otp verification";
		String body = "Dear Candidate,\r\n"
				+ "\r\n"
				+ "Your One-Time Password (OTP) is: "+otp+" .\r\n"
				+ "\r\n"
				+ "If you did not request this OTP, please ignore this message.\r\n"
				+ "\r\n"
				+ "For security reasons, do not share this OTP with anyone.\r\n"
				+ "\r\n"
				+ "Thank you,\r\n"
				+ "\r\n"
				+"\n"+
				"Regards,\n"
				+ "Team HackerHub";
		if (mailService.sendEmail(user.getEmail(), body, subject)) {
			String otpHash = hashService.generateHash(otp);
			String passwordHash = hashService.generateHash(user.getPassword());
			otpService.saveOtp(user.getEmail(), user.getName(), passwordHash, otpHash);
			return true;
		} else {
			return false;
		}
	}

	public void validateOTP(String email, String otp) {
		UserDTO userDto = otpService.verifyOtp(email, hashService.generateHash(otp));
		if (userRepository.findByEmail(email).isPresent())
			throw new InvalidUserException("User already exists");
		else {
			User user = new User();
			user.setEmail(userDto.getEmail());
			user.setName(userDto.getName());
			user.setPassword(userDto.getPassword());
			user.setRole(Role.participant);
			user.setAvailable(true);
			userRepository.saveAndFlush(user);
		}
	}

	public UserDetailsDTO verifyUser(String email, String password) {
		Optional<User> user = userRepository.findByEmail(email);
		if (user.isPresent()) {
			String hash = hashService.generateHash(password);
			if (user.get().getPassword().equals(hash)) {
				UserDetailsDTO userDetailsDTO = new UserDetailsDTO();
				userDetailsDTO.setUserId(user.get().getUserId());
				userDetailsDTO.setName(user.get().getName());
				userDetailsDTO.setRole(user.get().getRole());
				userDetailsDTO.setEmail(user.get().getEmail());
				return userDetailsDTO;
			} else {
				throw new InvalidUserException("Invalid email or password");
			}
		} else {
			throw new UserNotFoundException("User not exists");
		}
	}

	public void addEvaluator(RegisterEvaluatorDTO addEvaluatorDTO) {
		Optional<User> user = userRepository.findByEmail(addEvaluatorDTO.getEmail());
		if (user.isPresent()) {
			throw new UserAlreadyExistsException("User already exists as " + user.get().getRole());
		} else {
			User evaluator = new User();
			evaluator.setAvailable(true);
			evaluator.setEmail(addEvaluatorDTO.getEmail());
			evaluator.setName(addEvaluatorDTO.getName());
			evaluator.setRole(addEvaluatorDTO.getRole());
			String password = passwordGenerationService.generatePassword();
			evaluator.setPassword(hashService.generateHash(password));
			String subject = "Welcome to – Your Account Details";
			String body = "Dear Evaluator,\r\n"
					+ "\r\n"
					+ "We are delighted to welcome you to HackerHub as a "+addEvaluatorDTO.getRole()+". Your account has been successfully created, and you are now ready to access our platform.\r\n"
					+ "\r\n"
					+ "Below are your login credentials:\r\n"
					+ "\r\n"
					+ "Username: "+addEvaluatorDTO.getEmail()+"\r\n"
					+ "\r\n"
					+ "Password: "+password+"\r\n"
					+ "\r\n"
					+ "Please use the provided credentials to log in to your account."
					+ "\r\n"
					+ "We appreciate your participation and look forward to your valuable contributions to HackerHub.\r\n"
					+ "\r\n"
					+ "Best regards,\r\n"
					+ "\r\n"
					+ "Team HackerHub";
			if (mailService.sendEmail(addEvaluatorDTO.getEmail(), body, subject)) {
				userRepository.save(evaluator);
			} else {
				throw new FailedToSendEmailException("Failed to send Email Exception");
			}
		}
	}

	public List<User> getUsersByIds(List<EvaluatorDTO> evaluators) {
		List<User> users = new ArrayList<>();
		for (EvaluatorDTO e : evaluators) {
			Optional<User> user = userRepository.findById(e.getUserId());
			users.add(check(user));
		}
		return users;
	}

	public List<User> getUsers(List<String> evaluators) {
		List<User> users = new ArrayList<>();
		for (String e : evaluators) {
			Optional<User> user = userRepository.findByEmail(e);
			users.add(check(user));
		}
		return users;
	}

	public synchronized void updateUsers(List<User> users) {
		userRepository.saveAll(users);
	}

	public UserDetailsDTO returnUserDetails(int id) {
		Tuple t = userRepository.findUserById(id);
		UserDetailsDTO user = new UserDetailsDTO();
		user.setUserId((int) t.get(0));
		user.setName((String) t.get(1));
		user.setEmail((String) t.get(2));
		user.setRole((Role) t.get(3));
		return user;
	}

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

	public User findUserByEmail(String email) {
		Optional<User> user = userRepository.findByEmail(email);
		return check(user);

	}

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

	public User getUser(int userId) {
		Optional<User> user = userRepository.findById(userId);
		if (user.isEmpty()) {
			throw new UserNotFoundException("User not found exception");
		} else {
			return user.get();
		}

	}

	public List<GetEvaluatorsDTO> getAvailableEvaluators(List<Role> roles) {
		return userRepository.findUsersByRolesAndIsAvailable(roles);
	}

	public void removeParticipant(User user, Participant participant) {
		user.getParticipants().remove(participant);
		userRepository.save(user);
	}
}
