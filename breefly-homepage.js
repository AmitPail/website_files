(function() {
  'use strict';
  
  // Hero Section Component
  const BreeflyHero = () => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      setVisible(true);
      const handleScroll = () => {};
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return React.createElement(
      'div',
      { className: 'breefly-hero' },
      React.createElement(
        'div',
        { className: 'hero-bg' },
        React.createElement('div', { className: 'floating-element floating-element-1' }),
        React.createElement('div', { className: 'floating-element floating-element-2' }),
        React.createElement('div', { className: 'grid-background' })
      ),
      React.createElement(
        'div',
        { className: `hero-content ${visible ? 'visible' : ''}` },
        React.createElement('div', { className: 'welcome-text' }, 'WELCOME TO YOUR NEW TRADING COMPANION'),
        React.createElement('h1', null, 'Breefly.ai'),
        React.createElement('p', { className: 'subtitle' }, 'AI powered trading'),
        React.createElement(
          'div',
          { className: 'hero-tagline' },
          React.createElement(
            'div',
            { className: 'hero-features' },
            React.createElement('div', null, 'more ', React.createElement('span', { className: 'highlight' }, 'power'), ','),
            React.createElement('div', null, 'more ', React.createElement('span', { className: 'highlight' }, 'knowledge'), ','),
            React.createElement('div', null, 'faster ', React.createElement('span', { className: 'highlight' }, 'news')),
            React.createElement('div', null, 'and ', React.createElement('span', { className: 'highlight' }, 'insights'))
          )
        ),
        React.createElement(
          'div',
          { className: 'cta-container' },
          React.createElement('a', { href: '/waitlist', className: 'primary-button' }, 'Coming Soon - Join The Waitlist Now!')
        ),
        React.createElement(
          'div',
          { className: 'guarantee-text' },
          'Trading, Learning, and getting better in a way you\'ll ❤️ guaranteed'
        )
      )
    );
  };

  // Features Section Component
  const BreeflyFeatures = () => {
    const [visible, setVisible] = React.useState(false);
    const featuresRef = React.useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (featuresRef.current) {
        observer.observe(featuresRef.current);
      }
      
      return () => {
        if (featuresRef.current) {
          observer.unobserve(featuresRef.current);
        }
      };
    }, []);

    const createSvgIcon = (pathData) => {
      return React.createElement(
        'svg',
        { 
          xmlns: 'http://www.w3.org/2000/svg', 
          width: '32', 
          height: '32', 
          viewBox: '0 0 24 24', 
          fill: 'none', 
          stroke: 'currentColor', 
          strokeWidth: '2', 
          strokeLinecap: 'round', 
          strokeLinejoin: 'round' 
        },
        pathData
      );
    };

    const features = [
      {
        icon: createSvgIcon([
          React.createElement('circle', { cx: '12', cy: '12', r: '10', key: 'circle' }),
          React.createElement('polyline', { points: '12 6 12 12 16 14', key: 'polyline' })
        ]),
        title: "Real-Time Insights",
        description: "Stay ahead with instant market updates and analysis tailored to your portfolio."
      },
      {
        icon: createSvgIcon([
          React.createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'path' }),
          React.createElement('polyline', { points: '22 4 12 14.01 9 11.01', key: 'polyline' })
        ]),
        title: "Proactive Guidance",
        description: "Receive smart recommendations based on your trading style and goals."
      },
      {
        icon: createSvgIcon([
          React.createElement('path', { d: 'M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3', key: 'path' })
        ]),
        title: "Adaptive Learning",
        description: "Our platform continuously evolves based on your interactions to deliver better results."
      }
    ];

    return React.createElement(
      'div',
      { className: 'breefly-features', ref: featuresRef },
      React.createElement(
        'div',
        { className: `features-container ${visible ? 'visible' : ''}` },
        React.createElement(
          'h2',
          null,
          'Trading ',
          React.createElement('span', { className: 'text-gradient' }, 'Reimagined')
        ),
        React.createElement(
          'p',
          { className: 'features-subtitle' },
          'Experience the future of trading with AI-powered insights, real-time analysis, and personalized recommendations'
        ),
        React.createElement(
          'div',
          { className: 'features-grid' },
          features.map((feature, index) => 
            React.createElement(
              'div',
              { className: 'feature-card', key: index },
              React.createElement('div', { className: 'feature-icon' }, feature.icon),
              React.createElement('h3', { className: 'feature-title' }, feature.title),
              React.createElement('p', { className: 'feature-description' }, feature.description)
            )
          )
        )
      )
    );
  };

  // How It Works Section
  const HowItWorks = () => {
    const [visible, setVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    const steps = [
      {
        number: "01",
        title: "Connect",
        description: "Link your trading accounts and preferences to create your personalized profile."
      },
      {
        number: "02",
        title: "Analyze",
        description: "Our AI analyzes market data and your portfolio to generate personalized insights."
      },
      {
        number: "03",
        title: "Trade",
        description: "Make informed decisions based on real-time insights and recommendations."
      }
    ];

    return React.createElement(
      'div',
      { className: 'how-it-works-section', ref: sectionRef },
      React.createElement(
        'div',
        { className: `section-container ${visible ? 'visible' : ''}` },
        React.createElement(
          'h2',
          null,
          'How ',
          React.createElement('span', { className: 'text-gradient' }, 'It Works')
        ),
        React.createElement(
          'p',
          { className: 'section-subtitle' },
          'A simple, powerful process to enhance your trading strategy'
        ),
        React.createElement(
          'div',
          { className: 'steps-container' },
          steps.map((step, index) => 
            React.createElement(
              'div',
              { className: 'step-card', key: index },
              React.createElement('div', { className: 'step-number' }, step.number),
              React.createElement('h3', { className: 'step-title' }, step.title),
              React.createElement('p', { className: 'step-description' }, step.description)
            )
          )
        )
      )
    );
  };

  // Testimonials Section
  const Testimonials = () => {
    const [visible, setVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    const testimonials = [
      {
        quote: "Breefly has completely transformed how I approach trading. The AI-powered insights have given me an edge I never had before.",
        author: "Alex M.",
        role: "Day Trader"
      },
      {
        quote: "The real-time analysis and notifications have helped me catch opportunities I would have otherwise missed. Game changer!",
        author: "Sarah K.",
        role: "Swing Trader"
      }
    ];

    return React.createElement(
      'div',
      { className: 'testimonials-section', ref: sectionRef },
      React.createElement(
        'div',
        { className: `section-container ${visible ? 'visible' : ''}` },
        React.createElement(
          'h2',
          null,
          'What ',
          React.createElement('span', { className: 'text-gradient' }, 'Traders Say')
        ),
        React.createElement(
          'div',
          { className: 'testimonials-grid' },
          testimonials.map((testimonial, index) => 
            React.createElement(
              'div',
              { className: 'testimonial-card', key: index },
              React.createElement(
                'div',
                { className: 'quote-icon' },
                React.createElement(
                  'svg',
                  { 
                    xmlns: 'http://www.w3.org/2000/svg', 
                    width: '32', 
                    height: '32', 
                    viewBox: '0 0 24 24', 
                    fill: 'none', 
                    stroke: 'currentColor', 
                    strokeWidth: '2', 
                    strokeLinecap: 'round', 
                    strokeLinejoin: 'round' 
                  },
                  [
                    React.createElement('path', { d: 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z', key: 'path1' }),
                    React.createElement('path', { d: 'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z', key: 'path2' })
                  ]
                )
              ),
              React.createElement('p', { className: 'testimonial-quote' }, testimonial.quote),
              React.createElement(
                'div',
                { className: 'testimonial-author' },
                React.createElement('strong', null, testimonial.author),
                React.createElement('span', { className: 'testimonial-role' }, testimonial.role)
              )
            )
          )
        )
      )
    );
  };

  // CTA Section
  const CTASection = () => {
    return React.createElement(
      'div',
      { className: 'cta-section' },
      React.createElement(
        'div',
        { className: 'cta-container' },
        React.createElement(
          'h2',
          null,
          'Ready to ',
          React.createElement('span', { className: 'text-gradient' }, 'Transform'),
          ' Your Trading?'
        ),
        React.createElement(
          'p',
          null,
          'Join our waitlist today and be the first to experience the future of AI-powered trading.'
        ),
        React.createElement(
          'a',
          { href: '/waitlist', className: 'primary-button' },
          'Join The Waitlist'
        )
      )
    );
  };

  // Initialize the components when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Render the Hero Section
    const heroContainer = document.getElementById('breefly-hero-container');
    if (heroContainer) {
      ReactDOM.createRoot(heroContainer).render(React.createElement(BreeflyHero));
    }
    
    // Render the Features Section
    const featuresContainer = document.getElementById('breefly-features-container');
    if (featuresContainer) {
      ReactDOM.createRoot(featuresContainer).render(React.createElement(BreeflyFeatures));
    }
    
    // Render the How It Works Section
    const howItWorksContainer = document.getElementById('breefly-how-it-works-container');
    if (howItWorksContainer) {
      ReactDOM.createRoot(howItWorksContainer).render(React.createElement(HowItWorks));
    }
    
    // Render the Testimonials Section
    const testimonialsContainer = document.getElementById('breefly-testimonials-container');
    if (testimonialsContainer) {
      ReactDOM.createRoot(testimonialsContainer).render(React.createElement(Testimonials));
    }
    
    // Render the CTA Section
    const ctaContainer = document.getElementById('breefly-cta-container');
    if (ctaContainer) {
      ReactDOM.createRoot(ctaContainer).render(React.createElement(CTASection));
    }
  });
  