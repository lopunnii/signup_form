function matchPassword() {
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;
    if (pw1 != pw2){
        document.getElementById("pw_alert").textContent = "*Passwords do not match";
        document.getElementById("pw_alert").style.color = "red";
        document.getElementById("pw2").style.border = "red solid 1px";
        document.getElementById("submit_button").disabled = true;
        document.getElementById("submit_button").style.opacity = (0.4);
    } else {
        document.getElementById("pw_alert").textContent = "Password matched";
        document.getElementById("pw_alert").style.color = "green";
        document.getElementById("pw2").style.border = "cornflowerblue solid 1px";
        document.getElementById("submit_button").disabled = false;
        document.getElementById("submit_button").style.opacity = (1);
    }
}
