package com.example.capstone.DTO;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.capstone.Entity.Role;

public class UserDetailsDTO {
	private Integer userId;
	private String name;
	private String email;
	private Role role;
	private boolean isAvailable;
	private Integer assignedHackathon;
	public boolean isAvailable() {
		return isAvailable;
	}

	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}

	public int getAssignedHackathon() {
		return assignedHackathon;
	}

	public void setAssignedHackathon(int assignedHackathon) {
		this.assignedHackathon = assignedHackathon;
	}

	public UserDetailsDTO() {

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

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
    
}
