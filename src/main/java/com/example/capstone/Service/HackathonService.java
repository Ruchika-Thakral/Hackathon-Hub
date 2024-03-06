package com.example.capstone.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.CreateHackathonDTO;
import com.example.capstone.DTO.HackathonDTO;
import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Repository.HackathonRepository;

@Service
public class HackathonService {

	@Autowired
	private HackathonRepository hackathonRepository;

	public void CreateHackathon(CreateHackathonDTO createHackathonDTO) {
		Hackathon hackathon = new Hackathon();
		hackathon.setCompleted(false);
		hackathon.setName(createHackathonDTO.getName());
		hackathon.setTheme(createHackathonDTO.getTheme());
		hackathon.setStartDate(createHackathonDTO.getStartDate());
		hackathon.setIdeaSubmissionDeadline(createHackathonDTO.getIdeaSubmissionDeadLine());
		hackathon.setImplementationSubmissionDeadLine(createHackathonDTO.getImplementationDeadLine());
		hackathon.setShortListDeadLine(createHackathonDTO.getShortListDeadLine());
		hackathon.setReviewStartTime(createHackathonDTO.getReviewStartTime());
		hackathon.setReviewEndTime(createHackathonDTO.getReviewEndTime());
		hackathonRepository.save(hackathon);
	}

//Retrieve all hackathons from the database
	public List<HackathonDTO> getAllHackathons() {
		List<Hackathon> hackathons = hackathonRepository.findAll();
		return hackathons.stream().map(this::convertToDTO).collect(Collectors.toList());
	}

	// Helper method to convert a Hackathon entity to a HackathonDTO
	private HackathonDTO convertToDTO(Hackathon hackathon) {
		HackathonDTO hackathonDto = new HackathonDTO();
	    hackathonDto.setHackathonId(hackathon.getHackathonId());
	    hackathonDto.setName(hackathon.getName());
	    hackathonDto.setTheme(hackathon.getTheme());
	    hackathonDto.setStartDate(hackathon.getStartDate());
	    hackathonDto.setIdeaSubmissionDeadline(hackathon.getIdeaSubmissionDeadline());
	    hackathonDto.setShortListDeadline(hackathon.getShortListDeadLine());
	    hackathonDto.setImplementationSubmissionDeadline(hackathon.getImplementationSubmissionDeadLine());
	    hackathonDto.setReviewStartTime(hackathon.getReviewStartTime());
	    hackathonDto.setReviewEndTime(hackathon.getReviewEndTime());
		return hackathonDto;
	}
}
