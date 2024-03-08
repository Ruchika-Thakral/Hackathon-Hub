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

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
public Optional<User> findByEmail(String email);

@Query("SELECT u.userId,u.name,u.email,u.role FROM User  u WHERE u.userId=?1")
Tuple findUserById(int userId);

@Query("SELECT new com.example.capstone.DTO.GetEvaluatorsDTO(u.userId, u.name, u.email, u.role) FROM User u WHERE u.role IN :roles AND u.isAvailable = true")
public List<GetEvaluatorsDTO> findUsersByRolesAndIsAvailable(List<Role> roles);
}
