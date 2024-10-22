// Login Script
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // For demonstration purposes, we'll use a simple hardcoded validation
  if (username === 'yaxwant' && password ==='yaxwan123') {
    window.location.href = 'index.html'; // Redirect to budget app page
  } else {
    document.getElementById('login-error').classList.remove('hide');
  }
});