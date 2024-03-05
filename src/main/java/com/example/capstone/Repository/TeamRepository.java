package com.example.capstone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.capstone.Entity.Team;

public interface TeamRepository extends JpaRepository<Team,Integer> {

}
