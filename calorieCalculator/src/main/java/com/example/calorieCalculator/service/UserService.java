package com.example.calorieCalculator.service;

import com.example.calorieCalculator.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public User saveUser(User user);

    public List<User> getAllUsers();

    public User getUserById(Long id);

    public User getUserByEmail(String email);

    public User updateUser(User newUser, Long id);

    public String deleteUser(Long id);
}

