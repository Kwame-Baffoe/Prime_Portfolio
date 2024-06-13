document.addEventListener('DOMContentLoaded', () => {
    // Load Feather Icons
    feather.replace();
  
    // Particle animation
    const container = document.querySelector('.particles');
    const particleCount = 50;
  
    for (let i = 0; i < particleCount; i++) {
      let particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 5 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
      particle.style.position = 'absolute';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      container.appendChild(particle);
  
      anime({
        targets: particle,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: [0.8, 0.2],
        duration: Math.random() * 3000 + 2000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      });
    }
  
    // Typing effect
    const phrases = [
      'Crafting innovative solutions at the intersection of web.',
      'Every Single line of code bound!.',
      'Building scalable, efficient, and secure ecosystems.'
    ];
  
    let currentPhrase = 0;
    const typedOut = document.querySelector('.typed-out');
  
    function typeNextPhrase() {
      typedOut.style.animation = 'none';
      setTimeout(() => {
        typedOut.textContent = phrases[currentPhrase];
        typedOut.style.animation = 'typing 3.5s steps(30, end), blink-caret .5s step-end infinite';
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }, 100);
    }
  
    setInterval(typeNextPhrase, 5000);
  
    // Dynamic skill lists
    const softSkills = ['Leadership', 'Communication', 'Problem-solving', 'Adaptability', 'Emotional intelligence', 'Strategic thinking'];
    const techSkills = ['Cloud Architecture (AWS)', 'CI/CD (Jenkins)', 'Microservices', 'Data Analytics'];
  
    function populateSkills(skills, list) {
      skills.forEach((skill, index) => {
        const li = document.createElement('li');
        li.textContent = skill;
        li.style.opacity = 0;
        li.style.transform = 'translateX(-20px)';
        list.appendChild(li);
  
        setTimeout(() => {
          li.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          li.style.opacity = 1;
          li.style.transform = 'translateX(0)';
  
          const skillBar = document.createElement('div');
          skillBar.className = 'skill-bar';
          li.appendChild(skillBar);
  
          setTimeout(() => {
            skillBar.style.width = `${Math.random() * 30 + 70}%`;  // Between 70% and 100%
          }, 500);
        }, index * 200);
      });
    }
  
    if (document.getElementById('softSkills') && document.getElementById('techSkills')) {
      populateSkills(softSkills, document.getElementById('softSkills'));
      populateSkills(techSkills, document.getElementById('techSkills'));
    }
  
    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    document.querySelectorAll('.fadeIn, .slideIn, .zoomIn').forEach(el => {
      observer.observe(el);
    });
  
    // Contact icons
    const contactInfo = document.querySelector('.contact-info');
    const icons = {
      'Name:': 'user',
      'Address:': 'map-pin',
      'Phone:': 'phone',
      'Email:': 'mail'
    };
  
    Object.entries(icons).forEach(([text, icon]) => {
      const p = Array.from(contactInfo.children).find(child => child.textContent.includes(text));
      if (p) {
        const i = document.createElement('i');
        i.dataset.feather = icon;
        p.prepend(i);
        feather.replace(i);
      }
    });
  
    // Mobile navigation toggle
    window.toggleNavigation = function() {
      let nav = document.getElementById("mobile-nav");
      nav.classList.toggle('w3-show');
      anime({
        targets: '.nav-item-mobile',
        translateX: nav.classList.contains('w3-show') ? ['-100%', 0] : [0, '-100%'],
        opacity: nav.classList.contains('w3-show') ? [0, 1] : [1, 0],
        delay: anime.stagger(100),
        duration: 500,
        easing: 'easeOutQuad'
      });
    };
  
    // replace toggle icon with Feather icon
    const toggleBtn = document.querySelector('a[onclick="toggleNavigation()"]');
    if (toggleBtn) {
      toggleBtn.innerHTML = '';
      const icon = document.createElement('i');
      icon.dataset.feather = 'menu';
      icon.className = 'toggle-icon';
      toggleBtn.appendChild(icon);
      feather.replace(icon);
    }
  });