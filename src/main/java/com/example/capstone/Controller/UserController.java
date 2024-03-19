package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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
import com.example.capstone.Service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

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
		System.out.println("--------------------------------------------------------");
		return ResponseEntity.status(HttpStatus.OK)
				.body(userService.verifyUser(userLoginDto.getEmail(), userLoginDto.getPassword()));
	}

	@GetMapping("/{id}")
	public ResponseEntity<UserDetailsDTO> getUser(@PathVariable int id) {
		return ResponseEntity.status(HttpStatus.OK).body(userService.returnUserDetails(id));
	}

	@GetMapping("/logout")
	public String logout(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session != null) {
			session.invalidate(); // Invalidate the session and this will remove the session from the managed
									// session context
		}
		return "redirect:/login?logout";
	}

}
