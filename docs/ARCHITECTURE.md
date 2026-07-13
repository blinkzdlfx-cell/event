# ARCHITECTURE - Herkinx Events Website

## Project Structure

```
herkinx-events/
├── index.html                 # Home page
├── about.html                 # About page
├── services.html              # Services page
├── portfolio.html             # Portfolio/Gallery page
├── testimonials.html          # Testimonials page
├── faq.html                   # FAQ page
├── contact.html               # Contact/Booking page
├── booking.html               # Booking page (alias)
├── css/
│   └── styles.css             # Custom styles (if needed)
├── js/
│   ├── main.js                # Main JavaScript
│   ├── animations.js          # GSAP animations
│   ├── chat.js                # Chat UI placeholder
│   └── portfolio.js           # Portfolio filtering
├── assets/
│   ├── images/                # Image assets
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── portfolio/
│   │   └── team/
│   └── fonts/                 # Custom fonts (if any)
├── docs/                      # Project documentation
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── TECHSTACK.md
│   ├── RULES.md
│   ├── PROGRESS.md
│   ├── ROADMAP.md
│   ├── API.md
│   └── IMPLEMENTATION.md
└── README.md                  # Project readme
```

## Technical Architecture

### Frontend Layer
- **HTML5**: Semantic markup for SEO and accessibility
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vanilla JavaScript**: ES6+ for interactivity
- **GSAP**: Professional-grade animations

### Page Architecture
Each page follows a consistent structure:
1. **Header**: Navigation bar with logo and menu
2. **Main Content**: Page-specific sections
3. **Footer**: Contact info, links, social media

### Component Architecture
- **Header Component**: Responsive navigation with mobile menu
- **Footer Component**: Consistent footer across all pages
- **Card Components**: Service cards, portfolio items, testimonials
- **Form Components**: Booking form with validation
- **Chat Component**: Floating chat UI placeholder

### Animation Architecture
- **Scroll Animations**: GSAP ScrollTrigger for reveal effects
- **Page Transitions**: Smooth page load animations
- **Hover Effects**: Subtle interactions on buttons and cards
- **Text Reveals**: Elegant text animation on scroll
- **Counter Animations**: Statistics number counting

### Responsive Architecture
- **Mobile-first approach**: Designed for mobile, enhanced for desktop
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Flexible layouts**: CSS Grid and Flexbox for adaptive designs

## Data Flow (Demo Version)
1. User visits website
2. Browses pages with static content
3. Fills booking form
4. Receives success message (demo mode)
5. Chat placeholder responds with demo message

## Future Architecture (Post-Approval)
- **Backend**: Cloudflare Workers
- **Database**: Cloudflare KV or D1
- **Authentication**: JWT-based
- **Real-time**: WebSocket for live chat
- **Bot Integration**: Telegram Bot API
- **Storage**: Temporary conversation storage with expiration

## Performance Optimization
- **Lazy loading**: Images load on demand
- **Minification**: CSS and JavaScript minified
- **CDN**: Tailwind CSS via CDN
- **Caching**: Browser caching headers
- **Compression**: Gzip/Brotli compression

## Security Considerations
- **Input validation**: Form field validation
- **XSS prevention**: Sanitized user inputs
- **CSRF protection**: Form tokens (future)
- **HTTPS**: Secure connection required