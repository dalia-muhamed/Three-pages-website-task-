

function showError(errorElement,errorMessage){
    document.querySelector("."+ errorElement).classList.add("display-error");
    document.querySelector("."+ errorElement).innerHTML=errorMessage;
}

function clearError(){
    let errors= document.querySelectorAll('.error');
    for(let error of errors){
        error.classList.remove('display-error')
    }
}

function SignUpvalidateForm() {
    const username = document.getElementById('userName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const isValidUserName = /^[a-zA-Z_][a-zA-Z0-9_][a-zA-Z_]{3,13}$/.test(username)
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isValidPassword = password === confirmPassword
        clearError()
    if(!isValidUserName){ 
        showError("username-error","Please enter a valid Username");
    }

    if(!isValidEmail){
         showError("email-error","Please enter a valid Email");
    }
    if(password.length < 8){ 
        showError("password-error","Password must be at least 8 characters");   
    }   
    if(!isValidPassword){ 
        showError("confirmpassword-error","Passwords Doesn't match");   
    }
    const isValidForm =  isValidUserName &&   isValidEmail && password.length >= 8 && isValidPassword
    if(isValidForm){
        return signUp() 
    }
  }
  const signUp = ()=>{
    $('#form').submit(function(e){
        e.preventDefault()
       const mydata= $(this).serialize();
     console.log($(mydata));
       $.post('https://www.discoveryvip.com/posttest.php',mydata).done(function(data){
        console.log(data);
       }) 
      })
  }

 const signUpSubmitButton = document.getElementById('btn');
 signUpSubmitButton.addEventListener('click',SignUpvalidateForm)
