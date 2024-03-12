package com.example.capstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.TeamDetailsToPanelistDTO;
import com.example.capstone.Service.PanelistService;

@RestController
public class PanelistController {
	@Autowired
	private PanelistService panelistService;

	@GetMapping("{hackathonId}/{panelistId}")
	public ResponseEntity<?> getTeamNamesByPanelistAndHackathon(@PathVariable Integer panelistId,
			@PathVariable Integer hackathonId) {
		List<TeamDetailsToPanelistDTO> teamNames = panelistService.getTeamNamesByPanelistIdAndHackathonId(panelistId,
				hackathonId);

		if (teamNames != null && !teamNames.isEmpty()) {
			return new ResponseEntity<>(teamNames, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Panelist not found or Panelist does not handle this hackathon",
					HttpStatus.NOT_FOUND);
		}
	}
}
