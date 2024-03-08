package com.example.capstone.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.AddEvaluatorsDTO;
import com.example.capstone.DTO.CreateHackathonDTO;
import com.example.capstone.DTO.HackathonDTO;
import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Judge;
import com.example.capstone.Entity.Panelist;
import com.example.capstone.Entity.Role;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.HackathonNotExistsException;
import com.example.capstone.Exceptions.UserNotFoundException;
import com.example.capstone.Repository.HackathonRepository;

@Service
public class HackathonService {

	@Autowired
	private HackathonRepository hackathonRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private PanelistService panelistService;
	@Autowired
	private JudgeService judgeService;
	@Autowired
	private MailService mailService;

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

	// Helper method to convert a Hackathon entity to a HackathonDTO
	
	public List<HackathonDTO> getAllHackathons() {
        List<HackathonDTO> hackathonDTOs = hackathonRepository.findHackathonsWithSelectedAttributes();
        return hackathonDTOs;
    }
	public String formatDate(LocalDateTime dateTime) {
		int year = dateTime.getYear();
		int month = dateTime.getMonthValue();
		int day = dateTime.getDayOfMonth();
		int hour = dateTime.getHour();
		int minute = dateTime.getMinute();
		int second = dateTime.getSecond();
		return day + "-" + month + "-" + year + "  " + hour + ":" + minute + ":" + second;
	}

	public void addEvaluators(AddEvaluatorsDTO addEvaluatorsDTO) {
		Optional<Hackathon> hackathon = hackathonRepository.findById(addEvaluatorsDTO.getHackathonId());
		if (hackathon.isPresent()) {
			List<User> users = userService.getUsersByIds(addEvaluatorsDTO.getEvaluators());
			List<Panelist> panelists = hackathon.get().getPanelists();
			List<Judge> judges = hackathon.get().getJudges();
			for (int i = 0; i < users.size(); i++) {
				User user = users.get(i);
				if (user.isAvailable()) {
					String subject = "Hackathon assigned";
					String body = new String();
					String reciever = new String();
					if (user.getRole().equals(Role.panelist)) {
						Panelist panelist = panelistService.createPanelist(user, hackathon.get());
						user.setAvailable(false);
						users.add(i, user);
						panelists.add(panelist);
						reciever = user.getEmail();
						body = "We are glad to inform that you are asigned as panelist for the hackathon "
								+ hackathon.get().getName() + ".\n you should be available in given timings \n"
								+ "start time :" + formatDate(hackathon.get().getIdeaSubmissionDeadline())
								+ "\n end time : " + formatDate(hackathon.get().getShortListDeadLine()) + "\n"
								+ "\n Regards\n Team HackerHub";

					} else if (user.getRole().equals(Role.judge)) {
						Judge judge = judgeService.createJudge(user, hackathon.get());
						user.setAvailable(false);
						users.add(i, user);
						judges.add(judge);
						reciever = user.getEmail();
						body = "We are glad to inform that you are asigned as panelist for the hackathon "
								+ hackathon.get().getName() + ".\n you should be available in given timings \n"
								+ "start time :" + hackathon.get().getIdeaSubmissionDeadline() + "\n end time : "
								+ hackathon.get().getShortListDeadLine() + "\n" + "\n Regards\n Team HackerHub";

					}
					mailService.sendEmail(reciever, body, subject);
				}
			}
			hackathon.get().setJudges(judges);
			hackathon.get().setPanelists(panelists);
			userService.updateUsers(users);
			hackathonRepository.save(hackathon.get());
		} 
		else {
			throw new UserNotFoundException("hackathon not found");
		}
	}
	public Hackathon findHackathon(int id)
	{
		Optional<Hackathon> hackathon=hackathonRepository.findById(id);
		if(hackathon.isEmpty())
		{
			throw new HackathonNotExistsException("Hackathon not exists");
		}
		else
		{
			return hackathon.get();
		}
	}
	public  void updateHackathon(Hackathon hackathon)
	{
		hackathonRepository.save(hackathon);
	}

}
