package com.example.capstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.ReviewDTO;
import com.example.capstone.Exceptions.Response;
import com.example.capstone.Service.JudgeService;

@RestController
@RequestMapping("Judge")
public class JudgeController {

	@Autowired
	private JudgeService judgeService;

	@PostMapping("review/{teamId}")
	public Response addReview(@PathVariable int teamId, @RequestBody ReviewDTO reviewDTO) {
		judgeService.addReview(teamId, reviewDTO);
		return new Response(HttpStatus.OK.value(), HttpStatus.OK, "Review added successfully");
	}

}
