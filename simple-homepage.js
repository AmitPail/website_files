document.addEventListener('DOMContentLoaded', function() {
  // Clear out any existing content in the containers
  document.getElementById('breefly-hero-container').innerHTML = '';
  document.getElementById('breefly-features-container').innerHTML = '';
  document.getElementById('breefly-how-it-works-container').innerHTML = '';
  document.getElementById('breefly-testimonials-container').innerHTML = '';
  document.getElementById('breefly-cta-container').innerHTML = '';
  
  // Hero Section
  const heroContainer = document.getElementById('breefly-hero-container');
  if (heroContainer) {
    heroContainer.innerHTML = `
      <div class="breefly-hero">
        <div class="hero-bg">
          <div class="floating-element floating-element-1"></div>
          <div class="floating-element floating-element-2"></div>
          <div class="grid-background"></div>
        </div>
        <div class="hero-content visible">
          <div class="welcome-text">WELCOME TO YOUR NEW TRADING COMPANION</div>
          <h1>Breefly.ai</h1>
          <p class="subtitle">AI powered trading</p>
          <div class="hero-tagline">
            <div class="hero-features">
              <div>more <span class="highlight">power</span>,</div>
              <div>more <span class="highlight">knowledge</span>,</div>
              <div>faster <span class="highlight">news</span></div>
              <div>and <span class="highlight">insights</span></div>
            </div>
          </div>
          <div class="cta-container">
            <a href="/waitlist" class="primary-button">Coming Soon - Join The Waitlist Now!</a>
          </div>
          <div class="guarantee-text">
            Trading, Learning, and getting better in a way you'll ❤️ guaranteed
          </div>
        </div>
      </div>
    `;
  }

  // Features Section
  const featuresContainer = document.getElementById('breefly-features-container');
  if (featuresContainer) {
    featuresContainer.innerHTML = `
      <div class="breefly-features">
        <div class="features-container visible">
          <h2>Trading <span class="text-gradient">Reimagined</span></h2>
          <p class="features-subtitle">
            Experience the future of trading with AI-powered insights, real-time analysis, and personalized recommendations
          </p>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 class="feature-title">Real-Time Insights</h3>
              <p class="feature-description">Stay ahead with instant market updates and analysis tailored to your portfolio.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 class="feature-title">Proactive Guidance</h3>
              <p class="feature-description">Receive smart recommendations based on your trading style and goals.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 class="feature-title">Adaptive Learning</h3>
              <p class="feature-description">Our platform continuously evolves based on your interactions to deliver better results.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // How It Works Section
  const howItWorksContainer = document.getElementById('breefly-how-it-works-container');
  if (howItWorksContainer) {
    howItWorksContainer.innerHTML = `
      <div class="how-it-works-section">
        <div class="section-container visible">
          <h2>How <span class="text-gradient">It Works</span></h2>
          <p class="section-subtitle">
            A simple, powerful process to enhance your trading strategy
          </p>
          
          <div class="steps-container">
            <div class="step-card">
              <div class="step-number">01</div>
              <h3 class="step-title">Connect</h3>
              <p class="step-description">Link your trading accounts and preferences to create your personalized profile.</p>
            </div>
            
            <div class="step-card">
              <div class="step-number">02</div>
              <h3 class="step-title">Analyze</h3>
              <p class="step-description">Our AI analyzes market data and your portfolio to generate personalized insights.</p>
            </div>
            
            <div class="step-card">
              <div class="step-number">03</div>
              <h3 class="step-title">Trade</h3>
              <p class="step-description">Make informed decisions based on real-time insights and recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Testimonials Section
  const testimonialsContainer = document.getElementById('breefly-testimonials-container');
  if (testimonialsContainer) {
    testimonialsContainer.innerHTML = `
      <div class="testimonials-section">
        <div class="section-container visible">
          <h2>What <span class="text-gradient">Traders Say</span></h2>
          
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p class="testimonial-quote">Breefly has completely transformed how I approach trading. The AI-powered insights have given me an edge I never had before.</p>
              <div class="testimonial-author">
                <strong>Alex M.</strong>
                <span class="testimonial-role">Day Trader</span>
              </div>
            </div>
            
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p class="testimonial-quote">The real-time analysis and notifications have helped me catch opportunities I would have otherwise missed. Game changer!</p>
              <div class="testimonial-author">
                <strong>Sarah K.</strong>
                <span class="testimonial-role">Swing Trader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // CTA Section
  const ctaContainer = document.getElementById('breefly-cta-container');
  if (ctaContainer) {
    ctaContainer.innerHTML = `
      <div class="cta-section">
        <div class="cta-container">
          <h2>Ready to <span class="text-gradient">Transform</span> Your Trading?</h2>
          <p>Join our waitlist today and be the first to experience the future of AI-powered trading.</p>
          <a href="/waitlist" class="primary-button">Join The Waitlist</a>
        </div>
      </div>
    `;
  }

  // Also create an observer to make elements visible when scrolled into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all section containers
  document.querySelectorAll('.features-container, .section-container, .hero-content').forEach(el => {
    observer.observe(el);
  });
});
