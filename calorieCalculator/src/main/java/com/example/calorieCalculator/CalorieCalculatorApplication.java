package com.example.calorieCalculator;

import com.example.calorieCalculator.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

@SpringBootApplication
public class CalorieCalculatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(CalorieCalculatorApplication.class, args);
	}

}
