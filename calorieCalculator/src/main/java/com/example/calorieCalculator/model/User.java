package com.example.calorieCalculator.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private LocalDate dob;
    @Transient
    private Integer age;
    @Transient
    private Integer suggestedCalories;
    private Integer lifestyle;
    private Goal goal;
    private Double weight;

    public User() {
    }

    public User(String name, String email, LocalDate dob, Integer lifestyle, Double weight) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.lifestyle = lifestyle;
        this.weight = weight;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getSuggestedCalories() {
        return calculateCalories();
    }

    public void setSuggestedCalories(Integer suggestedCalories) {
        this.suggestedCalories = suggestedCalories;
    }

    public Integer getLifestyle() {
        return lifestyle;
    }

    public void setLifestyle(Integer lifestyle) {
        this.lifestyle = lifestyle;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Goal getGoal() {
        return goal;
    }

    public void setGoal(Goal goal) {
        this.goal = goal;
    }

    public Integer calculateCalories(){
        Double calories = 0.0;

        Goal goal = getGoal();
        Integer lifeStyleValue = getLifestyle();
        if(goal.equals(Goal.LOSE)) {
            calories = (weight*10);
            if (lifeStyleValue <= 1) {
                calories -= 500;
            } else if (lifeStyleValue == 2) {
                calories  -= 250;
            } else if (lifeStyleValue == 4) {
                calories += 250;
            } else if (lifeStyleValue >= 5) {
                calories += 500;
            } else {
                calories +=0;
            }
        } else if (goal.equals(Goal.GAIN) ){
            calories = ((weight*15)+500);
            if (lifeStyleValue <= 1) {
                calories -= 500;
            } else if (lifeStyleValue == 2) {
                calories -= 250;
            } else if (lifeStyleValue == 4) {
                calories += 250;
            } else if (lifeStyleValue >= 5) {
                calories += 500;
            } else {
                calories+=0;
            }
        }
        else {
            calories = (weight*15);
            if (lifeStyleValue <= 1) {
                calories -= 500;
            } else if (lifeStyleValue == 2) {
                calories -= 250;
            } else if (lifeStyleValue == 4) {
                calories += 250;
            } else if (lifeStyleValue >= 5) {
                calories += 500;
            } else {
                calories +=0;
            }

        }
        Integer cv = calories.intValue();
        return cv;
    }
}

