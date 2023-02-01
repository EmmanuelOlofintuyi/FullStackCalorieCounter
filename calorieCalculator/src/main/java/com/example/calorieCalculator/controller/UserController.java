package com.example.calorieCalculator.controller;

import com.example.calorieCalculator.model.User;
import com.example.calorieCalculator.service.UserService;
import com.example.calorieCalculator.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")

@RequestMapping("/calorie_counter")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New user added to the database";
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @GetMapping("/user/{email}")
    public User getUserByEmail(@PathVariable String email){return userService.getUserByEmail(email);}

    @PutMapping("/user/{id}")
    public User updatUser(@RequestBody User newUser, @PathVariable Long id){
        return userService.updateUser(newUser, id);
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id){
        return userService.deleteUser(id);
    }


}
