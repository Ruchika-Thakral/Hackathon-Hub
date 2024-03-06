package com.example.capstone.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.AddEvaluatorDTO;
import com.example.capstone.DTO.CreateHackathonDTO;


@Service
public class AdminService {

@Autowired
private HackathonService hackathonService;

@Autowired
private UserService userService;
public void createHackathon(CreateHackathonDTO createHackathonDTO)
{
	hackathonService.CreateHackathon(createHackathonDTO);
}

public void addEvaluator(AddEvaluatorDTO addEvaluatorDTO)
{
	 userService.addEvaluator(addEvaluatorDTO);
}
}
