const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
emailInput.addEventListener('input', function () {
    const value = emailInput.value;
    const atIndex = value.indexOf("@");
    const dotIndex = value.lastIndexOf(".");
    if (atIndex > 0) {
        if (dotIndex > atIndex + 1) {
            if (dotIndex < value.length - 1) {
                emailInput.style.borderColor = "green";
            } else {
                emailInput.style.borderColor = "red";
            }
        } else {
            emailInput.style.borderColor = "red";
        }
    }
    else {
        emailInput.style.borderColor = "red";
    }
});
passwordInput.addEventListener("input", function () {
    const value = passwordInput.value;
    if (value.length >= 6) {
        passwordInput.style.borderColor = "green";
    }
    else {
        passwordInput.style.borderColor = "red";
    };
})