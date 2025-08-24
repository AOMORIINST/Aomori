// ===== AOMORI · JS para interactividad y animaciones =====

// Toggle nav en mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
          target.scrollIntoView({behavior: 'smooth'});
        }
    });
});

// Animaciones reveal on scroll
const revealElems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.15});
revealElems.forEach(el => observer.observe(el));

// Tilt effect en tarjetas de productos
document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('mousemove', e=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width/2;
        const cy = rect.height/2;
        const dx = (x-cx)/cx;
        const dy = (y-cy)/cy;
        card.style.transform = `rotateX(${dy*6}deg) rotateY(${dx*6}deg)`;
    });
    card.addEventListener('mouseleave', ()=>{
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});

// Fondo canvas animado
const canvas = document.getElementById('bg-canvas');
if(canvas){
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const orbs = [];
  for(let i=0;i<8;i++){
    orbs.push({x:Math.random()*width, y:Math.random()*height, r:Math.random()*60+20, dx:(Math.random()-0.5)*0.5, dy:(Math.random()-0.5)*0.5});
  }
  function draw(){
    ctx.clearRect(0,0,width,height);
    orbs.forEach(o=>{
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(o.x,o.y,o.r*0.1,o.x,o.y,o.r);
      gradient.addColorStop(0,'rgba(0,212,255,0.2)');
      gradient.addColorStop(1,'rgba(0,212,255,0)');
      ctx.fillStyle = gradient;
      ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
      ctx.fill();
      o.x+=o.dx; o.y+=o.dy;
      if(o.x<0||o.x>width) o.dx*=-1;
      if(o.y<0||o.y>height) o.dy*=-1;
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', ()=>{width=canvas.width=window.innerWidth;height=canvas.height=window.innerHeight;});
}
