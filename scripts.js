// Add an event listener to the login form for the 'submit' event
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Get input values and trim any extra whitespace
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Reset error messages by hiding them
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
  
    // Validate email format using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      // Display an error message if the email is invalid
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      document.getElementById('emailError').style.display = 'block';
      return; // Stop further execution
    }
  
    // Validate password length (minimum 6 characters)
    if (password.length < 6) {
      // Display an error message if the password is too short
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      document.getElementById('passwordError').style.display = 'block';
      return; // Stop further execution
    }
  
    // If all validations pass, show a success message
    alert('Login successful!');
    // You can add further actions here, such as:
    // - Redirecting the user to another page
    // - Sending the form data to a server
  });