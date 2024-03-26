package com.example.capstone.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import com.example.capstone.DTO.AddEvaluatorsDTO;
import com.example.capstone.DTO.CreateHackathonDTO;
import com.example.capstone.DTO.HackathonDTO;
import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Judge;
import com.example.capstone.Entity.Panelist;
import com.example.capstone.Entity.Participant;
import com.example.capstone.Entity.Review;
import com.example.capstone.Entity.Role;
import com.example.capstone.Entity.Team;
import com.example.capstone.Entity.User;
import com.example.capstone.Exceptions.HackathonNotExistsException;
import com.example.capstone.Exceptions.UserNotFoundException;
import com.example.capstone.Repository.HackathonRepository;

//Service class for managing hackathons.
@Service
public class HackathonService {

	// Autowired repositories and services to interact with the database and other
	// services
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

	/**
	 * Method to create a new hackathon.
	 * 
	 * @param createHackathonDTO Data transfer object containing information for
	 *                           creating a hackathon
	 */
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
		hackathon.setDescription(createHackathonDTO.getDescription());
		hackathon.setPrizes(createHackathonDTO.getPrizes());
		hackathon.setRules(createHackathonDTO.getGuidelines());
		hackathon.setJudging_criteria(createHackathonDTO.getJudgingCriteria());
		hackathonRepository.save(hackathon);
	}

	/**
	 * Fetches a list of all hackathons.
	 * 
	 * @return List of HackathonDTOs
	 */
	public List<HackathonDTO> getAllHackathons() {
		List<HackathonDTO> hackathonDTOs = hackathonRepository.findHackathonsWithSelectedAttributes();
		return hackathonDTOs;
	}

	/**
	 * Formats a LocalDateTime object into a human-readable string.
	 * 
	 * @param dateTime LocalDateTime to format
	 * @return Formatted date and time string
	 */
	public String formatDate(LocalDateTime dateTime) {
		int year = dateTime.getYear();
		int month = dateTime.getMonthValue();
		int day = dateTime.getDayOfMonth();
		int hour = dateTime.getHour();
		int minute = dateTime.getMinute();
		int second = dateTime.getSecond();
		return day + "-" + month + "-" + year + "  " + hour + ":" + minute + ":" + second;
	}

	/**
	 * Adds evaluators to a hackathon.
	 * 
	 * @param addEvaluatorsDTO DTO containing information about the evaluators to
	 *                         add
	 */
	public void addEvaluators(AddEvaluatorsDTO addEvaluatorsDTO) {
		Optional<Hackathon> hackathon = hackathonRepository.findById(addEvaluatorsDTO.getHackathonId());
		if (hackathon.isPresent()) {
			List<User> users = userService.getUsersByIds(addEvaluatorsDTO.getEvaluators());
			for (int i = 0; i < users.size(); i++) {
				User user = users.get(i);
				if (user.isAvailable()) {
					String subject = "Invitation to Serve as Evaluator for " + hackathon.get().getName();
					String body = new String();
					String reciever = new String();
					body = "Dear Evaluator,\r\n" + "\r\n" + "On behalf of the organizing team of "
							+ hackathon.get().getName()
							+ ", I am delighted to extend an invitation to you to serve as a " + user.getRole()
							+ " our upcoming event.\r\n" + "\r\n" + "Event Details:\r\n" + "\r\n" + "Date: " + "\r\n"
							+ "Time: " + formatDate(hackathon.get().getStartDate()) + "\r\n" + " %s " + "\r\n" + " %s "
							+ "\r\n"
							+ "As a , your expertise and insights will play a crucial role in evaluating the projects submitted by our participants. Your valuable feedback and assessment will help recognize and reward innovation, creativity, and technical excellence.\r\n"
							+ "\r\n" + "We look forward to hearing from you soon and working together to make"
							+ hackathon.get().getName() + " a memorable and impactful event.\r\n" + "\r\n"
							+ "Thank you for considering our invitation, and we eagerly await your response.\r\n"
							+ "\r\n" + "Best regards,\r\n" + "\r\n" + "Team HackerHub";
					user.setAvailable(false);
					user.setAssignedHackathon(hackathon.get().getHackathonId());
					reciever = user.getEmail();
					if (user.getRole().equals(Role.panelist)) {
						Panelist panelist = panelistService.createPanelist(user, hackathon.get());
						hackathon.get().getPanelists().add(panelist);
						user.getPanelists().add(panelist);
						body = String.format(body,
								"shortlisting start time:" + formatDate(hackathon.get().getIdeaSubmissionDeadline()),
								"shortlisting end time:" + formatDate(hackathon.get().getShortListDeadLine()));
					} else if (user.getRole().equals(Role.judge)) {
						Judge judge = judgeService.createJudge(user, hackathon.get());
						hackathon.get().getJudges().add(judge);
						user.getJudges().add(judge);
						body = String.format(body,
								"reviewing start time:" + formatDate(hackathon.get().getReviewStartTime()),
								"review end time:" + formatDate(hackathon.get().getReviewEndTime()));
					}
					mailService.sendEmail(reciever, body, subject);
				}
			}
			userService.updateUsers(users);
			hackathonRepository.save(hackathon.get());
		} else {
			throw new UserNotFoundException("hackathon not found");
		}
	}

	/**
	 * Finds a specific hackathon by ID.
	 * 
	 * @param id The ID of the hackathon to find
	 * @return The found Hackathon entity
	 */
	public Hackathon findHackathon(int id) {
		Optional<Hackathon> hackathon = hackathonRepository.findById(id);
		if (hackathon.isEmpty()) {
			throw new HackathonNotExistsException("Hackathon not exists");
		} else {
			return hackathon.get();
		}
	}

	/**
	 * Updates a hackathon's information.
	 * 
	 * @param hackathon The Hackathon entity to update
	 */
	public void updateHackathon(Hackathon hackathon) {
		hackathonRepository.save(hackathon);
	}

	/**
	 * Changes the availability state of a list of users to available.
	 * 
	 * @param users List of User entities to update availability
	 */
	public void changeAvailablityState(List<User> users) {
		for (User user : users) {
			user.setAvailable(true);
		}
	}

	/**
	 * Calculates the consolidated rating for a team.
	 * 
	 * @param team The Team entity for which the rating is to be calculated
	 * @return The calculated consolidated rating
	 */
	public Float getConsolidatedRating(Team team) {

		float rating = 0;
		for (Review review : team.getReviews()) {
			rating += review.getRating();
		}
		for (Participant participant : team.getParticipants()) {
			participant.getUser().setAvailable(true);
			participant.getUser().setAssignedHackathon(-1);
		}
		Float consolidatedRating = (rating / team.getReviews().size());
		team.setConsolidatedRating(consolidatedRating);
		return consolidatedRating;
	}

	/**
	 * Finalizes a hackathon by computing final scores and updating the hackathon
	 * state.
	 * 
	 * @param hackathonId The ID of the hackathon to finalize
	 */
	public void endHackathon(int hackathonId) {
		Optional<Hackathon> hackathon = hackathonRepository.findById(hackathonId);
		List<Team> teams = hackathon.get().getTeams();
		List<Pair<Integer, Float>> scores = new ArrayList<>();
		for (Team team : teams) {
			scores.add(Pair.of(team.getTeamId(), getConsolidatedRating(team)));
		}
		for (Judge judge : hackathon.get().getJudges()) {
			judge.getUser().setAvailable(true);
			judge.getUser().setAssignedHackathon(-1);
		}
		for (Panelist panelist : hackathon.get().getPanelists()) {
			panelist.getUser().setAvailable(true);
			panelist.getUser().setAssignedHackathon(-1);
		}
		Collections.sort(scores, (s1, s2) -> s1.getSecond().compareTo(s2.getSecond()));
		hackathon.get().setCompleted(true);
		hackathon.get().setFirstTeamId(scores.size() >= 1 ? String.valueOf(scores.get(0).getFirst()) : null);
		hackathon.get().setSecondTeamId(scores.size() >= 2 ? String.valueOf(scores.get(1).getFirst()) : null);
		hackathon.get().setThirdTeamId(scores.size() >= 3 ? String.valueOf(scores.get(2).getFirst()) : null);
		updateHackathon(hackathon.get());
	}

}
