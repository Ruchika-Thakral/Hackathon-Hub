package com.example.capstone.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Review {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer reviewId;
private Float rating;
@ManyToOne
private Team team;
public Integer getReviewId() {
	return reviewId;
}
public void setReviewId(Integer reviewId) {
	this.reviewId = reviewId;
}
public Float getRating() {
	return rating;
}
public void setRating(Float rating) {
	this.rating = rating;
}


}
