package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.EmailVerificationDTO;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserDetailsDTO;
import com.example.capstone.DTO.UserLoginDTO;
import com.example.capstone.Exceptions.Response;
import com.example.capstone.Service.UserService;

@RestController
@RequestMapping("User")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("register")
	public Response generateOtp(@RequestBody UserDTO userDto) {
		userService.generateOTP(userDto);
		return new Response(HttpStatus.OK.value(), HttpStatus.OK, "OTP generated successfully");
	}

	@PostMapping("verifyOtp")
	public Response validateOtp(@RequestBody EmailVerificationDTO emailVerificationDto) {
		userService.validateOTP(emailVerificationDto.getEmail(), emailVerificationDto.getOtp());
		return new Response(HttpStatus.CREATED.value(), HttpStatus.CREATED, "User added successfully");
	}

	@PostMapping("login")
	public UserDetailsDTO verifyUser(@RequestBody UserLoginDTO userLoginDto) {
		return userService.verifyUser(userLoginDto.getEmail(), userLoginDto.getPassword());
	}

	@GetMapping("/{id}")
	public UserDetailsDTO getUser(@PathVariable int id) {
		return userService.returnUserDetails(id);
	}
}
