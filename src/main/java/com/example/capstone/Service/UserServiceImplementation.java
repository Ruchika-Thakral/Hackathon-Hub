package com.example.capstone.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserVerficationDTO;
import com.example.capstone.DTO.EmailVerificationDTO;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.InvalidUserException;
import com.example.capstone.Repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {
	@Autowired
	private JavaMailSender javaMailSender;
	@Autowired
	private UserRepository userRepository;
	@Value("${spring.mail.username}")
	private String sender;
    
	@Override
	public String generateOTP()
	{
		int max=999999;
		int min=100000;
		Random random=new Random();
		Integer otp=random.nextInt(max-min+1)+min;
		return String.valueOf(otp);
	}
	
	public boolean sendOTP(String email,String otp)
	{
		try {
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setFrom(sender);
			mailMessage.setTo(email);
			mailMessage.setText("Yours OTP "+otp);
			mailMessage.setSubject("OTP Verfication");
			javaMailSender.send(mailMessage);
			return true;
		}
		catch (Exception e) {
			return false;
		}
	}
	public String generateHashForPassword(String password)
	{
		MessageDigest digest;
		try {
			digest = MessageDigest.getInstance("SHA-256");
			byte[] encodedhash = digest.digest(password.getBytes(StandardCharsets.UTF_8));
			 StringBuilder hexString = new StringBuilder(2 * encodedhash.length);
			    for (int i = 0; i < encodedhash.length; i++) {
			        String hex = Integer.toHexString(0xff & encodedhash[i]);
			        if(hex.length() == 1) {
			            hexString.append('0');
			        }
			        hexString.append(hex);
			    }
			    return hexString.toString();
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}
	
	
	@Override
	public String validateUser(UserDTO userDTO) {
		Optional<User> user=userRepository.findById(userDTO.getEmail());
		if(user.isPresent())
		{
			    if(user.get().isEmailVerfied())return "User already exists";
			    else 
			    {
			    	User user1=user.get();
			    	String otp=generateOTP();
			    	sendOTP(userDTO.getEmail(),otp);
			    	user1.setOtp(otp);
			    	userRepository.saveAndFlush(user1);
			    	return "verify email";
			    }
			}
		else 
		{
			User user1=new User();
			user1.setEmail(userDTO.getEmail());
			user1.setRole(userDTO.getRole());
			user1.setUserName(userDTO.getUsername());
			String otp=generateOTP();
			String hash=generateHashForPassword(userDTO.getPassword());
			user1.setPassword(hash);
			user1.setEmailVerfied(false);
			user1.setOtp(otp);
			sendOTP(userDTO.getEmail(), otp);
			userRepository.save(user1);
			return "OTP sent successfully";
		}
	}

	@Override
	public String verifyEmail(EmailVerificationDTO emailVerficationDTO) {
		Optional<User> user=userRepository.findById(emailVerficationDTO.getEmail());
		if(user.isPresent())
		{
			User user1=user.get();
			if(user.get().getOtp().equals(emailVerficationDTO.getOtp()))
			{
				user1.setEmailVerfied(true);
				userRepository.saveAndFlush(user1);
				return "OTP verified Successfully";
			}
			else
			{
				return "OTP Invalid";
			}
		}
		else
		{
			return "Invalid User";
		}
	}

	@Override
	public String verifyUser(UserVerficationDTO verificationDTO) throws InvalidUserException {
		Optional<User> user=userRepository.findById(verificationDTO.getEmail());
		if(user.isPresent())
		{
		String hash=generateHashForPassword(verificationDTO.getPassword());
		if(user.get().getPassword().equals(hash))
		{
			return "Login successful";
		}
		else	
		{
		    throw new InvalidUserException("Invalid Username or Password");
		}
		}
		else
		{
			throw new InvalidUserException("User not exists");
		}
	}
	}
