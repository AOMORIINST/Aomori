// Animación scroll
const faders = document.querySelectorAll('.product-card, section p, section h2');
const appearOptions = { threshold:0.3, rootMargin:"0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader=>{ appearOnScroll.observe(fader); });

// Botón explorar colección
document.getElementById('explore-btn').addEventListener('click', ()=>{
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
});

// Botón contacto WhatsApp
document.getElementById('whatsapp-btn').addEventListener('click', () => {
  window.open('https://wa.me/5491154547862', '_blank'); // reemplaza con tu número
});


// Hamburger menú móvil
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=>{
  navLinks.classList.toggle('nav-active');
  hamburger.classList.toggle('toggle');
});

