package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.AddIdeaDTO;
import com.example.capstone.DTO.TeamCreationDTO;
import com.example.capstone.Exceptions.Response;
import com.example.capstone.Service.TeamService;

@RestController
@RequestMapping("Team")
public class TeamController {

	@Autowired
	private TeamService teamService;

	@PostMapping("{hackathonId}/{userId}")
	public Response createTeam(@PathVariable int hackathonId, @PathVariable int userId,
			@RequestBody TeamCreationDTO teamCreationDTO) {
		teamService.CreateTeam(hackathonId, userId, teamCreationDTO);
		return new Response(HttpStatus.CREATED.value(), HttpStatus.CREATED, "Team created successfully");
	}

	@PostMapping("idea/{hackathonId}/{userId}")
	public Response updateTeamDetails(@PathVariable int hackathonId, @PathVariable int userId,
			@RequestBody AddIdeaDTO teamUpdateDTO) {
		teamService.updateTeamDetails(teamUpdateDTO, userId, hackathonId);
		return new Response(HttpStatus.OK.value(), HttpStatus.OK, "Idea submitted successfully");
	}

	@DeleteMapping("rejected/{teamId}")
	public Response updateTeamStatus(@PathVariable int teamId) {
		teamService.deleteTeam(teamId);
		return new Response(HttpStatus.OK.value(), HttpStatus.OK, "team rejected successfully");
	}
	@PutMapping("selected/{teamId}")
	public Response updateSelectedTeamStatus(@PathVariable int teamId)
	{
		teamService.selectForTeamNextStep(teamId);
		return new Response(HttpStatus.OK.value(), HttpStatus.OK, "team selected successfully");
	}
}
