package com.example.capstone.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.AddIdeaDTO;
import com.example.capstone.DTO.IdeaDetailsRequestDTO;
import com.example.capstone.DTO.TeamCreationDTO;
import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Panelist;
import com.example.capstone.Entity.Participant;
import com.example.capstone.Entity.Status;
import com.example.capstone.Entity.Team;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.TeamNotFoundException;
import com.example.capstone.Exceptions.UnauthorizedException;
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
	@Autowired
	private MailService mailService;

	@Transactional
	public void CreateTeam(int hackathonid, int userid, TeamCreationDTO teamCreationDTO) {
		if(checkTimeBound(hackathonid))
		{
		Hackathon hackathon=hackathonService.findHackathon(hackathonid);
		Team team = new Team();
		team.setName(teamCreationDTO.getName());
		team.setStatus(Status.registered);
		User leader = userService.findUserById(userid);
		teamRepository.save(team);
		Participant participantLeader = participantService.getParticipant(team, leader, hackathon, true);
		leader.setParticipants(participantLeader);
		leader.setAvailable(false);
		leader.setAssignedHackathon(hackathon.getHackathonId());
		List<User> users = userService.getUsers(teamCreationDTO.getEmails());
		List<Participant> participants = team.getParticipants();
		participants.add(participantLeader);
		for (User user : users) {
			Participant participant = participantService.getParticipant(team, user, hackathon, false);
			user.setAvailable(false);
			user.setAssignedHackathon(hackathon.getHackathonId());
			user.setParticipants(participant);
			participants.add(participant);
		}
		team.setParticipants(participants);
		int index = (team.getTeamId() + 1) % (hackathon.getPanelists().size());
		Panelist panelist = hackathon.getPanelists().get(index);
		team.setPanelist(panelist);
		panelist.setTeam(team);
		hackathon.setTeams(team);
		team.setHackathon(hackathon);
		userService.updateUsers(users);
		panelistService.updatePanelist(panelist);
		hackathonService.updateHackathon(hackathon);
		}
	}
    public boolean checkTimeBound(int hackathonId)
    {
		Hackathon hackathon = hackathonService.findHackathon(hackathonId);
		LocalDateTime currentTime=LocalDateTime.now();
		if(currentTime.isBefore(hackathon.getStartDate()))
		{
			throw new UnauthorizedException("Hackathon is not Started");
		}
		else if(currentTime.isAfter(hackathon.getIdeaSubmissionDeadline()))
		{
			throw new UnauthorizedException("Team registration and idea submmission is closed");
		}
		else
		{
			return true;
		}
    }
	@Transactional
	public void updateTeamDetails(AddIdeaDTO teamUpdateDTO, int userId, int hackathonId) {
        if(checkTimeBound(hackathonId))
        {
		User user = userService.getUser(userId);
		List<Participant> participants = user.getParticipants();
		if (participants != null && !participants.isEmpty()) {
			for (Participant participant : participants) {
				if (participant.isLeader()) {
					Team team = participant.getTeam();
					if (team.getHackathon() != null && team.getHackathon().getHackathonId().equals(hackathonId)) {
						team.setName(teamUpdateDTO.getUpdatedName());
						team.setIdeaTitle(teamUpdateDTO.getUpdatedIdeaTitle());
						team.setIdeaBody(teamUpdateDTO.getUpdatedIdeaBody());
						team.setIdeaDomain(teamUpdateDTO.getUpdatedIdeaDomain());
						teamRepository.save(team);
					}
				} else {
					throw new UnauthorizedException("Sorry, your not a leader to add Idea ");
				}
			}
		}
        }
	}

	@Transactional
	public void deleteTeam(int id) {
		Team team = teamRepository.findById(id).get();
		if (team != null) {
			for (Participant participant : team.getParticipants()) {
				User user = participant.getUser();
				user.setAvailable(true);
				String subject = "Update on Your Submission";
				String body = "Dear Team,\r\n" + "\r\n"
						+ "After careful consideration and review, we regret to inform you that your recent submission did not advance to the next phase.\r\n"
						+ "\r\n"
						+ "We appreciate the effort and creativity you put into your proposal. We encourage you to seek feedback and consider this experience as an opportunity\r\n"
						+ "\r\n"
						+ "for growth and improvement. Please do not be disheartened, as there will be more opportunities to showcase your innovative ideas in the future.\r\n"
						+ "\r\n" + "Thank you for your contribution and continued dedication.\r\n" + "\r\n"
						+ "Best regards,\r\n" + "\r\n" + "Team HackerHub";
				mailService.sendEmail(user.getEmail(), body, subject);
			}
			team.setStatus(Status.rejected);
			teamRepository.save(team);
		}
	}

	public void selectTeamForNextStep(int teamId) {
		Team team = teamRepository.findById(teamId).get();
		if (team != null) {
			for (Participant participant : team.getParticipants()) {
				String email = participant.getUser().getEmail();
				String subject = "Congratulations! You've Advanced to the Next Step";
				String body = "Dear Team,\r\n" + "\r\n"
						+ "We’re thrilled to announce that you have been selected to move forward to the next step. Your dedication and hard work have truly set you apart.\r\n"
						+ "\r\n"
						+ "Details on the upcoming phase, including expectations and timelines, will be shared soon. In the meantime, please ensure you're prepared for an increased level of involvement.\r\n"
						+ "\r\n"
						+ "Should you have any questions or need further clarification, feel free to reach out.\r\n"
						+ "\r\n" + "Congratulations once again on your achievement!\r\n" + "\r\n" + "Best regards,\r\n"
						+ "\r\n" + "Team HackerHub";
				mailService.sendEmail(email, body, subject);
			}
		} else {
			throw new TeamNotFoundException("Team not found");
		}
		team.setStatus(Status.selected);
		teamRepository.save(team);
	}

	public Team getTeam(int id) {
		return teamRepository.findById(id).get();
	}

	public void updateTeam(Team team) {
		teamRepository.save(team);
	}

	public String FileSubmission(int hackathonId, int userId, IdeaDetailsRequestDTO requestBody) {
		User user = userService.findUserById(userId);
		List<Participant> participants = user.getParticipants();
		for (Participant participant : participants) 
		{
			if (participant.isLeader() && participant.getTeam().getHackathon().getHackathonId().equals(hackathonId)) 
			{
				Team team = participant.getTeam();
				if (team.getStatus().equals(Status.selected)) 
				{
					team.setIdeaRepo(requestBody.getIdeaRepo());
					team.setIdeaFiles(requestBody.getIdeaFiles());
					teamRepository.save(team);
					return "Your idea files have been submitted.";
				}
				else
				{
					throw new UnauthorizedException("Your team is not selected, Better luck next time champ!");
				}
			} 
			else 
			{
				throw new UnauthorizedException("Oops, You are not a leader!");
			}
		}
		return "Idea files submitted successfully";
	}
}
