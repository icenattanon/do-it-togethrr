// Sample users data
const users = [
  {
    username: "john",
    password: "abc123"
  },
  {
    username: "jane", 
    password: "password1234"
  }
];

// Get login form
const form = document.getElementById("login-form");

// Submit event handler
form.addEventListener("submit", (event) => {
  
  // Prevent default submit
  event.preventDefault();
  
  // Get form fields
  const username = document.getElementById("username").value; 
  const password = document.getElementById("password").value;

  // Validate credentials
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Login successful!");
    // Do something like redirect
  } else {
    alert("Invalid credentials");
  }
  
});
