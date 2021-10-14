
window.onload= function(){
  
    var password = document.getElementById("password")
    , repassword = document.getElementById("repassword");
    var passw= /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;




 //this is for page redirect








 function validatTheInput(){


    if(!password.value.match(passw) || !repassword.value.match(passw)){
        alert("password ..........");
    }

 }   

document.getElementById("myform").onsubmit = function(){
   
        validatTheInput();
        validatePassword();
        getData();

}

function validatePassword(){

    if(password.value != repassword.value) {
        repassword.setCustomValidity("Passwords Don't Match");
    } else {
        repassword.setCustomValidity('');
       
    }
  }

password.onchange = validatePassword;
repassword.onkeyup = validatePassword
  
 
}