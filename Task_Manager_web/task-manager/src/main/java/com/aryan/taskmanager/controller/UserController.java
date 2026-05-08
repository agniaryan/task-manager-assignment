package com.aryan.taskmanager.controller;

import com.aryan.taskmanager.entity.User;
import com.aryan.taskmanager.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
    @PutMapping("/{id}")
    public User updateUser(
            @PathVariable Long id,
            @RequestBody User user
    ){
        return userService.updateUser(id, user);
    }
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id){

        userService.deleteUser(id);

        return "User deleted successfully";
    }
}