# Herkinx Events — Luxury Event Decoration

A static marketing website for a premium event decoration company based in Lagos, Nigeria. Built with vanilla HTML, Tailwind CSS, GSAP animations, and vanilla JavaScript.

## Pages

- **Home** (`index.html`) — Hero, services preview, portfolio, testimonials, CTA
- **About** (`about.html`) — Company story, team, values
- **Services** (`services.html`) — Service categories with detailed descriptions
- **Portfolio** (`portfolio.html`) — Filterable gallery with load more
- **Testimonials** (`testimonials.html`) — Client reviews and video gallery
- **FAQ** (`faq.html`) — Accordion with search and category filtering
- **Contact** (`contact.html`) — Contact form and social links
- **Booking** (`booking.html`) — Event booking form

## Tech Stack

- HTML5 (semantic, Open Graph, JSON-LD structured data)
- Tailwind CSS 3.x (via CDN)
- Custom CSS (`css/styles.css`)
- Vanilla ES6+ JavaScript
- GSAP 3.12.2 + ScrollTrigger (via CDN)
- Font Awesome 6.4.0 (via CDN)
- Google Fonts: Playfair Display + Inter

## Getting Started

No build tools or package managers required. Open any `.html` file in a browser to view.

```bash
# Clone the repo
git clone <repo-url>

# Open in browser
start index.html
```

## Chat Widget

The chat widget supports two modes:

- **Demo mode** — keyword matching auto-replies (works offline)
- **Production mode** — forwards messages to your Telegram

To go live, open `js/chat.js` and set:

```js
telegramBotToken: 'YOUR_BOT_TOKEN',  // from @BotFather
telegramChatId: 'YOUR_CHAT_ID',      // your Telegram chat ID
mode: 'production',
```

## Contact Info

- **Phone / WhatsApp:** +234 903 505 732
- **Email:** [to be set]
- **Instagram:** [to be set]
- **Facebook:** [to be set]
- **X (Twitter):** [to be set]

## Logo

The logo is styled as a circle (`border-radius: 50%` with `object-fit: cover`) in the header and footer.

## Fixes Applied

| Area | Fix |
|------|-----|
| Form validation | Added `.error` CSS class for red borders on invalid fields |
| Success modal | `index.html` modal now uses correct `.success-modal` class |
| Portfolio load more | Button now has `id="load-more-btn"` so JS can find it |
| FAQ | GSAP calls guarded against CDN failure |
| CSS duplicate | Removed duplicate `.step-connector` rule breaking responsive layout |
| Booking page | Separated adjacent same-bg sections |
| Social links | Replaced `#` with real URLs + `aria-label` on all pages |
| Pinterest → WhatsApp | All Pinterest links replaced with WhatsApp |
| Phone number | Updated everywhere to +234 903 505 732 |
| Logo | Made circular with `border-radius: 50%` |
| Chat widget | Simplified for Telegram-only (Option A) |

## Deployment

### Cloudflare Pages

This repo is connected to Cloudflare Pages. Push to GitHub to auto-deploy:

```bash
git add .
git commit -m "your message"
git push origin main
```

Or deploy manually via the Cloudflare Dashboard → Pages → Connect Git.

## Documentation

See the `docs/` folder for PRD, architecture, tech stack, rules, progress tracking, roadmap, API specs, and implementation details.
