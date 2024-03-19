package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.AddIdeaDTO;
import com.example.capstone.DTO.IdeaDetailsRequestDTO;
import com.example.capstone.DTO.TeamCreationDTO;
import com.example.capstone.Service.TeamService;

@RestController
@RequestMapping("Team")
public class TeamController {

	@Autowired
	private TeamService teamService;

	@PostMapping("{hackathonId}/{userId}")
	public ResponseEntity<?> createTeam(@PathVariable int hackathonId, @PathVariable int userId,
			@RequestBody TeamCreationDTO teamCreationDTO) {
		teamService.CreateTeam(hackathonId, userId, teamCreationDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body("Team created successfully");
	}

	@PostMapping("idea/{hackathonId}/{userId}")
	public ResponseEntity<String> updateTeamDetails(@PathVariable int hackathonId, @PathVariable int userId,
			@RequestBody AddIdeaDTO teamUpdateDTO) {
		teamService.updateTeamDetails(teamUpdateDTO, userId, hackathonId);
		return ResponseEntity.status(HttpStatus.OK).body("Idea submitted successfully");
	}

	@PostMapping("rejected/{teamId}")
	public ResponseEntity<String> updateTeamStatus(@PathVariable int teamId) {
		teamService.deleteTeam(teamId);
		return ResponseEntity.status(HttpStatus.OK).body("Team rejected successfully");
	}

	@PutMapping("selected/{teamId}")
	public ResponseEntity<String> updateSelectedTeamStatus(@PathVariable int teamId) {
		teamService.selectTeamForNextStep(teamId);
		return ResponseEntity.status(HttpStatus.OK).body("Team selected successfully");

	}

	@PostMapping("ideaFiles/{hackathonId}/{userId}")
	public ResponseEntity<String> updateIdeaDetails(@PathVariable Integer hackathonId, @PathVariable Integer userId,
			@RequestBody IdeaDetailsRequestDTO requestBody) {
		String message = teamService.FileSubmission(hackathonId, userId, requestBody);
		return ResponseEntity.ok(message);
	}
}
