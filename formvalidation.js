
const emailerror = document.getElementById('email-error');
const usernameerror = document.getElementById('username-error');
const passworderror = document.getElementById('password-error');
const confirmPassworderrors = document.getElementById('password2-error');
const successMessage = document.getElementById('successMessage'); 
const signupForm = document.getElementById('signupForm'); 
let password22 = ""

// Form submission validation
signupForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
    if (validateForm()) {
        signupForm.submit()
    }
});
 let formGroup = document.querySelector(".form-group") 




// Validate all fields function
function validateForm() {
    if (!validateUsername() || !validateEmailname() || !validatePassword() || !validateConfirmPassword()) {
        successMessage.innerHTML = "Values are not correct";
        return false; 
    }
    successMessage.innerHTML = "Form is valid and ready for submission!";
    return true;  
}

// Functions to validate each field (same as before)
function validateUsername() {
    const username = document.getElementById("setUsername")
    const formGroup = username.closest(".form-group"); 
    let re = /^[a-zA-Z0-9]+$/;
    if (username.value.length < 5) {
        usernameerror.innerHTML = "username is required and at least 5 characters long"    
        formGroup.style.marginBottom = "13px"
        return false;
    } if (!re.test(username.value)) {
        usernameerror.innerHTML = "Username must be alphanumeric ";
        
        formGroup.style.marginBottom = "13px"
        return false;
    }
    usernameerror.innerHTML = ""
    formGroup.style.marginBottom = "20px"
    return true
}

function validateEmailname() {
    const email = document.getElementById("setemail");
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/  
      const formGroup = email.closest(".form-group"); 

    if ( email.value.length === 0) {
        emailerror.innerHTML= " Email is Required"
        formGroup.style.marginBottom = "13px"
        return false
    } 
    if ( !re.test(email.value) ) {
        emailerror.innerHTML= " Enter Proper Email"
        formGroup.style.marginBottom = "13px"
        return false
    } 
    emailerror.innerHTML= ""
    formGroup.style.marginBottom = "20px"
    return true
}

function validatePassword() {
    const password = document.getElementById("setUserpassword");
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
      const formGroup = password.closest(".form-group"); 

    if (password.value.length<6) {
        passworderror.innerHTML= 'Password must be at least 6 characters long, include 1 uppercase letter, 1 number, and 1 special character.';
        formGroup.style.marginBottom = "13px"
        return false
    } 
    if (!re.test(password.value)) {
        passworderror.textContent = 'Password must include 1 uppercase letter, 1 number, and 1 special character.';
        formGroup.style.marginBottom = "13px"
        return false
    } 
    console.log(password)
    passworderror.textContent = '';
    formGroup.style.marginBottom = "20px"
    password22=password.value 
    return true
    
}

function validateConfirmPassword() {
    const confirmPassword = document.getElementById("confirmUserpassword");
      const formGroup = confirmPassword.closest(".form-group"); 
    if (confirmPassword.value !== password22) {
        confirmPassworderrors.innerText = 'Passwords do not match.';
        formGroup.style.marginBottom = "13px"
        return false; 
    } 
    confirmPassworderrors.innerText = '';
    formGroup.style.marginBottom = "20px"
        return true;   
}



