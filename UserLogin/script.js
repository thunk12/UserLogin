let username = "admin";
let password = "1234";

// Button
document.getElementById("loginbtn").addEventListener("click", login);

// Login
function login() {
  let userinput = document.getElementById("userinput").value;
  let passinput = document.getElementById("passinput").value;

  if (userinput === username && passinput === password) {
    document.getElementById("output").innerHTML = "Login Successful";
  } else if (userinput != username) {
    document.getElementById("output").innerHTML = "Invalid Username";
  } else {
    document.getElementById("output").innerHTML = "Invalid Password";
  } 
}
