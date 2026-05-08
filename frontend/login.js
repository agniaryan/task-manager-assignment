async function login(){

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const role=document.getElementById("role").value;

    const response=await fetch("https://gleaming-passion-production-42ec.up.railway.app/api/users");

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