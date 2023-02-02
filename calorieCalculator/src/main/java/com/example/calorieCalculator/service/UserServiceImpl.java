package com.example.calorieCalculator.service;

import com.example.calorieCalculator.exception.UserNotFoundException;
import com.example.calorieCalculator.model.User;
import com.example.calorieCalculator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @Override
    public User getUserByEmail(String email) {
        if(email == null || email.length() == 0) return null;

        Optional<User> dbUser = this.userRepository.findUserByEmail(email);
        if (!dbUser.isPresent()) throw new IllegalStateException("email does not exist");
        return dbUser.get();
    }

    @Override
    public User updateUser(User newUser, Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setDob(newUser.getDob());
                    user.setWeight(newUser.getWeight());
                    user.setLifestyle(newUser.getLifestyle());
                    user.setGoal(newUser.getGoal());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @Override
    public String deleteUser(Long id) {
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id"+id+"has been deleted, success";
    }
}

