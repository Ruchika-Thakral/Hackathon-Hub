package com.example.capstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.DTO.HackathonDTO;
import com.example.capstone.Service.HackathonService;

@RestController
@RequestMapping("Hackathon")
public class HackathonController {
	@Autowired
	private HackathonService hackathonService;

	@GetMapping
	public List<HackathonDTO> getHackathons() {
		return hackathonService.getAllHackathons();
	}
}
