package com.example.capstone.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.ReviewDTO;
import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Judge;
import com.example.capstone.Entity.User;
import com.example.capstone.Repository.JudgeRepository;

@Service
public class JudgeService {
	@Autowired
	private JudgeRepository judgeRepository;

	@Autowired
	private ReviewService reviewService;

	public Judge createJudge(User user, Hackathon hackathon) {
		Judge judge = new Judge();
		judge.setHackthon(hackathon);
		judge.setUser(user);
		judgeRepository.saveAndFlush(judge);
		return judge;
	}

	public void addReview(int teamId, ReviewDTO reviewDTO) {
		reviewService.addReview(teamId, reviewDTO);
	}
}
