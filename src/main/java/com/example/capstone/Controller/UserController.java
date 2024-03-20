package com.example.capstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.capstone.DTO.ChangePasswordDTO;
import com.example.capstone.DTO.EmailVerificationDTO;
import com.example.capstone.DTO.MessageResponse;
import com.example.capstone.DTO.TeamDetailsDTO;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserDetailsDTO;
import com.example.capstone.DTO.UserLoginDTO;
import com.example.capstone.Service.UserService;

//@RestController
@Controller
@RequestMapping("User")
public class UserController {

	@Autowired
	private UserService userService;

//	@GetMapping("login")
//	public String login() {
//		return "login";
//	}
//	
	@PostMapping("register")
	public ResponseEntity<String> generateOtp(@RequestBody UserDTO userDto) {
		userService.generateOTP(userDto);
		return ResponseEntity.status(HttpStatus.OK).body("OTP generated successfully");
	}

	@PostMapping("verifyOtp")
	public ResponseEntity<String> validateOtp(@RequestBody EmailVerificationDTO emailVerificationDto) {
		userService.validateOTP(emailVerificationDto.getEmail(), emailVerificationDto.getOtp());
		return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
	}


	@PostMapping("login")
	public ResponseEntity<UserDetailsDTO> verifyUser(@RequestBody UserLoginDTO userLoginDto) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(userService.verifyUser(userLoginDto.getEmail(), userLoginDto.getPassword()));
	}

	@GetMapping("/{id}")
	public ResponseEntity<UserDetailsDTO> getUser(@PathVariable int id) {
		return ResponseEntity.status(HttpStatus.OK).body(userService.returnUserDetails(id));
	}
	@PostMapping("/forgotPassword/{userId}")
	public void  forgotPassword(@PathVariable int userId,@RequestBody String email)
	{
	    userService.generateOTP(userId, email);
	}
	@PostMapping("changePassword")
	public ResponseEntity<MessageResponse> changePassword(@RequestBody ChangePasswordDTO changePasswordDTO)
	{
		userService.verifyUserAndChangePassword(changePasswordDTO);
		return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Password change sucessful"));
	}
	@GetMapping("Teams/{userId}")
	public ResponseEntity<List<TeamDetailsDTO>> getTeamDetails(@PathVariable int userId)
	{
		return  ResponseEntity.status(HttpStatus.OK).body(userService.getTeamDetails(userId));
	}
}
