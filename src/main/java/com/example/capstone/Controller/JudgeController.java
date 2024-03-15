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

@RestController
@RequestMapping("Judge")
public class JudgeController {

	@Autowired
	private JudgeService judgeService;
	@PostMapping("review/{teamId}")
	public ResponseEntity<String> addReview(@PathVariable int teamId, @RequestBody ReviewDTO reviewDTO) {
		judgeService.addReview(teamId, reviewDTO);
		return  ResponseEntity.status(HttpStatus.OK).body("Review added successfully");
	}
	@GetMapping("selectedTeams/{hackathonId}")
    public ResponseEntity<List<TeamDetailsToJudgeDTO>> getSelectedTeamsDetails(@PathVariable int hackathonId) {
        List<TeamDetailsToJudgeDTO> selectedTeams = judgeService.getSelectedTeamsDetails(hackathonId);
        if (selectedTeams != null && !selectedTeams.isEmpty()) {
            return ResponseEntity.ok(selectedTeams);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}
