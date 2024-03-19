package com.example.capstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.RegisterEvaluatorDTO;
import com.example.capstone.DTO.AddEvaluatorsDTO;
import com.example.capstone.DTO.CreateHackathonDTO;
import com.example.capstone.DTO.GetEvaluatorsDTO;
import com.example.capstone.DTO.HackathonDTO;
import com.example.capstone.Service.AdminService;


//Controller for admin related API endpoints
@RestController
@RequestMapping("Admin")
public class AdminController {

	// Injecting the AdminService dependency
	@Autowired
	private AdminService adminService;

	// Endpoint to create a new hackathon
	@PostMapping("hackathon")
	public ResponseEntity<String> createHackathon(@RequestBody CreateHackathonDTO createHackathonDTO) {
		adminService.createHackathon(createHackathonDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body("Hackathon created successfully");
	}

	// Endpoint to register a new evaluator
	@PostMapping("Evaluator")
	public ResponseEntity<String> addEvaluator(@RequestBody RegisterEvaluatorDTO addEvaluatorDTO) {
		adminService.addEvaluator(addEvaluatorDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body("Evaluator added successfully");
	}

	// Endpoint to assign evaluators to a hackathon
	@PostMapping("assign")
	public ResponseEntity<String> assignEvaluators(@RequestBody AddEvaluatorsDTO addEvaluatorsDTO) {
		adminService.assignEvaluators(addEvaluatorsDTO);
		return ResponseEntity.status(HttpStatus.OK).body("Evaluators assigned successfully");
	}

	// Endpoint to retrieve all hackathons
	@GetMapping("hackathon")
	public ResponseEntity<List<HackathonDTO>> getHackathons() {
		return ResponseEntity.status(HttpStatus.OK).body(adminService.getAllHackathons());
	}

	// Endpoint to retrieve all evaluators
	@GetMapping("Evaluator")
	public ResponseEntity<List<GetEvaluatorsDTO>> getEvaluators() {
		return ResponseEntity.status(HttpStatus.OK).body(adminService.getEvaluators());

	}

	// Endpoint to mark a hackathon as ended
	@PutMapping("hackathon/end/{hackathonid}")
	public ResponseEntity<?> endHackathon(@PathVariable int hackathonid) {
		adminService.endHackathon(hackathonid);
		return ResponseEntity.status(HttpStatus.OK).body("Hackathon ended successfully");
	}
}
