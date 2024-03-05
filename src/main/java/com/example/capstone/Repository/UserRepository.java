package com.example.capstone.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.Entity.Role;
import com.example.capstone.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
public Optional<User> findByEmail(String email);

@Query("SELECT u FROM User  u WHERE u.role = ?1 AND u.isAvailable = ?2")
List<User> findUsersByRoleAndIsAvailable(Role role, boolean isAvailable);
}
