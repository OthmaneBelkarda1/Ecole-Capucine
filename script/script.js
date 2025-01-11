document.addEventListener('DOMContentLoaded', function() {
    // Select all links in the navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Prevent default anchor click behavior
        e.preventDefault();
        
        // Get the target element
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without page reload
          history.pushState(null, '', `#${targetId}`);
        }
      });
    });
  });
  
  console.log("Smooth scroll behavior has been applied to navbar links.");
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});


