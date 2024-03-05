package com.example.capstone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.capstone.Entity.Hackathon;

public interface HackathonRepository extends JpaRepository<Hackathon,Integer> {

}
