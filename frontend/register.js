async function registerUser(){

    const user={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        role:document.getElementById("role").value
    };

    const response=await fetch("http://localhost:8080/api/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    });

    if(response.ok){
        alert("Registration Successful");
        window.location.href="index.html";
    }else{
        alert("Registration Failed");
    }
}