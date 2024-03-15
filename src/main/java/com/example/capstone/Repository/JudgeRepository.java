package com.example.capstone.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.DTO.TeamDetailsToJudgeDTO;
import com.example.capstone.Entity.Judge;

@Repository
public interface JudgeRepository extends JpaRepository<Judge, Integer> {
	 @Query("SELECT NEW com.example.capstone.DTO.TeamDetailsToJudgeDTO(t.teamId, t.ideaRepo, t.ideaFiles) FROM Team t WHERE t.hackathon.hackathonId = :hackathonId AND t.status = com.example.capstone.Entity.Status.selected")
	    List<TeamDetailsToJudgeDTO> findSelectedTeamsDetailsByHackathonId(int hackathonId);
}
