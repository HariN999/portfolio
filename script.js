// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
    });
    
    // Show the target section
    targetSection.classList.add('active');
    
    // Scroll to the target section
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Show home section by default
document.getElementById('home').classList.add('active');
