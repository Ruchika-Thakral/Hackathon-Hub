package com.example.capstone.DTO;

import com.example.capstone.Entity.Role;

public class AddEvaluatorDTO {
private String email;
private String name;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
private Role role;
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


}
