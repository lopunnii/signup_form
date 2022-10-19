document.getElementById("pw2").onkeyup = matchPassword();
document.getElementById("submit_button").onclick = wrong_pw_alert()


function matchPassword() {
    let pw1 = document.getElementById("pw1");
    let pw2 = document.getElementById("pw2");
    if (pw1 != pw2){
        document.getElementById('wrong_pw_alert').style.color = 'red';
        document.getElementById('wrong_pw_alert').innerHTML
          = '*Passwords do not match';
        document.getElementById('submit_button').disabled = true;
        document.getElementById('submit_button').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pw_alert').style.color = 'green';
        document.getElementById('wrong_pw_alert').innerHTML =
            'Password matched';
        document.getElementById('submit_button').disabled = false;
        document.getElementById('submit_button').style.opacity = (1);
    }
}

function wrong_pw_alert() {
    if (document.getElementById('pw').value != "" &&
    document.getElementById('pw2').value != "") {
    alert("Your response is submitted");
    } else {
    alert("Please fill all the fields");
    }
}