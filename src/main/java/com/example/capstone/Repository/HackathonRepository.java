package com.example.capstone.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.capstone.DTO.HackathonDTO;
import com.example.capstone.Entity.Hackathon;

public interface HackathonRepository extends JpaRepository<Hackathon,Integer> {
	@Query("SELECT new com.example.capstone.DTO.HackathonDTO(h.hackathonId, h.ideaSubmissionDeadline, h.implementationSubmissionDeadLine, h.name, h.reviewEndTime, h.reviewStartTime, h.shortListDeadLine, h.startDate, h.theme) FROM Hackathon h")
    List<HackathonDTO> findHackathonsWithSelectedAttributes();
}
