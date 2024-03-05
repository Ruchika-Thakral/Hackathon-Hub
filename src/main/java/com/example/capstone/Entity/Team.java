package com.example.capstone.Entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Team {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer teamId;
	private String name;
	private String ideaTitle;
	private Status ideaBody;
	private String ideaRepo;
	private String ideaFiles;
	private String ideaDomain;
	private Float consolidatedRating;
	private Status status;
	@OneToMany
	private List<Review> reviews;
	@OneToMany
	private List<Participant> participants;
	@OneToOne
	private Panelist panelist;
	@ManyToOne
	private Hackathon hackthon;
	public Integer getTeamId() {
		return teamId;
	}
	public void setTeamId(Integer teamId) {
		this.teamId = teamId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getIdeaTitle() {
		return ideaTitle;
	}
	public void setIdeaTitle(String ideaTitle) {
		this.ideaTitle = ideaTitle;
	}
	public Status getIdeaBody() {
		return ideaBody;
	}
	public void setIdeaBody(Status ideaBody) {
		this.ideaBody = ideaBody;
	}
	public String getIdeaRepo() {
		return ideaRepo;
	}
	public void setIdeaRepo(String ideaRepo) {
		this.ideaRepo = ideaRepo;
	}
	public String getIdeaFiles() {
		return ideaFiles;
	}
	public void setIdeaFiles(String ideaFiles) {
		this.ideaFiles = ideaFiles;
	}
	public String getIdeaDomain() {
		return ideaDomain;
	}
	public void setIdeaDomain(String ideaDomain) {
		this.ideaDomain = ideaDomain;
	}
	public Float getConsolidatedRating() {
		return consolidatedRating;
	}
	public void setConsolidatedRating(Float consolidatedRating) {
		this.consolidatedRating = consolidatedRating;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public List<Review> getReviews() {
		return reviews;
	}
	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	public List<Participant> getParticipants() {
		return participants;
	}
	public void setParticipants(List<Participant> participants) {
		this.participants = participants;
	}
	public Panelist getPanelist() {
		return panelist;
	}
	public void setPanelist(Panelist panelist) {
		this.panelist = panelist;
	}
	public Hackathon getHackthon() {
		return hackthon;
	}
	public void setHackthon(Hackathon hackthon) {
		this.hackthon = hackthon;
	}
	
}
