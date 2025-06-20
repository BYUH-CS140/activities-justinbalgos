document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var phone = document.getElementById('phone').value.trim();
  
    var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username);
    var emailValid = /^[^@]+@\\w+(\\.\\w+)+\\w$/.test(email);
    var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$/.test(password);
    var phoneValid = /^\\+?\\d{1,3}?[-.\\s]?\\(?:\\d{2,4}\\)?[-.\\s]?\\d{3,4}[-.\\s]?\\d{4}$/.test(phone);
  
    document.getElementById('usernameFeedback').style.display = usernameValid ? 'none' : 'block';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
    document.getElementById('passwordFeedback').style.display = passwordValid ? 'none' : 'block';
    document.getElementById('phoneFeedback').style.display = phoneValid ? 'none' : 'block';
  
    document.getElementById('usernameFeedback').textContent = usernameValid ? '' : 'Username must be at least 5 alphanumeric characters.';
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Enter a valid email.';
    document.getElementById('passwordFeedback').textContent = passwordValid ? '' : 'Password must be 8+ characters, include upper/lowercase and a number.';
    document.getElementById('phoneFeedback').textContent = phoneValid ? '' : 'Enter a valid phone number. e.g. +63-912-345-6789';
  
    var formValid = usernameValid && emailValid && passwordValid && phoneValid;
  
    if (formValid) {
      document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
      document.getElementById('registrationFeedback').style.display = 'block';
    } else {
      document.getElementById('registrationFeedback').textContent = '';
      document.getElementById('registrationFeedback').style.display = 'none';
    }
  });
  