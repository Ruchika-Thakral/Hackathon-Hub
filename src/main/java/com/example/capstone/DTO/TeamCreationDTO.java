package com.example.capstone.DTO;

import java.util.ArrayList;
import java.util.List;

public class TeamCreationDTO {
	private String name;
	private List<String> emails = new ArrayList<>();

	public List<String> getEmails() {
		return emails;
	}

	public void setEmails(List<String> emails) {
		this.emails = emails;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
