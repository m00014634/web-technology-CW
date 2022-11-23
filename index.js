var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName() {
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerText ='Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML ='Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }

    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}

function validateForm() {
    if(!validateName() || !validatePhone()|| !validateEmail()){
       submitError.style.display = 'block';
       submitError.innerHTML = 'Please fix error';
       setTimeout(function(){submitError.style.display='none';},3000);
       return false;
    }
}