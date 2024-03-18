package com.example.capstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.ReviewDTO;
import com.example.capstone.DTO.TeamDetailsToJudgeDTO;
import com.example.capstone.Service.JudgeService;

//Controller for Judge related API endpoints
@RestController
@RequestMapping("Judge")
public class JudgeController {

	// Injecting the JudgeService dependency
	@Autowired
	private JudgeService judgeService;
	
	 /**
     * Endpoint to add a review for a team.
     *
     * @param teamId    the ID of the team to review.
     * @param reviewDTO the DTO containing the review data.
     * @return a ResponseEntity indicating the result of the operation.
     */
	@PostMapping("review/{teamId}")
	public ResponseEntity<String> addReview(@PathVariable int teamId, @RequestBody ReviewDTO reviewDTO) {
		judgeService.addReview(teamId, reviewDTO);
		return  ResponseEntity.status(HttpStatus.OK).body("Review added successfully");
	}
	
	/**
     * Endpoint to retrieve details of selected teams for a given hackathon.
     *
     * @param hackathonId the ID of the hackathon.
     * @return a ResponseEntity containing a list of selected teams or a NOT_FOUND status.
     */
	@GetMapping("selectedTeams/{hackathonId}")
    public ResponseEntity<List<TeamDetailsToJudgeDTO>> getSelectedTeamsDetails(@PathVariable int hackathonId) {
        List<TeamDetailsToJudgeDTO> selectedTeams = judgeService.getSelectedTeamsDetails(hackathonId);
        if (selectedTeams != null && !selectedTeams.isEmpty()) {
            return ResponseEntity.ok(selectedTeams);
        } else {
        	// Respond with a 404 Not Found status if no teams are selected.
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}
