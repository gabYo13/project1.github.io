let a = document.getElementById("login");
let b = document.getElementById("register");
let c = document.getElementById("btn");

function register() {
    a.style.left = "-450px";
    b.style.left = "50px";
    c.style.left = "110px";

}
function login() {
    a.style.left = "50px";
    b.style.left = "450px";
    c.style.left = "0px";
}
function login2(){
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");

    if(userName.value == "" && password.value == ""){
        document.getElementById("login").submit();
        alert("Please enter your username and password")
    } else if(userName.value != "" && password.value != ""){
        alert(`${userName.value}! successfully logged in.`)
    }
}
function registration(e) {
    let fName = document.getElementById("fName");
    let lName = document.getElementById("lName");
    let email = document.getElementById("email");

    if(fName.value !="" && lName.value !="" && email !=""){
        alert("Signup completed! Please Login.");
    }
    else{
        alert("Please do not leave any field blank");
    }
}
