/**
 * Nexus Theme - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileNavigation();
  initDropdownMenus();
  initTestimonialsCarousel();
  initContactForm();
  initSmoothScroll();
  initSearch();
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
 * Search Functionality
 */
function initSearch() {
  const searchToggle = document.getElementById('search-toggle-btn');
  
  if (!searchToggle) return;
  
  const searchDropdown = document.querySelector('.search-dropdown');
  const searchForm = document.querySelector('.search-form');
  
  // Create search results container
  const searchResultsContainer = document.createElement('div');
  searchResultsContainer.className = 'search-results-container';
  searchResultsContainer.innerHTML = `
    <div class="container">
      <div class="search-results-header">
        <h3>Search Results</h3>
        <button class="close-results" aria-label="Close search results">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="search-results"></div>
    </div>
  `;
  document.body.appendChild(searchResultsContainer);
  
  // Toggle search dropdown
  searchToggle.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('active');
    if (searchDropdown) {
      if (searchDropdown.style.display === 'block') {
        searchDropdown.style.display = 'none';
      } else {
        searchDropdown.style.display = 'block';
        setTimeout(() => {
          const searchInput = searchDropdown.querySelector('.search-input');
          if (searchInput) searchInput.focus();
        }, 100);
      }
    }
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (searchDropdown && searchToggle && 
        !searchToggle.contains(e.target) && 
        !searchDropdown.contains(e.target)) {
      searchToggle.classList.remove('active');
      searchDropdown.style.display = 'none';
    }
  });
  
  // Close search on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      searchToggle.classList.remove('active');
      if (searchDropdown) searchDropdown.style.display = 'none';
      if (searchResultsContainer.classList.contains('show')) {
        searchResultsContainer.classList.remove('show');
      }
    }
  });
  
  // Handle search form submission
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = this.querySelector('.search-input');
      if (!searchInput) return;
      
      const searchTerm = searchInput.value.trim();
      if (!searchTerm) return;
      
      // Hide search dropdown
      if (searchToggle) searchToggle.classList.remove('active');
      if (searchDropdown) searchDropdown.style.display = 'none';
      
      // Show search results container
      searchResultsContainer.classList.add('show');
      
      // Show loading indicator
      const searchResults = searchResultsContainer.querySelector('.search-results');
      if (!searchResults) return;
      
      searchResults.innerHTML = '<div class="search-loading">Searching...</div>';
      
      // In a real implementation, this would fetch results from the backend
      // For demo purposes, we'll just show some sample results after a delay
      setTimeout(() => {
        performSearch(searchTerm, searchResults);
      }, 500);
    });
  }
  
  // Close search results
  const closeResults = searchResultsContainer.querySelector('.close-results');
  if (closeResults) {
    closeResults.addEventListener('click', function() {
      searchResultsContainer.classList.remove('show');
    });
  }
  
  // Mock search function (in a real site, this would query the backend)
  function performSearch(term, resultsContainer) {
    // Normalize search term for simple matching
    const normalizedTerm = term.toLowerCase();
    
    // In a real implementation, this would be fetched from the backend
    // Sample results for demonstration
    const sampleResults = [
      {
        title: 'Web Development Services',
        excerpt: 'Professional web development services for your business needs.',
        url: '/services/web-development/'
      },
      {
        title: 'Digital Marketing Strategies',
        excerpt: 'Boost your online presence with our digital marketing expertise.',
        url: '/services/digital-marketing/'
      },
      {
        title: 'Business Strategy Consulting',
        excerpt: 'Strategic consulting services to help your business grow.',
        url: '/services/strategy-consulting/'
      }
    ];
    
    // Filter results based on search term
    const filteredResults = sampleResults.filter(item => 
      item.title.toLowerCase().includes(normalizedTerm) || 
      item.excerpt.toLowerCase().includes(normalizedTerm)
    );
    
    // Display results
    if (filteredResults.length > 0) {
      let resultsHtml = '';
      
      filteredResults.forEach(result => {
        resultsHtml += `
          <div class="search-result-item">
            <h4 class="result-title">
              <a href="${result.url}">${result.title}</a>
            </h4>
            <p class="result-excerpt">${result.excerpt}</p>
            <a href="${result.url}" class="btn btn-sm btn-primary">View</a>
          </div>
        `;
      });
      
      resultsContainer.innerHTML = resultsHtml;
    } else {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <p>No results found for "${term}"</p>
          <p>Try different keywords or check spelling</p>
        </div>
      `;
    }
  }
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
