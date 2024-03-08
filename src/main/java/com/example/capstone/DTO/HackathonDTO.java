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

	// constructor

	public HackathonDTO(Integer hackathonId, LocalDateTime ideaSubmissionDeadline,
			LocalDateTime implementationSubmissionDeadLine, String name, LocalDateTime reviewEndTime,
			LocalDateTime reviewStartTime, LocalDateTime shortListDeadLine, LocalDateTime startDate, String theme) {
		this.hackathonId = hackathonId;
		this.ideaSubmissionDeadline = ideaSubmissionDeadline;
		this.implementationSubmissionDeadline = implementationSubmissionDeadLine;
		this.name = name;
		this.reviewEndTime = reviewEndTime;
		this.reviewStartTime = reviewStartTime;
		this.shortListDeadline = shortListDeadLine;
		this.startDate = startDate;
		this.theme = theme;
	}

//    private String firstTeamId;
//    private String secondTeamId;
//    private String thirdTeamId;
//    private boolean completed;

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
