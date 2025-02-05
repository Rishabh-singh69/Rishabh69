function validateForm() {

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    
    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("All fields must be filled out.");
        return false;
    }

    
    var phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Phone number must be 10 digits long.");
        return false;
    }

    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&,$,#@])[A-Za-z\d&,$,#@]{7,}$/;
    if (!password.match(passwordPattern)) {
        alert("Password must be at least 7 characters long, contain at least one uppercase letter, one digit, and one special character (&, $, #, @).");
        return false;
    }

    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    alert("Registration Successful!");
    return true;
}
