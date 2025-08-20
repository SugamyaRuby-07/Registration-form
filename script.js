document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting the normal way

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const message = document.getElementById("message");

  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters.";
    return;
  }

  if (!validateEmail(email)) {
    message.textContent = "Please enter a valid email.";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  // Simulate form submission (you can replace this with real API call)
  message.style.color = "green";
  message.textContent = "Registration successful!";
  this.reset(); // Reset form fields
});

function validateEmail(email) {
  // Simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
