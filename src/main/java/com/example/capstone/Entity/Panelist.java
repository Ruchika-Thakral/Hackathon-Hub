package com.example.capstone.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Panelist {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer panelistId;
@ManyToOne
private Hackathon hackathon;
@ManyToOne
private User user;

@OneToOne
private Team team;
}
