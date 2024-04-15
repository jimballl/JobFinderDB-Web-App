const cors = require('cors');

function submitSignIn() {
    var username = document.getElementById("username_input").value;
    var password = document.getElementById("password_input").value;

    if (username == undefined || password == undefined ||
            username.length == 0 || password.length == 0) {
        alert("Missing username or password fields");
        console.log("Missing username or password fields");
        return
    }
    console.log("Username: " + username);

    fetch('http://localhost:5000/checkUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})
    })
    .then(response => {
        if(!response.ok){
            throw new Error(`bad response, status: ${response.status}`);
        }
    })
    .then(data => {
        if(data) {
            console.log(JSON.parse(data));
        } else {
            console.log("No JSON data returned")
        }
    })
    .catch((error) => {
        console.log("SignIn Error:", error)
    })

    //Clearing original fields
    document.getElementById("username_input").value = "";
    document.getElementById("password_input").value = "";

}

function submitSignUp() {
    var username = document.getElementById("username_input_signup");
    var name = document.getElementById("name_input_signup");
    var password = document.getElementById("password_input_signup");
    var sex = document.getElementById("sex_input");
    var years_of_experience = document.getElementById("YOE_input");

    variables = [username, name, password, sex, years_of_experience];
    variables.forEach(v => {
        if (v.value == undefined || v.value.length == 0) {
            alert("Missing a field");
            return;
        }
    })
    variables.forEach(v => (
        v.value = ""
    ))
}