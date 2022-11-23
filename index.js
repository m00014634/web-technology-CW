// Creating variables for coming errors//
var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

// validating name//
function validateName() {
    //connecting with id//
    var name = document.getElementById('contact-name').value;
    //Some conditions that returns false in case invalid values//
    if(name.length == 0){
        nameError.innerText ='Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML ='Write full name';
        return false;
    }
    //Valid condition//
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

// validating Phone//
function validatePhone() {
     //connecting with id//
    var phone = document.getElementById('contact-phone').value;
     //Condition that returns false in case invalid values//
    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
      //Valid condition//
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

// validating Email//
function validateEmail() {
     //connecting with id//
    var email = document.getElementById('contact-email').value;
    //Condition that returns false in case invalid values//
    if(email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    //Valid condition//
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}
// validating Form//
function validateForm() {
     //Condition that returns false in case invalid values//
    if(!validateName() || !validatePhone()|| !validateEmail()){
       submitError.style.display = 'block';
       submitError.innerHTML = 'Please fix error';
       setTimeout(function(){submitError.style.display='none';},3000);
       return false;
    }
}