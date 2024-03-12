package com.example.capstone.DTO;

import com.example.capstone.Entity.Role;

public class GetEvaluatorsDTO {

	private int userId;
	private String email;
	private String name;
	private Enum<Role> role;

	public GetEvaluatorsDTO() {

	}

	public GetEvaluatorsDTO(int userId, String email, String name, Enum<Role> role2) {
		super();
		this.userId = userId;
		this.email = email;
		this.name = name;
		this.role = role2;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Enum<Role> getRole() {
		return role;
	}

	public void setRole(Enum<Role> role) {
		this.role = role;
	}

}
