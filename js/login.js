
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

  
    if (username === "admin" && password === "1234") {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "dashbord.htm"; 
    } else {
      alert("Yanlış istifadəçi adı və ya şifrə.");
    }
  }