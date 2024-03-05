//package com.example.capstone.Controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.capstone.DTO.EmailVerificationDTO;
//import com.example.capstone.DTO.ParticipantDTO;
//import com.example.capstone.DTO.UserVerficationDTO;
//import com.example.capstone.Service.PartcipantServiceImplementation;
//
//@RestController
//@RequestMapping("User")
//public class ParticipantController {
//    
//	@Autowired
//	private PartcipantServiceImplementation participantServiceImplem;
//	@PutMapping("insert")
//	public String insertUser(@RequestBody ParticipantDTO userDTO)
//	{
//	return 	participantServiceImplem.validateParticipant(userDTO);
//	}
//	@PutMapping("verifyEmail")
//	public String verifyUsers(@RequestBody EmailVerificationDTO dt)
//	{
//		return participantServiceImplem.verifyEmail(dt);
//	}
//	@PostMapping("validateUser")
//	public String validateUser(@RequestBody UserVerficationDTO dt)
//	{
//		return participantServiceImplem.verifyUser(dt);
//	}
//}
//
