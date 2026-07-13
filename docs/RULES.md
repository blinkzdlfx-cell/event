# RULES - Herkinx Events Website

## Development Rules

### Code Quality
1. **Never break responsiveness** - All layouts must work on mobile, tablet, and desktop
2. **Never sacrifice performance** - Optimize for fast loading, avoid unnecessary effects
3. **Keep code modular** - Separate concerns, reusable components
4. **Comment complex logic** - Document non-obvious code
5. **Maintain clean folder structure** - Organized file hierarchy

### Design Principles
1. **Luxury first** - Every design decision must reinforce elegance
2. **Minimal approach** - Less is more, avoid clutter
3. **Consistent typography** - Use defined font hierarchy
4. **Color discipline** - Stick to white, black, light grey, and sparing gold
5. **White space** - Generous spacing for premium feel

### Animation Rules
1. **GSAP only** - No other animation libraries
2. **Elegant animations** - Smooth, professional transitions
3. **Purposeful motion** - Every animation must enhance experience
4. **Avoid distraction** - No flashy or distracting effects
5. **Performance aware** - Optimize animations for smooth 60fps

### File Naming
1. **Lowercase with hyphens** - `about.html`, `portfolio.html`
2. **Descriptive names** - Clear file purposes
3. **Consistent patterns** - Same naming convention throughout

### HTML Standards
1. **Semantic markup** - Use proper HTML5 elements
2. **Accessibility** - ARIA labels, alt text, keyboard navigation
3. **SEO friendly** - Meta tags, structured data
4. **Valid HTML** - W3C compliant markup

### CSS Standards
1. **Tailwind CSS** - Utility-first approach
2. **Custom styles only when necessary** - Prefer Tailwind utilities
3. **Responsive design** - Mobile-first approach
4. **Consistent spacing** - Use Tailwind spacing scale

### JavaScript Standards
1. **ES6+ features** - Modern JavaScript syntax
2. **No framework dependencies** - Vanilla JavaScript only
3. **Modular code** - Separate files for different concerns
4. **Error handling** - Graceful error management
5. **Performance** - Debounce scroll events, optimize loops

### Image Guidelines
1. **Optimized images** - Compressed for web
2. **Lazy loading** - Load images on demand
3. **Alt text** - Descriptive alternative text
4. **Responsive images** - Multiple sizes for different devices

### Documentation
1. **Update documentation** - Keep all docs current
2. **Document changes** - Update relevant files
3. **Clear README** - Project setup instructions
4. **Code comments** - Explain complex logic

## Business Rules

### Brand Voice
1. **Professional** - Maintain luxury brand tone
2. **Elegant** - Sophisticated language
3. **Trustworthy** - Build confidence
4. **Creative** - Showcase innovation

### Content Rules
1. **No placeholder text** - Use realistic content
2. **Professional photography** - High-quality images
3. **Accurate information** - Realistic business details
4. **Consistent messaging** - Unified brand voice

### User Experience
1. **Intuitive navigation** - Easy to find information
2. **Clear calls-to-action** - Prominent booking buttons
3. **Fast interactions** - Minimal wait times
4. **Mobile优先** - Mobile experience first

## Future Integration Rules

### Backend Integration
1. **API-first design** - Prepare for backend integration
2. **Modular architecture** - Easy to add features
3. **Error handling** - Graceful degradation
4. **Security** - Input validation, XSS prevention

### Telegram Integration
1. **Webhook ready** - Prepare endpoints
2. **Message formatting** - Structured data
3. **Error handling** - Retry logic
4. **Rate limiting** - Respect API limits

### Chat System
1. **Real-time ready** - WebSocket architecture
2. **Message storage** - Temporary conversation storage
3. **Expiration** - Auto-delete old messages
4. **Scalability** - Handle multiple conversations