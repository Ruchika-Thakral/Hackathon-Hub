package com.example.capstone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Participant;
import com.example.capstone.Entity.Team;
import com.example.capstone.Entity.User;
import com.example.capstone.Repository.ParticipantRepository;

import jakarta.transaction.Transactional;

@Service
public class ParticipantService {
@Autowired
private ParticipantRepository participantRepository;
@Transactional
public Participant getParticipant(Team team,User user,Hackathon hackathon,Boolean isLeader)
{
	Participant participant=new Participant();
	participant.setTeam(team);
	participant.setUser(user);
	participant.setLeader(isLeader);
	participantRepository.save(participant);
	return participant;
}
//public void saveParticipants(List<Participant> participants)
//{
//	 synchronized (participants) {
//	for(Participant p:participants)
//	{
//		participantRepository.save(p);
//	}
//	 }
//}
}
