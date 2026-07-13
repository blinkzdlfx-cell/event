# IMPLEMENTATION - Herkinx Events Website

## Implementation Guide

### Getting Started

#### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Live Server extension for VS Code
- Basic knowledge of HTML, CSS, JavaScript

#### Development Setup
1. **Clone or download project files**
2. **Open project in VS Code**
3. **Install Live Server extension**
4. **Right-click index.html → Open with Live Server**
5. **Start developing**

### Project Structure Implementation

#### 1. Create Folder Structure
```bash
mkdir -p css js assets/images assets/fonts docs
```

#### 2. Base HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Herkinx Events - Luxury Event Decoration</title>
    <meta name="description" content="Premium event decoration services for weddings, birthdays, corporate events and more.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/styles.css">
    
    <!-- Tailwind Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary': '#ffffff',
                        'secondary': '#000000',
                        'accent': '#f5f5f5',
                        'gold': '#d4af37',
                    },
                    fontFamily: {
                        'display': ['Playfair Display', 'serif'],
                        'body': ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>
<body class="font-body bg-primary text-secondary">
    <!-- Header -->
    <header id="header" class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md">
        <!-- Navigation will be here -->
    </header>

    <!-- Main Content -->
    <main>
        <!-- Page content will be here -->
    </main>

    <!-- Footer -->
    <footer class="bg-secondary text-white py-16">
        <!-- Footer content will be here -->
    </footer>

    <!-- Chat UI Placeholder -->
    <div id="chat-widget" class="fixed bottom-6 right-6 z-50">
        <!-- Chat widget will be here -->
    </div>

    <!-- Scripts -->
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
    <script src="js/chat.js"></script>
</body>
</html>
```

### Component Implementation

#### 1. Header Component
```html
<header id="header" class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a href="index.html" class="font-display text-2xl font-bold">
                    HERKINX <span class="text-gold">EVENTS</span>
                </a>
            </div>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-8">
                <a href="index.html" class="text-secondary hover:text-gold transition-colors">Home</a>
                <a href="about.html" class="text-secondary hover:text-gold transition-colors">About</a>
                <a href="services.html" class="text-secondary hover:text-gold transition-colors">Services</a>
                <a href="portfolio.html" class="text-secondary hover:text-gold transition-colors">Portfolio</a>
                <a href="testimonials.html" class="text-secondary hover:text-gold transition-colors">Testimonials</a>
                <a href="faq.html" class="text-secondary hover:text-gold transition-colors">FAQ</a>
                <a href="contact.html" class="text-secondary hover:text-gold transition-colors">Contact</a>
            </nav>
            
            <!-- CTA Button -->
            <div class="hidden md:flex">
                <a href="booking.html" class="bg-secondary text-white px-6 py-3 font-medium hover:bg-gold transition-colors">
                    Book Now
                </a>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-secondary">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
        <div class="px-4 py-4 space-y-3">
            <a href="index.html" class="block py-2 text-secondary hover:text-gold">Home</a>
            <a href="about.html" class="block py-2 text-secondary hover:text-gold">About</a>
            <a href="services.html" class="block py-2 text-secondary hover:text-gold">Services</a>
            <a href="portfolio.html" class="block py-2 text-secondary hover:text-gold">Portfolio</a>
            <a href="testimonials.html" class="block py-2 text-secondary hover:text-gold">Testimonials</a>
            <a href="faq.html" class="block py-2 text-secondary hover:text-gold">FAQ</a>
            <a href="contact.html" class="block py-2 text-secondary hover:text-gold">Contact</a>
            <a href="booking.html" class="block py-3 bg-secondary text-white text-center font-medium hover:bg-gold">Book Now</a>
        </div>
    </div>
</header>
```

#### 2. Footer Component
```html
<footer class="bg-secondary text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <!-- Company Info -->
            <div class="col-span-1 md:col-span-2">
                <h3 class="font-display text-2xl font-bold mb-4">
                    HERKINX <span class="text-gold">EVENTS</span>
                </h3>
                <p class="text-gray-300 mb-6 max-w-md">
                    Transforming ordinary venues into extraordinary experiences. 
                    Luxury in every detail.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-300 hover:text-gold transition-colors">
                        <i class="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-gold transition-colors">
                        <i class="fab fa-facebook text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-gold transition-colors">
                        <i class="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-gold transition-colors">
                        <i class="fab fa-pinterest text-xl"></i>
                    </a>
                </div>
            </div>
            
            <!-- Quick Links -->
            <div>
                <h4 class="font-display text-lg font-semibold mb-4">Quick Links</h4>
                <ul class="space-y-2">
                    <li><a href="about.html" class="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
                    <li><a href="services.html" class="text-gray-300 hover:text-gold transition-colors">Services</a></li>
                    <li><a href="portfolio.html" class="text-gray-300 hover:text-gold transition-colors">Portfolio</a></li>
                    <li><a href="testimonials.html" class="text-gray-300 hover:text-gold transition-colors">Testimonials</a></li>
                    <li><a href="faq.html" class="text-gray-300 hover:text-gold transition-colors">FAQ</a></li>
                </ul>
            </div>
            
            <!-- Contact Info -->
            <div>
                <h4 class="font-display text-lg font-semibold mb-4">Contact Us</h4>
                <ul class="space-y-3">
                    <li class="flex items-center space-x-3">
                        <i class="fas fa-map-marker-alt text-gold"></i>
                        <span class="text-gray-300">Lagos, Nigeria</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <i class="fas fa-phone text-gold"></i>
                        <span class="text-gray-300">+234 801 234 5678</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <i class="fas fa-envelope text-gold"></i>
                        <span class="text-gray-300">info@herkinevents.com</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-700 mt-12 pt-8 text-center">
            <p class="text-gray-400">
                &copy; 2024 Herkinx Events. All rights reserved. | 
                <span class="text-gold">Luxury In Every Detail</span>
            </p>
        </div>
    </div>
</footer>
```

#### 3. Chat Widget Placeholder
```html
<div id="chat-widget" class="fixed bottom-6 right-6 z-50">
    <!-- Chat Button -->
    <button id="chat-button" class="bg-secondary text-white w-16 h-16 rounded-full shadow-lg hover:bg-gold transition-colors flex items-center justify-center">
        <i class="fas fa-comments text-2xl"></i>
    </button>
    
    <!-- Chat Window -->
    <div id="chat-window" class="hidden absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border">
        <!-- Chat Header -->
        <div class="bg-secondary text-white p-4 rounded-t-lg">
            <div class="flex justify-between items-center">
                <h4 class="font-display font-semibold">Live Chat</h4>
                <button id="close-chat" class="text-gray-300 hover:text-white">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <p class="text-sm text-gray-300">We typically reply within minutes</p>
        </div>
        
        <!-- Chat Messages -->
        <div id="chat-messages" class="h-64 overflow-y-auto p-4 space-y-4">
            <div class="flex items-start space-x-2">
                <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <i class="fas fa-bot text-white text-sm"></i>
                </div>
                <div class="bg-accent rounded-lg p-3 max-w-xs">
                    <p class="text-sm">Hello! How can we help you today?</p>
                </div>
            </div>
        </div>
        
        <!-- Chat Input -->
        <div class="p-4 border-t">
            <div class="flex space-x-2">
                <input type="text" id="chat-input" placeholder="Type your message..." class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-gold">
                <button id="send-message" class="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-gold transition-colors">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>
</div>
```

### Page Implementation

#### 1. Home Page Hero Section
```html
<section class="relative h-screen flex items-center justify-center">
    <!-- Background Image/Video -->
    <div class="absolute inset-0 bg-black/40 z-10"></div>
    <div class="absolute inset-0">
        <img src="assets/images/hero/hero-1.jpg" alt="Luxury Event Decoration" class="w-full h-full object-cover">
    </div>
    
    <!-- Content -->
    <div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 class="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Luxury In Every <span class="text-gold">Detail</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transforming ordinary venues into extraordinary experiences. 
            Premium event decoration for your most important moments.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="booking.html" class="bg-gold text-white px-8 py-4 font-semibold hover:bg-yellow-600 transition-colors">
                Book Your Event
            </a>
            <a href="portfolio.html" class="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-secondary transition-colors">
                View Our Work
            </a>
        </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div class="animate-bounce">
            <i class="fas fa-chevron-down text-white text-2xl"></i>
        </div>
    </div>
</section>
```

#### 2. Service Card Component
```html
<div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
    <div class="relative h-64 overflow-hidden">
        <img src="assets/images/services/wedding.jpg" alt="Wedding Decoration" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
    </div>
    <div class="p-6">
        <h3 class="font-display text-xl font-semibold mb-2">Wedding Decoration</h3>
        <p class="text-gray-600 mb-4">Creating magical moments for your special day with elegant and sophisticated decoration.</p>
        <a href="services.html#wedding" class="text-gold font-semibold hover:text-yellow-600 transition-colors inline-flex items-center">
            Learn More <i class="fas fa-arrow-right ml-2"></i>
        </a>
    </div>
</div>
```

#### 3. Portfolio Item Component
```html
<div class="portfolio-item relative group cursor-pointer" data-category="wedding">
    <div class="relative h-80 overflow-hidden">
        <img src="assets/images/portfolio/wedding-001.jpg" alt="Wedding Decoration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex items-center justify-center">
            <div class="text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h4 class="font-display text-xl text-white font-semibold mb-2">Elegant Wedding</h4>
                <p class="text-gray-200 mb-4">Grand Hotel, Lagos</p>
                <button class="text-white border-2 border-white px-6 py-2 hover:bg-white hover:text-secondary transition-colors">
                    View Details
                </button>
            </div>
        </div>
    </div>
</div>
```

#### 4. Booking Form Component
```html
<form id="booking-form" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Full Name -->
        <div>
            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input type="text" id="fullName" name="fullName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
        </div>
        
        <!-- Phone Number -->
        <div>
            <label for="phoneNumber" class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
        </div>
        
        <!-- Email -->
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
        </div>
        
        <!-- Event Type -->
        <div>
            <label for="eventType" class="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
            <select id="eventType" name="eventType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="traditional-marriage">Traditional Marriage</option>
                <option value="birthday">Birthday</option>
                <option value="proposal">Proposal</option>
                <option value="engagement">Engagement</option>
                <option value="bridal-shower">Bridal Shower</option>
                <option value="baby-shower">Baby Shower</option>
                <option value="anniversary">Anniversary</option>
                <option value="graduation">Graduation</option>
                <option value="corporate">Corporate Event</option>
                <option value="church">Church Event</option>
                <option value="other">Other</option>
            </select>
        </div>
        
        <!-- Event Date -->
        <div>
            <label for="eventDate" class="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
            <input type="date" id="eventDate" name="eventDate" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
        </div>
        
        <!-- Venue -->
        <div>
            <label for="venue" class="block text-sm font-medium text-gray-700 mb-2">Venue</label>
            <input type="text" id="venue" name="venue" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
        </div>
        
        <!-- Guest Count -->
        <div>
            <label for="guestCount" class="block text-sm font-medium text-gray-700 mb-2">Guest Count</label>
            <input type="number" id="guestCount" name="guestCount" min="1" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
        </div>
        
        <!-- Budget -->
        <div>
            <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
            <select id="budget" name="budget" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
                <option value="">Select Budget Range</option>
                <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                <option value="1m-2m">₦1,000,000 - ₦2,000,000</option>
                <option value="2m-5m">₦2,000,000 - ₦5,000,000</option>
                <option value="5m-10m">₦5,000,000 - ₦10,000,000</option>
                <option value="10m+">₦10,000,000+</option>
            </select>
        </div>
    </div>
    
    <!-- Additional Notes -->
    <div>
        <label for="additionalNotes" class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
        <textarea id="additionalNotes" name="additionalNotes" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="Tell us more about your event..."></textarea>
    </div>
    
    <!-- Submit Button -->
    <div class="text-center">
        <button type="submit" class="bg-secondary text-white px-12 py-4 font-semibold hover:bg-gold transition-colors">
            Submit Booking Request
        </button>
    </div>
    
    <!-- Demo Notice -->
    <p class="text-center text-gray-500 text-sm mt-4">
        <i class="fas fa-info-circle mr-2"></i>
        This is a demo mode. In production, this will send notifications via Telegram.
    </p>
</form>
```

### Animation Implementation

#### 1. GSAP Animations (js/animations.js)
```javascript
// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from('.hero-content', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
});

// Scroll Animations
gsap.utils.toArray('.animate-on-scroll').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
});

// Text Reveal Animation
gsap.utils.toArray('.text-reveal').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
});

// Counter Animation
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Initialize counters when they come into view
document.querySelectorAll('.counter').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    ScrollTrigger.create({
        trigger: counter,
        start: 'top 80%',
        onEnter: () => animateCounter(counter, target)
    });
});
```

#### 2. Main JavaScript (js/main.js)
```javascript
// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});

// Form Validation
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Demo mode - show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-2xl z-50 text-center';
        successMessage.innerHTML = `
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-check text-green-500 text-2xl"></i>
            </div>
            <h3 class="font-display text-2xl font-bold mb-2">Booking Request Received!</h3>
            <p class="text-gray-600 mb-6">Thank you for your interest. We will contact you within 24 hours.</p>
            <p class="text-sm text-gray-500 mb-4">Demo Mode - In production, this will send notifications via Telegram</p>
            <button onclick="this.parentElement.remove()" class="bg-secondary text-white px-6 py-2 hover:bg-gold transition-colors">
                Close
            </button>
        `;
        document.body.appendChild(successMessage);
        
        // Reset form
        bookingForm.reset();
    });
}
```

#### 3. Chat Widget (js/chat.js)
```javascript
// Chat Widget Functionality
const chatButton = document.getElementById('chat-button');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendMessage = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

// Toggle Chat Window
chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
});

// Close Chat Window
closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
});

// Send Message
sendMessage.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'flex items-start space-x-2 justify-end';
    userMessage.innerHTML = `
        <div class="bg-secondary text-white rounded-lg p-3 max-w-xs">
            <p class="text-sm">${message}</p>
        </div>
        <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <i class="fas fa-user text-gray-600 text-sm"></i>
        </div>
    `;
    chatMessages.appendChild(userMessage);
    
    // Clear input
    chatInput.value = '';
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Demo response
    setTimeout(() => {
        const demoResponse = document.createElement('div');
        demoResponse.className = 'flex items-start space-x-2';
        demoResponse.innerHTML = `
            <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <i class="fas fa-bot text-white text-sm"></i>
            </div>
            <div class="bg-accent rounded-lg p-3 max-w-xs">
                <p class="text-sm">Demo Mode — Live chat will be activated after deployment.</p>
            </div>
        `;
        chatMessages.appendChild(demoResponse);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}
```

### Portfolio Filtering (js/portfolio.js)
```javascript
// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                gsap.from(item, {
                    duration: 0.5,
                    opacity: 0,
                    y: 20,
                    ease: 'power2.out'
                });
            } else {
                item.style.display = 'none';
            }
        });
    });
});
```

### CSS Custom Styles (css/styles.css)
```css
/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #d4af37;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #b8960c;
}

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}

/* Custom Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Portfolio Filter Buttons */
.filter-button.active {
    background-color: #000000;
    color: #ffffff;
}

/* Chat Widget Animations */
#chat-window {
    transition: all 0.3s ease;
}

#chat-window.hidden {
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
}

/* Form Focus States */
input:focus, select:focus, textarea:focus {
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

/* Button Hover Effects */
.btn-luxury {
    position: relative;
    overflow: hidden;
}

.btn-luxury::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
}

.btn-luxury:hover::after {
    left: 100%;
}

/* Image Hover Effects */
.img-luxury {
    transition: transform 0.7s ease;
}

.img-luxury:hover {
    transform: scale(1.05);
}

/* Text Gradient */
.text-gradient {
    background: linear-gradient(135deg, #d4af37 0%, #b8960c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Responsive Design Implementation

#### Mobile-First Approach
```css
/* Base styles (mobile) */
.container {
    padding: 1rem;
}

/* Tablet */
@media (min-width: 640px) {
    .container {
        padding: 2rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        padding: 4rem;
    }
}
```

#### Tailwind Responsive Classes
```html
<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Content -->
</div>

<!-- Responsive Typography -->
<h1 class="text-3xl md:text-5xl lg:text-7xl font-bold">
    Responsive Heading
</h1>

<!-- Responsive Spacing -->
<section class="py-8 md:py-16 lg:py-24">
    <!-- Content -->
</section>
```

### Performance Optimization

#### Image Optimization
```html
<!-- Lazy Loading -->
<img src="image.jpg" alt="Description" loading="lazy" class="w-full h-auto">

<!-- Responsive Images -->
<img src="image-small.jpg" 
     srcset="image-small.jpg 400w, 
             image-medium.jpg 800w, 
             image-large.jpg 1200w"
     sizes="(max-width: 400px) 400px, 
            (max-width: 800px) 800px, 
            1200px"
     alt="Description"
     class="w-full h-auto">
```

#### CSS Optimization
```css
/* Critical CSS */
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Non-critical CSS loaded async */
@media print {
    .no-print {
        display: none;
    }
}
```

#### JavaScript Optimization
```javascript
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Lazy load images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
});
```

### Deployment Guide

#### Static Hosting Options
1. **Netlify**
   - Connect GitHub repository
   - Build command: (none needed)
   - Publish directory: `/`

2. **Vercel**
   - Import project
   - Framework preset: Other
   - Build command: (none needed)
   - Output directory: `/`

3. **Cloudflare Pages**
   - Connect GitHub repository
   - Build command: (none needed)
   - Build output directory: `/`

4. **GitHub Pages**
   - Enable GitHub Pages
   - Source: main branch

#### Custom Domain Setup
1. **Purchase domain**
2. **Configure DNS**
   - Add CNAME record
   - Point to hosting provider
3. **Enable SSL**
   - Let's Encrypt (free)
   - Cloudflare SSL

#### Performance Monitoring
```javascript
// Google Analytics
gtag('config', 'GA_MEASUREMENT_ID');

// Page Speed Insights
// https://pagespeed.web.dev/

// Lighthouse
// Run in Chrome DevTools
```

### Future Implementation Notes

#### Backend Integration Preparation
```javascript
// API service layer (future)
const API = {
    baseURL: 'https://api.herkinevents.com/v1',
    
    async request(endpoint, options = {}) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        return response.json();
    },
    
    async createBooking(data) {
        return this.request('/bookings', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    
    async sendMessage(data) {
        return this.request('/chat/messages', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
};
```

#### Component Architecture for Future Features
```javascript
// Chat system (future)
class ChatSystem {
    constructor() {
        this.ws = null;
        this.conversationId = null;
    }
    
    connect() {
        this.ws = new WebSocket('wss://api.herkinevents.com/ws');
        this.ws.onmessage = this.handleMessage.bind(this);
    }
    
    sendMessage(message) {
        this.ws.send(JSON.stringify({
            type: 'message',
            conversationId: this.conversationId,
            message: message
        }));
    }
    
    handleMessage(event) {
        const data = JSON.parse(event.data);
        // Update UI with new message
    }
}
```

### Testing Checklist

#### Functional Testing
- [ ] All links work correctly
- [ ] Form validation works
- [ ] Mobile menu toggles
- [ ] Chat widget opens/closes
- [ ] Portfolio filtering works
- [ ] Animations play correctly

#### Responsive Testing
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px - 1024px)
- [ ] Large desktop (1025px+)

#### Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Images load lazily
- [ ] Animations run at 60fps
- [ ] No layout shifts

#### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Alt text provided

#### Cross-browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers