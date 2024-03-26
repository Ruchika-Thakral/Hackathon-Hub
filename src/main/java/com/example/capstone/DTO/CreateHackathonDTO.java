package com.example.capstone.DTO;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public class CreateHackathonDTO {
	private String name;
	private String theme;
	private LocalDateTime startDate;
	private LocalDateTime ideaSubmissionDeadLine;
	private LocalDateTime shortListDeadLine;
	private LocalDateTime implementationDeadLine;
	private LocalDateTime reviewStartTime;
	private LocalDateTime reviewEndTime;
	private String description;
	private String guidelines;
	private String prizes;
	private String judgingCriteria;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getGuidelines() {
		return guidelines;
	}

	public void setGuidelines(String guidelines) {
		this.guidelines = guidelines;
	}

	public String getPrizes() {
		return prizes;
	}

	public void setPrizes(String prizes) {
		this.prizes = prizes;
	}

	public String getJudgingCriteria() {
		return judgingCriteria;
	}

	public void setJudgingCriteria(String judgingCriteria) {
		this.judgingCriteria = judgingCriteria;
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

	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	public LocalDateTime getIdeaSubmissionDeadLine() {
		return ideaSubmissionDeadLine;
	}

	public void setIdeaSubmissionDeadLine(LocalDateTime ideaSubmissionDeadLine) {
		this.ideaSubmissionDeadLine = ideaSubmissionDeadLine;
	}

	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	public LocalDateTime getShortListDeadLine() {
		return shortListDeadLine;
	}

	public void setShortListDeadLine(LocalDateTime shortListDeadLine) {
		this.shortListDeadLine = shortListDeadLine;
	}

	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	public LocalDateTime getImplementationDeadLine() {
		return implementationDeadLine;
	}

	public void setImplementationDeadLine(LocalDateTime implementationDeadLine) {
		this.implementationDeadLine = implementationDeadLine;
	}

	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	public LocalDateTime getReviewStartTime() {
		return reviewStartTime;
	}

	public void setReviewStartTime(LocalDateTime reviewStartTime) {
		this.reviewStartTime = reviewStartTime;
	}

	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	public LocalDateTime getReviewEndTime() {
		return reviewEndTime;
	}

	public void setReviewEndTime(LocalDateTime reviewEndTime) {
		this.reviewEndTime = reviewEndTime;
	}

}
