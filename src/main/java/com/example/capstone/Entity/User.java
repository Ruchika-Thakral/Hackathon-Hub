package com.example.capstone.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;

@Entity
public class User {

@Id
@Email
private String email;
private String userName;
private String password;
@Enumerated(EnumType.STRING)
private UserType role;
private String otp;
private boolean emailVerfied;
public User() {
	super();
}
public User(@Email String email, String userName, String password, UserType role) {
	super();
	this.email = email;
	this.userName = userName;
	this.password = password;
	this.role = role;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public UserType getRole() {
	return role;
}
public void setRole(UserType role) {
	this.role = role;
}
public String getOtp() {
	return otp;
}
public void setOtp(String otp) {
	this.otp = otp;
}
public boolean isEmailVerfied() {
	return emailVerfied;
}
public void setEmailVerfied(boolean emailVerfied) {
	this.emailVerfied = emailVerfied;
}


}
