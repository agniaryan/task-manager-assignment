const user=JSON.parse(localStorage.getItem("loggedInUser"));

if(user.role==="MEMBER"){
    document.querySelector(".form-card").style.display="none";
}

async function createProject(){

    const project={
        name:document.getElementById("projectName").value,
        description:document.getElementById("projectDescription").value,
        createdBy:user
    };

    const response=await fetch("http://localhost:8080/api/projects",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(project)
    });

    if(response.ok){
        alert("Project Created");
        loadProjects();
    }
}

async function loadProjects(){

    const response=await fetch("http://localhost:8080/api/projects");

    const projects=await response.json();

    let data="";

    projects.forEach(project=>{

        data+=`
            <div class="dashboard-card">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            </div>
        `;
    });

    document.getElementById("projectList").innerHTML=data;
}

loadProjects();