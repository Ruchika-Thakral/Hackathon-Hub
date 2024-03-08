package com.example.capstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.RegisterEvaluatorDTO;
import com.example.capstone.DTO.AddEvaluatorsDTO;
import com.example.capstone.DTO.CreateHackathonDTO;
import com.example.capstone.DTO.GetEvaluatorsDTO;
import com.example.capstone.DTO.HackathonDTO;
import com.example.capstone.Exceptions.Response;
import com.example.capstone.Service.AdminService;


@RestController
@RequestMapping("Admin")
public class AdminController {

@Autowired
private AdminService adminService;

@PostMapping("hackathon")
public Response createHackathon(@RequestBody CreateHackathonDTO createHackathonDTO)
{
  adminService.createHackathon(createHackathonDTO);	
  return new Response(HttpStatus.CREATED.value(),HttpStatus.CREATED,"Hackathon created successfully");
}

@PostMapping("Evaluator")
public Response addEvaluator(@RequestBody RegisterEvaluatorDTO addEvaluatorDTO) {
	adminService.addEvaluator(addEvaluatorDTO);
	return new Response(HttpStatus.CREATED.value(),HttpStatus.CREATED,"User added successfully");
}

@PostMapping("assign")
public Response assignEvaluators(@RequestBody AddEvaluatorsDTO addEvaluatorsDTO)
{
	adminService.assignEvaluators(addEvaluatorsDTO);
	return new Response(HttpStatus.OK.value(),HttpStatus.OK,"assigned successfully");
}
@GetMapping("hackathon")
public List<HackathonDTO> getHackathons() {
	return adminService.getAllHackathons();
}

@GetMapping("Evaluator")
public ResponseEntity<List<GetEvaluatorsDTO>> getEvaluators() {
	return  new ResponseEntity<>(adminService.getEvaluators(),HttpStatus.OK);
	
}
}
