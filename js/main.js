
// contact form validation
const user_name = document.getElementById("user_name");
const last_name = document.getElementById("last_name");;
const user_email = document.getElementById("user_email");
const button_form = document.getElementById("button_form");


button_form.addEventListener("click", validateForm);

function validateForm(){

    const userName = user_name.value;
    const LastName = last_name.value;
    const userEmail = user_email.value;

    const emailErr = document.getElementById("emailErr");

    if ( userName == ""){
        alert("you must enter your name");
    }

    if ( LastName == ""){
        alert("you must enter your last name");
    }

    if ( userEmail == ""){
        alert("you must enter your email");
    }

    if (userEmail.indexOf('@') == -1){
        emailErr.innerText = "the email is wrong";

    }else if (userEmail.indexOf('.') == -1){
            emailErr.innerText = "the email is wrong";
            
    }else{
            emailErr.innerText = "";
     }

    }










  
    
    
