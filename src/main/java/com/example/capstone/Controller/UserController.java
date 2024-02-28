package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.EmailVerificationDTO;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserVerficationDTO;
import com.example.capstone.Service.UserServiceImplementation;

@RestController
@RequestMapping("User")
public class UserController {
    
	@Autowired
	private UserServiceImplementation userServiceImplem;
	@PutMapping("insert")
	public String insertUser(@RequestBody UserDTO userDTO)
	{
	return 	userServiceImplem.validateUser(userDTO);
	}
	@PutMapping("verifyEmail")
	public String verifyUsers(@RequestBody EmailVerificationDTO dt)
	{
		return userServiceImplem.verifyEmail(dt);
	}
	@PostMapping("validateUser")
	public String validateUser(@RequestBody UserVerficationDTO dt)
	{
		return userServiceImplem.verifyUser(dt);
	}
}

