package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.AddEvaluatorDTO;
import com.example.capstone.DTO.CreateHackathonDTO;
import com.example.capstone.Exceptions.FailedToSendEmailException;
import com.example.capstone.Exceptions.InvalidUserException;
import com.example.capstone.Exceptions.Response;
import com.example.capstone.Exceptions.UserAlreadyExistsException;
import com.example.capstone.Service.AdminService;


@RestController
@RequestMapping("Admin")
public class AdminController {

@Autowired
private AdminService adminService;

@PostMapping("hackathon")
public void createHackathon(@RequestBody CreateHackathonDTO createHackathonDTO)
{
  adminService.createHackathon(createHackathonDTO);	
}

@PostMapping("Evaluator")
public Response addEvaluator(@RequestBody AddEvaluatorDTO addEvaluatorDTO) {
	adminService.addEvaluator(addEvaluatorDTO);
	return new Response(HttpStatus.OK.value(),HttpStatus.OK,"User added successfully");
}
}
