
window.onload= function(){
  
    var password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");
    var passw= /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

 function validatTheInput(){


    if(!password.value.match(passw) || !confirm_password.value.match(passw)){
        alert("password ..........");
    }

 }   

document.getElementById("myform").onsubmit = function(){
   
        validatTheInput();
        validatePassword();

}

function validatePassword(){

    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
       
    }
  }

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword
  
 
}