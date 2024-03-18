package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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

//TeamController handles the creation, updating teams for a hackathon.
//It also handles the submission of idea details and files for a team.
//The controller uses the TeamService to perform these operations

@RestController
@RequestMapping("Team")
public class TeamController {

	@Autowired
	private TeamService teamService;

	// Create a new team for a hackathon
	// The team is created by a user
	@PostMapping("{hackathonId}/{userId}")
	public ResponseEntity<?> createTeam(@PathVariable int hackathonId, @PathVariable int userId,
			@RequestBody TeamCreationDTO teamCreationDTO) {
		teamService.CreateTeam(hackathonId, userId, teamCreationDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body("Team created successfully");
	}

	// Update the team details by adding an idea
	// The user submitting the idea is identified by the userId
	// The hackathonId identifies the hackathon
	@PostMapping("idea/{hackathonId}/{userId}")
	public ResponseEntity<String> updateTeamDetails(@PathVariable int hackathonId, @PathVariable int userId,
			@RequestBody AddIdeaDTO teamUpdateDTO) {
		teamService.updateTeamDetails(teamUpdateDTO, userId, hackathonId);
		return ResponseEntity.status(HttpStatus.OK).body("Idea submitted successfully");
	}

	// Reject a team by deleting it.
	// The teamId identifies the team to be deleted.
	@DeleteMapping("rejected/{teamId}")
	public ResponseEntity<String> updateTeamStatus(@PathVariable int teamId) {
		teamService.deleteTeam(teamId);
		return ResponseEntity.status(HttpStatus.OK).body("Team rejected successfully");
	}

	// Update the team status to selected.
	// The teamId identifies the team to be selected.
	@PutMapping("selected/{teamId}")
	public ResponseEntity<String> updateSelectedTeamStatus(@PathVariable int teamId) {
		teamService.selectTeamForNextStep(teamId);
		return ResponseEntity.status(HttpStatus.OK).body("Team selected successfully");

	}

	// Update the team details with the provided idea details, including files.
	@PostMapping("ideaFiles/{hackathonId}/{userId}")
	public ResponseEntity<String> updateIdeaDetails(@PathVariable Integer hackathonId, @PathVariable Integer userId,
			@RequestBody IdeaDetailsRequestDTO requestBody) {
		String message = teamService.FileSubmission(hackathonId, userId, requestBody);
		return ResponseEntity.ok(message);
	}
}
