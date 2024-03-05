package com.example.capstone.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {
@Autowired
private JavaMailSender javaMailSender;

@Value("${spring.mail.username}")
private String sender;
public boolean sendEmail(String receiver,String body,String Subject)
{
	try {
	SimpleMailMessage mailMessage = new SimpleMailMessage();
	mailMessage.setFrom(sender);
	mailMessage.setTo(receiver);
	mailMessage.setText(body);
	mailMessage.setSubject(Subject);
	javaMailSender.send(mailMessage);
	return true;
}
catch (Exception e) {
	e.printStackTrace();
	return false;
}
}
}
