package com.example.capstone.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserDetailsDTO;
import com.example.capstone.Entity.Role;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.InvalidOtpException;
import com.example.capstone.Exceptions.InvalidUserException;
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

	public void validateOTP(String email, String otp) throws InvalidOtpException, InvalidUserException {
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
			throw new InvalidUserException("User not exists");
		}
	}

}
