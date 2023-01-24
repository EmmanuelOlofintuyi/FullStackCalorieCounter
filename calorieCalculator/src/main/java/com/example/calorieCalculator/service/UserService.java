package com.example.calorieCalculator.service;

import com.example.calorieCalculator.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);

    public List<User> getAllUsers();
}
