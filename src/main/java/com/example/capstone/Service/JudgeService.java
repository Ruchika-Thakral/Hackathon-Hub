package com.example.capstone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.JudgeHackathonDTO;
import com.example.capstone.DTO.ReviewDTO;
import com.example.capstone.DTO.TeamDetailsToJudgeDTO;
import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Judge;
import com.example.capstone.Entity.User;
import com.example.capstone.Repository.JudgeRepository;

//Service class for judge-related operations.
@Service
public class JudgeService {

	// Autowired repositories and services to interact with the database and other services
	@Autowired
	private ReviewService reviewService;

	@Autowired
	private JudgeRepository judgeRepository;

	/**
     * Creates a new Judge entity for a given User and Hackathon.
     * 
     * @param user      The User who will be assigned as a Judge.
     * @param hackathon The Hackathon for which the User will be judging.
     * @return Judge    The newly created Judge entity.
     */
	public Judge createJudge(User user, Hackathon hackathon) {
		Judge judge = new Judge();
		judge.setHackthon(hackathon);
		judge.setUser(user);
		return judge;
	}


    /**
     * Delegates to the ReviewService to add a review for a specific team.
     * 
     * @param teamId     The id of the team being reviewed.
     * @param reviewDTO  The data transfer object containing review details.
     */
	public void addReview(int teamId, ReviewDTO reviewDTO) {
		reviewService.addReview(teamId, reviewDTO);
	}

	/**
     * Retrieves a JudgeHackathonDTO which includes hackathon details assigned to a judge.
     * 
     * @param judgeId  The identifier of the Judge.
     * @return JudgeHackathonDTO The transfer object containing assigned hackathon details for a judge.
     */
	public JudgeHackathonDTO getJudgeHackathonDTO(int judgeId) {
		return judgeRepository.findAssignedHackathon(judgeId);
	}

	 /**
     * Fetches a list of teams selected for a particular hackathon for judging purposes.
     * 
     * @param hackathonId  The identifier of the Hackathon.
     * @return List<TeamDetailsToJudgeDTO> A list of data transfer objects containing team details.
     */
	public List<TeamDetailsToJudgeDTO> getSelectedTeamsDetails(int hackathonId) {
		return judgeRepository.findSelectedTeamsDetailsByHackathonId(hackathonId);
	}
}
