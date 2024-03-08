package com.example.capstone.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.Entity.Hackathon;
import com.example.capstone.Entity.Panelist;
import com.example.capstone.Entity.User;
import com.example.capstone.Repository.PanelistRepository;

@Service
public class PanelistService {
@Autowired
private PanelistRepository panelistRepository;
public Panelist createPanelist(User user,Hackathon hackathon)
{
	Panelist panelist=new Panelist();
	panelist.setHackathon(hackathon);
	panelist.setUser(user);
	panelistRepository.save(panelist);
	return  panelist;
}
public synchronized void updatePanelist(Panelist panelist)
{
	panelistRepository.save(panelist);
}

}
