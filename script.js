// Año dinámico en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle del menú móvil
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
});

// Cerrar menú al hacer click en link (móvil)
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('show'));
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Validación rápida del formulario (demo)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const hasEmpty = [...data.values()].some(v => !String(v).trim());
  if (hasEmpty) {
    formMsg.textContent = 'Completá todos los campos.';
    formMsg.style.color = '#ffb3b3';
    return;
  }
  // Aquí podrías integrar EmailJS o tu backend
  form.reset();
  formMsg.textContent = '¡Mensaje enviado! Te responderemos a la brevedad.';
  formMsg.style.color = '#7cff00';
  setTimeout(()=> formMsg.textContent = '', 4000);
});
