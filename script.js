document.addEventListener('DOMContentLoaded', () => {
    
  // 1. Efecto Scroll en la Barra de Navegación
  const nav = document.querySelector('.glass-nav');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          nav.classList.add('scrolled');
      } else {
          nav.classList.remove('scrolled');
      }
  });

  // 2. Animación Reveal al hacer Scroll
  function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = reveals[i].getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add('active');
          }
      }
  }

  // Activa en el primer load y luego en scroll
  window.addEventListener('scroll', reveal);
  reveal(); // Gatillar una vez al principio

  // 3. Smooth Scrolling para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetElement = document.querySelector(this.getAttribute('href'));
          if(targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80, // Offset por la navbar fija
                  behavior: 'smooth'
              });
          }
      });
  });

  // 4. Setear año actual en footer
  const yearElement = document.getElementById('year');
  if(yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }

});
