document.getElementById("dynamicButton").addEventListener("click", function() {
    this.textContent = "You Clicked Me!";
    this.style.backgroundColor = "lightgreen";
});

document.getElementById("dynamicButton").addEventListener("dblclick", function() {
    alert("Secret Double Click Action!");
});

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    alert("Form submitted successfully!");
});
