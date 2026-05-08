package com.aryan.taskmanager.service;

import com.aryan.taskmanager.entity.User;
import com.aryan.taskmanager.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User updateUser(Long id, User updatedUser){

        User user = userRepository.findById(id).orElse(null);

        if(user == null){
            return null;
        }

        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        user.setRole(updatedUser.getRole());

        return userRepository.save(user);
    }
    
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
}