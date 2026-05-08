async function login(){

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const role=document.getElementById("role").value;

    const response=await fetch("http://localhost:8080/api/users");

    const users=await response.json();

    const user=users.find(u=>
        u.email===email &&
        u.password===password &&
        u.role===role
    );

    if(user){

        localStorage.setItem("loggedInUser",JSON.stringify(user));

        window.location.href="dashboard.html";

    }else{
        alert("Invalid Credentials");
    }
}