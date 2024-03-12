package com.example.capstone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.capstone.Entity.Panelist;

@Repository
public interface PanelistRepository extends JpaRepository<Panelist,Integer>{

}
