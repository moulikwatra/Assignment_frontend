document.addEventListener('DOMContentLoaded', () => {
    // Number animation logic
    const numbers = document.querySelectorAll('.number');
  
    const animateNumber = (numberElement, target) => {
      let current = 0; // Start from 0
      const duration = 3000; // Duration of the animation in milliseconds
      const steps = 100; // Number of steps in the animation
      const stepDuration = duration / steps; // Duration of each step
  
      const increment = Math.ceil(target / steps); // Increment for each step
  
      const updateNumber = () => {
        current = Math.min(current + increment, target); // Ensure we don't exceed the target
        numberElement.innerText = current.toLocaleString() + '+'; // Add comma and + sign
  
        if (current < target) {
          setTimeout(updateNumber, stepDuration); // Continue updating
        } else {
          numberElement.innerText = target.toLocaleString() + '+'; // Final value with + sign
        }
      };
  
      updateNumber(); // Start the animation
    };
  
    // Intersection Observer callback for number animation
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const numberElement = entry.target;
          const target = +numberElement.getAttribute('data-number');
          animateNumber(numberElement, target);
  
          // Unobserve the element after animation starts to prevent re-animation
          observer.unobserve(numberElement);
        }
      });
    };
  
    // Create an Intersection Observer instance for numbers
    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    });
  
    // Observe each number element
    numbers.forEach((number) => {
      observer.observe(number);
    });
  
    // Floating button logic
    const floatingBtn = document.querySelector('.floating-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuItems = mobileMenu.querySelectorAll('a');
  
    if (floatingBtn) {
      // Toggle mobile menu when floating button is clicked
      floatingBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
      });
  
      // Close the menu when a user taps on a menu item
      mobileMenuItems.forEach((item) => {
        item.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });
      });
  
      // Close menu if clicked outside (optional enhancement)
      document.addEventListener('click', (e) => {
        if (!floatingBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('open');
        }
      });
    }
  });

  // Get all buttons with the class cta-button
const ctaButtons = document.querySelectorAll('.cta-button');

// Add an event listener to each button
ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the link from the data-link attribute
    const link = button.getAttribute('data-link');
    // Open the link in a new tab
    window.open(link, '_blank');
  });
});

// Get all elements with the class get-started
const getStartedButtons = document.querySelectorAll('.get-started');

// Add an event listener to each button
getStartedButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the link from the data-link attribute
    const link = button.getAttribute('data-link');
    // Open the link in a new tab
    window.open(link, '_blank');
  });
});

