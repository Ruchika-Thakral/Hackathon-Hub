package com.example.capstone.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.ReviewDTO;
import com.example.capstone.Entity.Review;
import com.example.capstone.Entity.Team;
import com.example.capstone.Repository.ReviewRepository;

@Service
public class ReviewService {
@Autowired
private ReviewRepository reviewRepository;

@Autowired
private TeamService teamService;
public void addReview(int teamid,ReviewDTO reviewDTO)
{
Review review=new Review();	
Team team=teamService.getTeam(teamid);
review.setRating(reviewDTO.getRating());
review.setTeam(team);
team.getReviews().add(review);
teamService.updateTeam(team);
}

}
