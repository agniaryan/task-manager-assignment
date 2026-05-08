const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);

async function loadUsers(){

    const response = await fetch(
        "https://gleaming-passion-production-42ec.up.railway.app/api/users"
    );

    const users = await response.json();

    let options = "";

    users.forEach(user => {

        if(user.role === "MEMBER"){

            options += `
                <option value="${user.id}">
                    ${user.name}
                </option>
            `;
        }
    });

    document.getElementById(
        "assignedUser"
    ).innerHTML = options;
}

async function createTask(){

    const assignedUserId = document.getElementById(
        "assignedUser"
    ).value;

    const task = {

        title: document.getElementById(
            "title"
        ).value,

        description: document.getElementById(
            "description"
        ).value,

        dueDate: document.getElementById(
            "dueDate"
        ).value,

        submissionDate: document.getElementById(
            "submissionDate"
        ).value,

        status: document.getElementById(
            "status"
        ).value,

        assignedTo:{

            id: assignedUserId
        }
    };

    const response = await fetch(
        "https://gleaming-passion-production-42ec.up.railway.app/api/tasks",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify(task)
        }
    );

    if(response.ok){

        alert("Task Created Successfully");

        document.getElementById("title").value = "";

        document.getElementById("description").value = "";

        document.getElementById("dueDate").value = "";

        document.getElementById("submissionDate").value = "";

        document.getElementById("status").value = "TODO";

        loadTasks();

    }else{

        alert("Failed To Create Task");
    }
}

async function loadTasks(){

    const response = await fetch(
        "https://gleaming-passion-production-42ec.up.railway.app/api/tasks"
    );

    const tasks = await response.json();

    let data = "";

    tasks.forEach(task => {

        const today = new Date();

        const due = new Date(task.dueDate);

        let overdue = "NO";

        if(
            due < today &&
            task.status !== "DONE"
        ){

            overdue =
            "<span style='color:red;font-weight:bold'>YES</span>";
        }

        data += `

            <tr>

                <td>
                    ${task.title}
                </td>

                <td>

                    ${
                        task.assignedTo
                        ?
                        task.assignedTo.name
                        :
                        "Not Assigned"
                    }

                </td>

                <td>
                    ${task.status}
                </td>

                <td>
                    ${task.dueDate}
                </td>

                <td>

                    ${
                        task.submissionDate
                        ?
                        task.submissionDate
                        :
                        "-"
                    }

                </td>

                <td>
                    ${overdue}
                </td>

                <td>

                    <button
                        onclick="deleteTask(${task.id})"
                    >
                        Delete
                    </button>

                </td>

            </tr>
        `;
    });

    document.getElementById(
        "taskList"
    ).innerHTML = data;
}

async function deleteTask(id){

    await fetch(
        `https://gleaming-passion-production-42ec.up.railway.app/api/tasks/${id}`,
        {
            method:"DELETE"
        }
    );

    loadTasks();
}

loadUsers();
loadTasks();