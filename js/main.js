// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initLoadingScreen();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation effects
    initNavigation();
    
    // Initialize demo tabs
    initDemoTabs();
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Initialize counter animations
    initCounters();
  });
  
  // Initialize loading screen
  function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Simulate loading progress (you can replace this with actual loading logic)
    setTimeout(() => {
      // Mark loading as complete after 3 seconds
      loadingScreen.classList.add('loaded');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 3000);
  }
  
  // Initialize scroll animations
  function initScrollAnimations() {
    // Get all elements that need to be animated on scroll
    const animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .sequential-fade'
    );
    
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // If the element should only animate once, unobserve it
          if (entry.target.classList.contains('animate-once')) {
            observer.unobserve(entry.target);
          }
        } else if (!entry.target.classList.contains('animate-once')) {
          // If element should animate every time it enters viewport
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.15 // Trigger when at least 15% of the element is visible
    });
    
    // Start observing each element
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Initialize navigation effects
  function initNavigation() {
    const mainNav = document.querySelector('.main-nav');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    
    // Handle scroll effects on navigation
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    });
    
    // Handle mobile menu toggle
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        
        // Toggle mobile menu visibility
        if (navLinks) {
          navLinks.classList.toggle('visible');
        }
        
        if (navCta) {
          navCta.classList.toggle('visible');
        }
      });
    }
    
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target element
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        // Calculate offset based on header height
        const headerOffset = document.querySelector('.main-nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenuToggle && mobileMenuToggle.classList.contains('active')) {
          mobileMenuToggle.click();
        }
      });
    });
  }
  
  // Initialize demo tabs
  function initDemoTabs() {
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoPanels = document.querySelectorAll('.demo-panel');
    
    demoTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        demoTabs.forEach(t => t.classList.remove('active'));
        demoPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to the clicked tab
        tab.classList.add('active');
        
        // Get the target panel and make it active
        const targetPanel = document.getElementById(`${tab.dataset.tab}-panel`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }
  
  // Initialize testimonial slider
  function initTestimonialSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentIndex = 0;
    
    // Function to show the specified testimonial
    function showTestimonial(index) {
      // Hide all testimonials
      testimonialCards.forEach(card => {
        card.style.display = 'none';
      });
      
      // Remove active class from all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Show the current testimonial and set its dot as active
      testimonialCards[index].style.display = 'block';
      dots[index].classList.add('active');
      
      // Update current index
      currentIndex = index;
    }
    
    // Initialize with first testimonial
    showTestimonial(0);
    
    // Add click event to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showTestimonial(index);
      });
    });
    
    // Add click event to previous button
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = testimonialCards.length - 1;
        }
        showTestimonial(newIndex);
      });
    }
    
    // Add click event to next button
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonialCards.length) {
          newIndex = 0;
        }
        showTestimonial(newIndex);
      });
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
      let newIndex = currentIndex + 1;
      if (newIndex >= testimonialCards.length) {
        newIndex = 0;
      }
      showTestimonial(newIndex);
    }, 5000);
  }
  
  // Initialize counter animations
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When counter element is visible, start counting
          const counter = entry.target;
          const target = parseInt(counter.dataset.target);
          const duration = 2000; // 2 seconds
          const step = (target / duration) * 10; // For a smooth count up
          let current = 0;
          
          // Animate counter using requestAnimationFrame for performance
          function updateCounter() {
            current += step;
            
            if (current < target) {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          }
          
          updateCounter();
          
          // Once animated, unobserve this element
          observer.unobserve(counter);
        }
      });
    }, {
      threshold: 0.5 // Trigger when at least 50% of the element is visible
    });
    
    // Start observing each counter
    counters.forEach(counter => {
      observer.observe(counter);
    });
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