package com.example.capstone.DTO;

//Data Transfer Object (DTO) for handling email verification data
public class EmailVerificationDTO {

	private String email;
	private String otp;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getOtp() {
		return otp;
	}

	public void setPassword(String otp) {
		this.otp = otp;
	}

}
