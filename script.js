const menuToggle = document.getElementById('menuToggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.requestFullscreen();
});
