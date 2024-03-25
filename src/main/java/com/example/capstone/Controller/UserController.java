package com.example.capstone.Controller;

import org.springframework.http.HttpHeaders;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.ChangePasswordDTO;
import com.example.capstone.DTO.EmailVerificationDTO;
import com.example.capstone.DTO.MessageResponse;
import com.example.capstone.DTO.TeamDetailsDTO;
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.DTO.UserDetailsDTO;
import com.example.capstone.DTO.UserLoginDTO;
import com.example.capstone.Exceptions.UserNotFoundException;
import com.example.capstone.Service.JwtService;
import com.example.capstone.Service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("User")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
    private AuthenticationManager authenticationManager;

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


	@PostMapping("/login")
	public ResponseEntity<UserDetailsDTO> verifyUser(@RequestBody UserLoginDTO userLoginDto) {
	    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginDto.getEmail(), userLoginDto.getPassword()));
	    if (authentication.isAuthenticated()) {
	        UserDetailsDTO userDetails = userService.findUserByMail(userLoginDto.getEmail());
	        String jwtToken = jwtService.generateToken(userLoginDto.getEmail(), userDetails.getRole().name());
	        
	        // Add "Bearer " prefix to the JWT token
	        String tokenWithPrefix = "Bearer " + jwtToken;
	        
	        HttpHeaders headers = new HttpHeaders();
	        headers.add("Authorization", tokenWithPrefix);
	        
	        return ResponseEntity.ok().headers(headers).body(userDetails);
	    } else {
	        throw new UserNotFoundException("User not found exception");
	    }
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
	@PostMapping("logout")
	public ResponseEntity<MessageResponse> logOutUser(HttpServletRequest request)
	{
		return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("logout successful"));
	}
}
