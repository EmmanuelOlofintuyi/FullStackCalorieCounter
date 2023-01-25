package com.example.calorieCalculator.exception;

import com.example.calorieCalculator.model.User;
public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not find the user with id" + id);
    }

}
