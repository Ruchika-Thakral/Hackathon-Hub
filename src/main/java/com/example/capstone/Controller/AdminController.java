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

@RestController
@RequestMapping("Admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PostMapping("hackathon")
	public ResponseEntity<String> createHackathon(@RequestBody CreateHackathonDTO createHackathonDTO) {
		adminService.createHackathon(createHackathonDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body("Hackathon created successfully");
		}

	@PostMapping("Evaluator")
	public ResponseEntity<String> addEvaluator(@RequestBody RegisterEvaluatorDTO addEvaluatorDTO) {
		adminService.addEvaluator(addEvaluatorDTO);
		return  ResponseEntity.status(HttpStatus.CREATED).body("Evaluator added successfully");
	}

	@PostMapping("assign")
	public ResponseEntity<String> assignEvaluators(@RequestBody AddEvaluatorsDTO addEvaluatorsDTO) {
		adminService.assignEvaluators(addEvaluatorsDTO);
		return ResponseEntity.status(HttpStatus.OK).body("Evaluators assigned successfully");
	}

	@GetMapping("hackathon")
	public ResponseEntity<List<HackathonDTO>> getHackathons() {
		return ResponseEntity.status(HttpStatus.OK).body(adminService.getAllHackathons());
	}

	@GetMapping("Evaluator")
	public ResponseEntity<List<GetEvaluatorsDTO>> getEvaluators() {
		return ResponseEntity.status(HttpStatus.OK).body(adminService.getEvaluators());

	}
	@PutMapping("hackathon/end/{hackathonid}")
	public ResponseEntity<?> endHackathon(@PathVariable int hackathonid)
	{
		adminService.endHackathon(hackathonid);
		return ResponseEntity.status(HttpStatus.OK).body("Hackathon ended successfully");
	}
}
