package com.example.capstone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.capstone.Entity.Judge;

@Repository
public interface JudgeRepository extends JpaRepository<Judge,Integer> {

}
