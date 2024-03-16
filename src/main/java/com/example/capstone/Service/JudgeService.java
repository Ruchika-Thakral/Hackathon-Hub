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

@Service
public class JudgeService {

	@Autowired
	private ReviewService reviewService;
     
	@Autowired
	private JudgeRepository judgeRepository;
	public Judge createJudge(User user, Hackathon hackathon) {
		Judge judge = new Judge();
		judge.setHackthon(hackathon);
		judge.setUser(user);
		return judge;
	}

	public void addReview(int teamId, ReviewDTO reviewDTO) {
		reviewService.addReview(teamId, reviewDTO);
	}
	public JudgeHackathonDTO getJudgeHackathonDTO(int judgeId)
	{
		return judgeRepository.findAssignedHackathon(judgeId);
	}
	public List<TeamDetailsToJudgeDTO> getSelectedTeamsDetails(int hackathonId) {
		return judgeRepository.findSelectedTeamsDetailsByHackathonId(hackathonId);
	}
}
