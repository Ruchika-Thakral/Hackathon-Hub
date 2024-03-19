package com.example.capstone.Entity;

import java.util.List;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

//Entity class representing users in the system
@Entity
public class User {
	// Primary key for the user entity
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;

	// Name of the user
	private String name;
	@Column(unique = true)
	// Email address of the user
	private String email;

	// Password of the user
	private String password;

	// Role of the user
	@Enumerated(EnumType.STRING)
	private Role role;

	// Availabilty of the user
	private boolean isAvailable;

	// ID of the hackathon assigned to the user
	private Integer assignedHackathon;

	// List of participants associated with the user
	@OneToMany(cascade = CascadeType.ALL)
	private List<Participant> participants;

	// List of panelists associated with the user
	@OneToMany(cascade = CascadeType.ALL)
	private List<Panelist> panelists;

	// List of judges associated with the user
	@OneToMany(cascade = CascadeType.ALL)
	private List<Judge> judges;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public boolean isAvailable() {
		return isAvailable;
	}

	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}

	public List<Participant> getParticipants() {
		return participants;
	}

	public void setParticipants(Participant participant) {
		participants.add(participant);
	}

	public List<Panelist> getPanelists() {
		return panelists;
	}

	public void setPanelists(List<Panelist> panelists) {
		this.panelists = panelists;
	}

	public List<Judge> getJudges() {
		return judges;
	}

	public void setJudges(List<Judge> judges) {
		this.judges = judges;
	}

	public Integer getAssignedHackathon() {
		return assignedHackathon;
	}

	public void setAssignedHackathon(Integer assignedHackathon) {
		this.assignedHackathon = assignedHackathon;
	}

	public void setParticipants(List<Participant> participants) {
		this.participants = participants;
	}

}
