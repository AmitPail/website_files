// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize waitlist form
    initWaitlistForm();
  });
  
  // Initialize waitlist form
  function initWaitlistForm() {
    const waitlistForm = document.getElementById('waitlistForm');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('formMessage');
    
    if (!waitlistForm || !emailInput || !formMessage) return;
    
    waitlistForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get the email value
      const email = emailInput.value.trim();
      
      // Basic validation
      if (!email) {
        showMessage('Please enter your email address.', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // Show loading state
      const submitButton = waitlistForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // API endpoint (change this to your actual endpoint)
      const apiEndpoint = 'https://waitlist.breefly.ai/api/join-waitlist';
      
      // Send the data to your API
      fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Show success message
          showMessage(data.message || 'Thanks for joining! We\'ll be in touch soon.', 'success');
          
          // Clear the form
          emailInput.value = '';
        } else {
          // Show error message
          showMessage(data.message || 'Something went wrong. Please try again.', 'error');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showMessage('Something went wrong. Please try again later.', 'error');
      })
      .finally(() => {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      });
    });
    
    // Helper function to show form messages
    function showMessage(message, type) {
      formMessage.textContent = message;
      formMessage.className = 'form-message';
      formMessage.classList.add(`form-message-${type}`);
      
      // Scroll to the message if it's not visible
      if (!isInViewport(formMessage)) {
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      // Clear error message after 5 seconds if it's an error
      if (type === 'error') {
        setTimeout(() => {
          formMessage.textContent = '';
          formMessage.className = 'form-message';
        }, 5000);
      }
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    // Helper function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
  
  // Add class to style the form message types
  const styles = `
    .form-message-success {
      color: var(--primary);
      font-weight: 500;
    }
    
    .form-message-error {
      color: #e74c3c;
      font-weight: 500;
    }
  `;
  
  // Add styles to document head
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);