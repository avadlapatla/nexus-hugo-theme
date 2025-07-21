/**
 * Professional Corporate Hugo Theme - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileNavigation();
  initDropdownMenus();
  initTestimonialsCarousel();
  initContactForm();
  initSmoothScroll();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNavigation() {
  const navToggle = document.querySelector('.navbar-toggler');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      const navCollapse = document.querySelector('.navbar-collapse');
      
      if (!navCollapse) return;
      
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      
      if (isExpanded) {
        navCollapse.classList.remove('show');
      } else {
        navCollapse.classList.add('show');
      }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const navCollapse = document.querySelector('.navbar-collapse.show');
      if (navCollapse && !navCollapse.contains(event.target) && !navToggle.contains(event.target)) {
        navCollapse.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/**
 * Dropdown Menus for Desktop and Mobile
 */
function initDropdownMenus() {
  const dropdownToggles = document.querySelectorAll('.nav-item.dropdown .nav-link');
  
  if (window.innerWidth < 992) {
    // Mobile behavior - click to expand/collapse
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(event) {
        event.preventDefault();
        
        const parent = this.parentNode;
        const dropdownMenu = parent.querySelector('.dropdown-menu');
        
        if (!dropdownMenu) return;
        
        if (dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
        } else {
          // Close any open dropdown menus
          document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
            menu.classList.remove('show');
          });
          
          dropdownMenu.classList.add('show');
        }
      });
    });
  }
}

/**
 * Testimonials Carousel
 */
function initTestimonialsCarousel() {
  const carouselContainer = document.querySelector('.testimonials-carousel');
  
  if (!carouselContainer) return;
  
  const carousel = carouselContainer.querySelector('.carousel-container');
  const items = carousel.querySelectorAll('.testimonial-item');
  const prevButton = carouselContainer.querySelector('.carousel-control.prev');
  const nextButton = carouselContainer.querySelector('.carousel-control.next');
  
  if (items.length <= 1) return;
  
  let currentIndex = 0;
  const itemWidth = items[0].offsetWidth;
  
  // Set initial state
  carousel.style.display = 'flex';
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.width = `${items.length * 100}%`;
  
  items.forEach(function(item) {
    item.style.flex = `0 0 ${100 / items.length}%`;
  });
  
  // Update carousel position
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * (100 / items.length)}%)`;
  }
  
  // Event listeners
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    });
    
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });
  }
  
  // Auto-play (optional)
  let autoplayInterval = setInterval(function() {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  }, 5000);
  
  // Pause auto-play on hover
  carouselContainer.addEventListener('mouseenter', function() {
    clearInterval(autoplayInterval);
  });
  
  carouselContainer.addEventListener('mouseleave', function() {
    autoplayInterval = setInterval(function() {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    }, 5000);
  });
}

/**
 * Contact Form Validation and Submission
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic validation
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(function(field) {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailField.value)) {
        isValid = false;
        emailField.classList.add('error');
      }
    }
    
    // Show success or error message
    const formMessage = form.querySelector('.form-message');
    const successMessage = formMessage ? formMessage.querySelector('.alert-success') : null;
    const errorMessage = formMessage ? formMessage.querySelector('.alert-danger') : null;
    
    if (formMessage) {
      formMessage.style.display = 'block';
      
      if (isValid) {
        if (successMessage) successMessage.style.display = 'block';
        if (errorMessage) errorMessage.style.display = 'none';
        
        // Reset form fields
        form.reset();
        
        // In a real-world scenario, you would submit the form data via AJAX here
        // For demo purposes, we're just showing a success message
      } else {
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'block';
      }
      
      // Hide message after 5 seconds
      setTimeout(function() {
        formMessage.style.display = 'none';
      }, 5000);
    }
  });
  
  // Clear validation errors on input
  form.querySelectorAll('input, textarea').forEach(function(input) {
    input.addEventListener('input', function() {
      this.classList.remove('error');
    });
  });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') === '#') return;
      
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        const navCollapse = document.querySelector('.navbar-collapse.show');
        if (navCollapse) {
          navCollapse.classList.remove('show');
          document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
        }
        
        // Scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Portfolio Filters
 */
function initPortfolioFilters() {
  const filterContainer = document.querySelector('.portfolio-filters');
  
  if (!filterContainer) return;
  
  const filterItems = filterContainer.querySelectorAll('.filter-item');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Remove active class from all filters
      filterItems.forEach(function(filter) {
        filter.classList.remove('active');
      });
      
      // Add active class to clicked filter
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      // Show/hide portfolio items based on filter
      portfolioItems.forEach(function(portfolioItem) {
        if (filterValue === 'all' || portfolioItem.classList.contains(filterValue)) {
          portfolioItem.style.display = 'block';
        } else {
          portfolioItem.style.display = 'none';
        }
      });
    });
  });
}
