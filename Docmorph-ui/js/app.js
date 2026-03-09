// Enhanced Interactive Features for DocMorph

// DRAG AND DROP UPLOAD BOX EFFECTS
document.addEventListener('DOMContentLoaded', function() {
  const uploadBoxes = document.querySelectorAll('.upload-box');
  
  uploadBoxes.forEach(uploadBox => {
    // Drag over effects
    uploadBox.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadBox.classList.add('drag-over');
    });
    
    uploadBox.addEventListener('dragleave', (e) => {
      e.preventDefault();
      uploadBox.classList.remove('drag-over');
    });
    
    uploadBox.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadBox.classList.remove('drag-over');
      
      // Optional: Handle files
      const files = e.dataTransfer.files;
      const input = uploadBox.nextElementSibling;
      if (input && input.type === 'file') {
        input.files = files;
      }
    });
    
    // Click to upload
    uploadBox.addEventListener('click', (e) => {
      if (e.target === uploadBox) {
        const input = uploadBox.nextElementSibling;
        if (input && input.type === 'file') {
          input.click();
        }
      }
    });
  });
});

// SMOOTH SCROLL ON ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ADD RIPPLE EFFECT ON BUTTON CLICKS
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
}

// APPLY RIPPLE EFFECT TO BUTTONS
document.querySelectorAll('.gradient-btn, .tone, button').forEach(button => {
  button.addEventListener('click', createRipple);
});

// ADD RIPPLE CSS
const style = document.createElement('style');
style.textContent = `
  button, .gradient-btn, .tone {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: rippleAnimation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes rippleAnimation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// SCROLL ANIMATIONS
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// OBSERVE ALL CARDS
document.querySelectorAll('.card').forEach((card, index) => {
  card.style.animationDelay = (index * 0.1) + 's';
  card.style.opacity = '0';
  observer.observe(card);
});

// OBSERVE SECTION TITLES
document.querySelectorAll('.section-title').forEach(title => {
  title.style.animation = 'slideInDown 0.6s ease-out forwards';
  observer.observe(title);
});

// KEYBOARD NAVIGATION - FOCUS STYLES
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// ADD FOCUS STYLES CSS
const focusStyle = document.createElement('style');
focusStyle.textContent = `
  .keyboard-nav *:focus {
    outline: 2px solid var(--accent-primary) !important;
    outline-offset: 2px !important;
  }
`;
document.head.appendChild(focusStyle);

// PAGE LOAD ANIMATION
window.addEventListener('load', () => {
  document.body.style.animation = 'fadeIn 0.8s ease-out';
});

// INTERACTIVE CARD TILT EFFECT (Optional - Uncomment to enable)
/*
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = (y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});
*/

// SMOOTH PAGE TRANSITIONS
document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.href && !this.hash && this.hostname === window.location.hostname) {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease-out';
      
      setTimeout(() => {
        window.location.href = this.href;
      }, 300);
    }
  });
});

// FADE IN ON PAGE LOAD
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.3s ease-in';
});

console.log('DocMorph - Interactive features loaded!');
