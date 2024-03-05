package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.EmailVerificationDTO;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserDetailsDTO;
import com.example.capstone.DTO.UserLoginDTO;
import com.example.capstone.Service.UserService;

@RestController
@RequestMapping("User")
public class UserController {

@Autowired
private UserService userService;
@PostMapping("register")
public void generateOtp(@RequestBody UserDTO userDto)
{
	userService.generateOTP(userDto);
}
@PostMapping("verifyOtp")
public void validateOtp(@RequestBody EmailVerificationDTO emailVerificationDto)
{
	userService.validateOTP(emailVerificationDto.getEmail(),emailVerificationDto.getOtp());
}
@PostMapping("login")
public UserDetailsDTO verifyUser(@RequestBody UserLoginDTO userLoginDto)
{
	return userService.verifyUser(userLoginDto.getEmail(),userLoginDto.getPassword());
}
}
