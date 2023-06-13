const username = document.getElementById("username");
const password = document.getElementById("password");
const output = document.getElementById("output");

function login() {

    if (username.value === "Enes" && password.value === "1bis5") {
        location.assign("./assets/pages/home.html");
        username.value = ""
    } else {
      output.innerHTML = "Falscher Benutzername oder Kennwort!";
    }

  }

 
function changeColor(color) {
    document.body.style.backgroundColor = color;
  }