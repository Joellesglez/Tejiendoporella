// Función para animar elementos con la clase fade-in cuando están en viewport
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) { // Ajusta el margen para que se active antes
      el.style.animationPlayState = 'running';
    }
  });
}

// Inicializa animaciones pausadas y llama a animateOnScroll
function initAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    el.style.animationPlayState = 'paused';
  });
  animateOnScroll();
}

// Evento scroll para activar animaciones
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', initAnimations);

// Pequeña interacción: botón "Ver catálogo" con efecto click y alerta (se puede cambiar)
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const targetId = btn.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});
