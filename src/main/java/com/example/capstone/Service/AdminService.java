package com.example.capstone.Service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.RegisterEvaluatorDTO;
import com.example.capstone.Entity.Role;
import com.example.capstone.DTO.AddEvaluatorsDTO;
import com.example.capstone.DTO.CreateHackathonDTO;
import com.example.capstone.DTO.GetEvaluatorsDTO;
import com.example.capstone.DTO.HackathonDTO;

@Service
public class AdminService {

	@Autowired
	private HackathonService hackathonService;

	@Autowired
	private UserService userService;

	public void createHackathon(CreateHackathonDTO createHackathonDTO) {
		hackathonService.CreateHackathon(createHackathonDTO);
	}

	public void addEvaluator(RegisterEvaluatorDTO addEvaluatorDTO) {
		userService.addEvaluator(addEvaluatorDTO);
	}

	public void assignEvaluators(AddEvaluatorsDTO addEvaluatorsDTO) {
		hackathonService.addEvaluators(addEvaluatorsDTO);
	}

	public List<HackathonDTO> getAllHackathons() {
		return hackathonService.getAllHackathons();
	}

	public List<GetEvaluatorsDTO> getEvaluators() {
		List<Role> roles = Arrays.asList(Role.judge, Role.panelist);
		return userService.getAvailableEvaluators(roles);
	}
	public void endHackathon(int hackathonId)
	{
		hackathonService.endHackathon(hackathonId);
	}

}
