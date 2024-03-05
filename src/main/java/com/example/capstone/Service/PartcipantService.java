package com.example.capstone.Service;

import com.example.capstone.DTO.EmailVerificationDTO;
import com.example.capstone.DTO.ParticipantDTO;
import com.example.capstone.DTO.UserVerficationDTO;
import com.example.capstone.Exceptions.InvalidUserException;

public interface PartcipantService {
String validateParticipant(ParticipantDTO userDTO);
String generateOTP();
String generateHashForPassword(String password);
boolean sendOTP(String email,String otp);
String verifyEmail(EmailVerificationDTO emaiVerificationDTO);
String verifyUser(UserVerficationDTO verificationDTO) throws InvalidUserException;
}