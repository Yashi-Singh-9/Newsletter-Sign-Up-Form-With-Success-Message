document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const successCard = document.getElementById('success-card');
    const formCard = document.getElementById('form-card');
    const dismissButton = document.getElementById('dismiss-btn');
    const emailConfirmation = document.querySelector('.email-confirmation');
  
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Show error state
    function showError(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
      emailInput.style.borderColor = 'hsl(4, 100%, 67%)'; 
      emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.1)';
      emailInput.style.color = 'hsl(4, 100%, 67%)'; 
    }
  
    // Clear error state
    function clearError() {
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
      emailInput.style.borderColor = ''; 
      emailInput.style.backgroundColor = ''; 
      emailInput.style.color = ''; 
    }
  
    // Validate email function
    function validateEmail(email) {
      return emailRegex.test(email);
    }
  
    // Handle form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
  
      if (!email) {
        showError('Email address cannot be empty');
        return;
      }
  
      if (!validateEmail(email)) {
        showError('Please enter a valid email address');
        return;
      }
  
      // If email is valid
      clearError();
      emailConfirmation.textContent = email;
      formCard.classList.add('hidden');
      successCard.classList.remove('hidden');
    });
  
    // Input event listener to clear error styling on typing
    emailInput.addEventListener('input', () => {
      clearError();
    });
  
    // Dismiss button functionality
    dismissButton.addEventListener('click', () => {
      successCard.classList.add('hidden');
      formCard.classList.remove('hidden');
      form.reset();
      clearError();
    });
  });  