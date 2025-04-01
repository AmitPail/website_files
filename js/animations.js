// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize parallax effect
    initParallaxEffect();
    
    // Initialize typing animation
    initTypingAnimation();
    
    // Initialize hover effects
    initHoverEffects();
    
    // Initialize scroll indicator
    initScrollIndicator();
  });
  
  // Initialize parallax effect for background orbs
  function initParallaxEffect() {
    const orbs = document.querySelectorAll('.floating-orb');
    
    window.addEventListener('mousemove', e => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      orbs.forEach(orb => {
        const speed = parseFloat(orb.getAttribute('data-speed') || 0.05);
        const moveX = (mouseX - 0.5) * speed * 100;
        const moveY = (mouseY - 0.5) * speed * 100;
        
        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
    
    // Add data-speed attribute to orbs with different values for varied effect
    if (orbs.length > 0) {
      orbs[0].setAttribute('data-speed', '0.03');
      if (orbs.length > 1) orbs[1].setAttribute('data-speed', '0.05');
      if (orbs.length > 2) orbs[2].setAttribute('data-speed', '0.07');
    }
  }
  
  // Initialize typing animation for various elements
  function initTypingAnimation() {
    // Define elements that should have a typing animation
    const elementsToAnimate = [
      {
        trigger: '.hero-section', // Section that triggers the animation
        element: '.hero-title .text-highlight', // Element to animate
        speed: 100, // Speed in milliseconds
        delay: 1000 // Delay before animation starts
      }
    ];
    
    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find elements to animate within this section
          elementsToAnimate.forEach(item => {
            if (item.trigger === '.' + entry.target.className.split(' ')[0]) {
              const elements = entry.target.querySelectorAll(item.element);
              
              elements.forEach((element, index) => {
                // Get the text content
                const text = element.textContent;
                element.textContent = '';
                element.style.borderRight = 'none';
                      // Reset animation properties
                      element.style.animation = 'none';
                    }'0.2rem solid var(--primary)';
                element.style.display = 'inline-block';
                element.style.whiteSpace = 'nowrap';
                element.style.overflow = 'hidden';
                element.style.animation = `typing 2s steps(${text.length}, end), blinkCursor 0.75s step-end infinite`;
                
                // Type the text
                let charIndex = 0;
                setTimeout(() => {
                  const typeInterval = setInterval(() => {
                    if (charIndex < text.length) {
                      element.textContent += text.charAt(charIndex);
                      charIndex++;
                    } else {
                      clearInterval(typeInterval);
                      element.style.borderRight =