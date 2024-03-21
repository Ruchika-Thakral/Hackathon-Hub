package com.example.capstone.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.DTO.JudgeHackathonDTO;
import com.example.capstone.DTO.TeamDetailsToJudgeDTO;
import com.example.capstone.Entity.Judge;

@Repository
public interface JudgeRepository extends JpaRepository<Judge, Integer> {
	 @Query("SELECT NEW com.example.capstone.DTO.TeamDetailsToJudgeDTO(t.teamId, t.ideaRepo, t.ideaFiles,t.ideaBody,t.ideaDomain,t.ideaTitle,t.name,t.status) FROM Team t WHERE t.hackathon.hackathonId = :hackathonId AND t.status = com.example.capstone.Entity.Status.selected")
	    List<TeamDetailsToJudgeDTO> findSelectedTeamsDetailsByHackathonId(int hackathonId);
	 @Query("SELECT NEW com.example.capstone.DTO.JudgeHackathonDTO(j.hackathon.hackathonId,j.hackathon.name,j.hackathon.reviewStartTime,j.hackathon.reviewEndTime,j.hackathon.judging_criteria) FROM Judge j WHERE j.judgeId=:judgeId AND j.hackathon.isCompleted=false")
	 JudgeHackathonDTO findAssignedHackathon(int judgeId);
	 
}
