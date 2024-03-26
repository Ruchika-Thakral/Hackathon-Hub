package com.example.capstone.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public class HackathonDTO {

	private int hackathonId;
	private String name;
	private String theme;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime startDate;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime ideaSubmissionDeadline;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime shortListDeadline;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime implementationSubmissionDeadline;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime reviewStartTime;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime reviewEndTime;

	private String description;
	private String prizes;
	private String rules;
	private String judgingCriteria;
	private boolean isCompleted;
	private String firstTeamId;
	private String secondTeamId;
	private String thirdTeamId;

	// constructor
	public HackathonDTO() {

	}

	public HackathonDTO(int hackathonId, String name, String theme, LocalDateTime startDate,
			LocalDateTime ideaSubmissionDeadline, LocalDateTime shortListDeadline,
			LocalDateTime implementationSubmissionDeadline, LocalDateTime reviewStartTime, LocalDateTime reviewEndTime,
			String description, String prizes, String rules, String judgingCriteria, boolean isCompleted,
			String firstTeamId, String secondTeamId, String thirdTeamId) {
		super();
		this.hackathonId = hackathonId;
		this.name = name;
		this.theme = theme;
		this.startDate = startDate;
		this.ideaSubmissionDeadline = ideaSubmissionDeadline;
		this.shortListDeadline = shortListDeadline;
		this.implementationSubmissionDeadline = implementationSubmissionDeadline;
		this.reviewStartTime = reviewStartTime;
		this.reviewEndTime = reviewEndTime;
		this.description = description;
		this.prizes = prizes;
		this.rules = rules;
		this.judgingCriteria = judgingCriteria;
		this.isCompleted = isCompleted;

		this.firstTeamId = firstTeamId;
		this.secondTeamId = secondTeamId;
		this.thirdTeamId = thirdTeamId;
	}

	public boolean getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public String getFirstTeamId() {
		return firstTeamId;
	}

	public void setFirstTeamId(String firstTeamId) {
		this.firstTeamId = firstTeamId;
	}

	public String getSecondTeamId() {
		return secondTeamId;
	}

	public void setSecondTeamId(String secondTeamId) {
		this.secondTeamId = secondTeamId;
	}

	public String getThirdTeamId() {
		return thirdTeamId;
	}

	public void setThirdTeamId(String thirdTeamId) {
		this.thirdTeamId = thirdTeamId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrizes() {
		return prizes;
	}

	public void setPrizes(String prizes) {
		this.prizes = prizes;
	}

	public String getRules() {
		return rules;
	}

	public void setRules(String rules) {
		this.rules = rules;
	}

	public String getJudgingCriteria() {
		return judgingCriteria;
	}

	public void setJudgingCriteria(String judgingCriteria) {
		this.judgingCriteria = judgingCriteria;
	}

	public int getHackathonId() {
		return hackathonId;
	}

	public void setHackathonId(int hackathonId) {
		this.hackathonId = hackathonId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getIdeaSubmissionDeadline() {
		return ideaSubmissionDeadline;
	}

	public void setIdeaSubmissionDeadline(LocalDateTime ideaSubmissionDeadline) {
		this.ideaSubmissionDeadline = ideaSubmissionDeadline;
	}

	public LocalDateTime getShortListDeadline() {
		return shortListDeadline;
	}

	public void setShortListDeadline(LocalDateTime shortListDeadline) {
		this.shortListDeadline = shortListDeadline;
	}

	public LocalDateTime getImplementationSubmissionDeadline() {
		return implementationSubmissionDeadline;
	}

	public void setImplementationSubmissionDeadline(LocalDateTime implementationSubmissionDeadline) {
		this.implementationSubmissionDeadline = implementationSubmissionDeadline;
	}

	public LocalDateTime getReviewStartTime() {
		return reviewStartTime;
	}

	public void setReviewStartTime(LocalDateTime reviewStartTime) {
		this.reviewStartTime = reviewStartTime;
	}

	public LocalDateTime getReviewEndTime() {
		return reviewEndTime;
	}

	public void setReviewEndTime(LocalDateTime reviewEndTime) {
		this.reviewEndTime = reviewEndTime;
	}

}
