
var loginForm = document.getElementById("login-form");

// Add a submit event listener to the form
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the login credentials
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the credentials are valid
    if (username === "admin" && password === "password") {
        // Change the page to the desired site
        window.location.href = "https://ku-caawinaya.amohamed00.repl.co/educational.html#";
    } else {
        // Show an error message
        alert("Invalid username or password");
    }
});


