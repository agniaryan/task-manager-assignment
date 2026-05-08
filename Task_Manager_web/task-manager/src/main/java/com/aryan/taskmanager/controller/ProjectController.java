package com.aryan.taskmanager.controller;

import com.aryan.taskmanager.entity.Project;
import com.aryan.taskmanager.service.ProjectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin("*")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping
    public Object createProject(@RequestBody Project project){

        Project savedProject = projectService.createProject(project);

        if(savedProject == null){
            return "Only ADMIN can create project";
        }

        return savedProject;
    }

    @GetMapping
    public List<Project> getAllProjects(){
        return projectService.getAllProjects();
    }
    @PutMapping("/{id}")
    public Project updateProject(
            @PathVariable Long id,
            @RequestBody Project project
    ){
        return projectService.updateProject(id, project);
    }
    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable Long id){

        projectService.deleteProject(id);

        return "Project deleted successfully";
    }
}