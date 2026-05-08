package com.aryan.taskmanager.service;

import com.aryan.taskmanager.entity.Task;
import com.aryan.taskmanager.repository.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task) {

        if(task.getAssignedTo()!=null && task.getAssignedTo().getRole()!=null && task.getAssignedTo().getRole().toString().equals("MEMBER")){
            task.setStatus(task.getStatus());
        }

        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task updateTask(Long id, Task updatedTask) {

        Task task = taskRepository.findById(id).orElse(null);

        if(task == null){
            return null;
        }

        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setStatus(updatedTask.getStatus());
        task.setDueDate(updatedTask.getDueDate());

        return taskRepository.save(task);
    }
    public void deleteTask(Long id){
        taskRepository.deleteById(id);
    }
}