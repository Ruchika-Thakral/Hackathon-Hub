package com.example.capstone.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.DTO.GetEvaluatorsDTO;
import com.example.capstone.Entity.Role;
import com.example.capstone.Entity.User;

import jakarta.persistence.Tuple;

// Repository interface for interacting with the User entity in the database 
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	// Method to find a user by email address
	public Optional<User> findByEmail(String email);
	
	

	// Custom query to find user details by user ID
	@Query("SELECT u.userId,u.name,u.email,u.role FROM User  u WHERE u.userId=?1")
	Tuple findUserById(int userId);

	// Custom query to find evaluators by their roles and availability
	@Query("SELECT new com.example.capstone.DTO.GetEvaluatorsDTO(u.userId, u.name, u.email, u.role,u.isAvailable,u.assignedHackathon) FROM User u WHERE u.role IN :roles")
	public List<GetEvaluatorsDTO> findUsersByRolesAndIsAvailable(List<Role> roles);

}
