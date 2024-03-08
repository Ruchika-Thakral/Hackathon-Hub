package com.example.capstone.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Judge;
import com.example.capstone.Entity.User;
import com.example.capstone.Repository.JudgeRepository;

@Service
public class JudgeService {
@Autowired
private JudgeRepository judgeRepository;
public Judge createJudge(User user,Hackathon hackathon)
{
	Judge judge=new Judge();
	judge.setHackthon(hackathon);
	judge.setUser(user);
	judgeRepository.saveAndFlush(judge);
	return judge;
}
}
