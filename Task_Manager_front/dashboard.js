async function loadDashboard(){

    const response=await fetch("http://localhost:8080/api/tasks");

    const tasks=await response.json();

    document.getElementById("totalTasks").innerText=tasks.length;

    const completed=tasks.filter(t=>t.status==="DONE").length;

    const pending=tasks.filter(t=>t.status!=="DONE").length;

    const overdue=tasks.filter(t=>{

        return new Date(t.dueDate)<new Date() &&
               t.status!=="DONE";

    }).length;

    document.getElementById("completedTasks").innerText=completed;

    document.getElementById("pendingTasks").innerText=pending;

    document.getElementById("overdueTasks").innerText=overdue;

    let data="";

    tasks.forEach(task=>{

        data+=`
            <tr>
                <td>${task.title}</td>
                <td>${task.status}</td>
                <td>${task.dueDate}</td>
            </tr>
        `;
    });

    document.getElementById("taskTableBody").innerHTML=data;
}

function logout(){

    localStorage.removeItem("loggedInUser");

    window.location.href="index.html";
}

loadDashboard();