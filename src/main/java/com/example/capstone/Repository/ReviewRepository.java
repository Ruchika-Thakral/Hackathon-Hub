package com.example.capstone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.capstone.Entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

}
