package com.aryan.taskmanager.service;

import com.aryan.taskmanager.entity.Project;
import com.aryan.taskmanager.repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project createProject(Project project) {

        if(project.getCreatedBy().getRole().toString().equals("MEMBER")){
            return null;
        }

        return projectRepository.save(project);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
    public Project updateProject(Long id, Project updatedProject) {

        Project project = projectRepository.findById(id).orElse(null);

        if(project == null){
            return null;
        }

        project.setName(updatedProject.getName());
        project.setDescription(updatedProject.getDescription());

        return projectRepository.save(project);
    }
    public void deleteProject(Long id){
        projectRepository.deleteById(id);
    }
}