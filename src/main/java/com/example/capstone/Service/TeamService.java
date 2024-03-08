package com.example.capstone.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.TeamCreationDTO;
import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Panelist;
import com.example.capstone.Entity.Participant;
import com.example.capstone.Entity.Status;
import com.example.capstone.Entity.Team;
import com.example.capstone.Entity.User;
import com.example.capstone.Repository.TeamRepository;

import jakarta.transaction.Transactional;

@Service
public class TeamService {
@Autowired
private HackathonService hackathonService;
@Autowired
private UserService userService;
@Autowired
private ParticipantService participantService;
@Autowired
private PanelistService panelistService;
@Autowired
private TeamRepository teamRepository;
@Transactional
public  void CreateTeam(int hackathonid,int userid,TeamCreationDTO teamCreationDTO)
{
  Team team=new Team();
  User leader=userService.findUserById(userid);
  teamRepository.save(team);
  Hackathon hackathon=hackathonService.findHackathon(hackathonid);
  Participant participantLeader=participantService.getParticipant(team, leader,hackathon,true);
  leader.setParticipants(participantLeader);
  leader.setAvailable(false);
  List<User> users=userService.getUsers(teamCreationDTO.getEmails());
  List<Participant> participants=team.getParticipants();
  participants.add(participantLeader);
  for(User user:users)
  {
	  Participant participant=participantService.getParticipant(team, user,hackathon, false);
	  user.setAvailable(false);
	  user.setParticipants(participant);
	  participants.add(participant);
  }
  team.setParticipants(participants);
  int index=(team.getTeamId()+1)%(hackathon.getPanelists().size());
  Panelist panelist=hackathon.getPanelists().get(index);
  team.setPanelist(panelist);
  panelist.setTeam(team);
  hackathon.setTeams(team);
  team.setHackathon(hackathon);
  userService.updateUsers(users);
  panelistService.updatePanelist(panelist);
  hackathonService.updateHackathon(hackathon);
}
}
