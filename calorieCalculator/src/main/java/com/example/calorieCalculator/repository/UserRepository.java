package com.example.calorieCalculator.repository;

import com.example.calorieCalculator.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
