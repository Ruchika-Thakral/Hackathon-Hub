package com.example.capstone.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.AddEvaluatorDTO;
import com.example.capstone.DTO.GetUserDTO;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserDetailsDTO;
import com.example.capstone.Entity.Role;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.FailedToSendEmailException;
import com.example.capstone.Exceptions.InvalidOtpException;
import com.example.capstone.Exceptions.InvalidUserException;
import com.example.capstone.Exceptions.Response;
import com.example.capstone.Exceptions.UserAlreadyExistsException;
import com.example.capstone.Exceptions.UserNotFoundException;
import com.example.capstone.Repository.UserRepository;

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
		String body = "Your OTP: " + otp;
		String subject = "User verification code";
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

	public void addEvaluator(AddEvaluatorDTO addEvaluatorDTO) {
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
			String subject = "Your credentials";
			String body = "We are glade inform that you are added as " + addEvaluatorDTO.getRole() + " to Hacker Hub \n"
					+ "Your credentials are:\n " + "email: " + addEvaluatorDTO.getEmail() + "\n password: " + password
					+ "\n\n" + "regards\n team HackerHub";
			if (mailService.sendEmail(addEvaluatorDTO.getEmail(), body, subject)) {
				userRepository.save(evaluator);
			} else {
				throw new FailedToSendEmailException("Failed to send Email Exception");
			}
		}
	}
	public GetUserDTO getUser(Integer userId)
	{
		Optional<User> user=userRepository.findById(userId);
		if(user.isPresent())
		{
			GetUserDTO getUserDTO=new GetUserDTO();
			getUserDTO.setName(user.get().getName());
			getUserDTO.setEmail(user.get().getEmail());
			getUserDTO.setUserId(user.get().getUserId());
			getUserDTO.setRole(user.get().getRole());
			return getUserDTO;
		}
		else
		{
			throw new UserNotFoundException("User not exists");
		}
	}
}
