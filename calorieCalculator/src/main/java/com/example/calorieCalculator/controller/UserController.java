package com.example.calorieCalculator.controller;

import com.example.calorieCalculator.model.User;
import com.example.calorieCalculator.service.UserService;
import com.example.calorieCalculator.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calorie_counter")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New user added to the database";
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }


}
