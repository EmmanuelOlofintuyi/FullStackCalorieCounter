package com.example.calorieCalculator.model;

public enum Goal {
    LOSE("LOSE"), MAINTAIN("MAINTAIN"), GAIN("GAIN");

    private String action;

    // getter method
    public String getAction()
    {
        return this.action;
    }

    // enum constructor - cannot be public or protected
    private Goal(String action)
    {
        this.action = action;
    }
}


