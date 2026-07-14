# API - Herkinx Events Website

## Current API (Demo Version)

### No Backend API
This is a demo version with no backend functionality. All interactions are handled client-side.

## Future API (Post-Approval)

### Base URL
```
https://api.herkinevents.com/v1
```

### Authentication
```http
Authorization: Bearer <token>
Content-Type: application/json
```

## Endpoints

### 1. Booking API

#### Create Booking
```http
POST /bookings
```

**Request Body:**
```json
{
  "fullName": "John Doe",
  "phoneNumber": "+234 801 234 5678",
  "email": "john@example.com",
  "eventType": "wedding",
  "eventDate": "2024-12-25",
  "venue": "Grand Ballroom, Lagos",
  "guestCount": 200,
  "budget": "₦2,000,000",
  "additionalNotes": "Outdoor ceremony preferred"
}
```

**Response:**
```json
{
  "success": true,
  "bookingId": "BK-2024-001",
  "message": "Booking request received",
  "status": "pending",
  "estimatedResponse": "24 hours"
}
```

#### Get Booking Status
```http
GET /bookings/{bookingId}
```

**Response:**
```json
{
  "bookingId": "BK-2024-001",
  "status": "confirmed",
  "eventDate": "2024-12-25",
  "assignedTo": "Team A",
  "notes": "Confirmed via Telegram"
}
```

### 2. Chat API

#### Send Message
```http
POST /chat/messages
```

**Request Body:**
```json
{
  "conversationId": "conv-123",
  "message": "Hello, I need information about wedding decoration",
  "sender": "visitor"
}
```

**Response:**
```json
{
  "messageId": "msg-456",
  "timestamp": "2024-01-15T10:30:00Z",
  "status": "sent"
}
```

#### Get Conversation
```http
GET /chat/conversations/{conversationId}
```

**Response:**
```json
{
  "conversationId": "conv-123",
  "messages": [
    {
      "messageId": "msg-456",
      "message": "Hello, I need information about wedding decoration",
      "sender": "visitor",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "messageId": "msg-457",
      "message": "Hello! Thank you for your interest. How can we help?",
      "sender": "agent",
      "timestamp": "2024-01-15T10:31:00Z"
    }
  ],
  "status": "active",
  "expiresAt": "2024-01-22T10:30:00Z"
}
```

### 3. Contact API

#### Send Contact Message
```http
POST /contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Wedding Inquiry",
  "message": "I would like to know more about your wedding packages"
}
```

**Response:**
```json
{
  "success": true,
  "messageId": "contact-789",
  "message": "Message sent successfully"
}
```

### 4. Portfolio API

#### Get Portfolio Items
```http
GET /portfolio?category=wedding&limit=12
```

**Response:**
```json
{
  "items": [
    {
      "id": "portfolio-001",
      "title": "Elegant Wedding at Grand Hotel",
      "category": "wedding",
      "imageUrl": "https://herkinevents.com/images/portfolio/wedding-001.jpg",
      "description": "A beautiful wedding decoration",
      "date": "2024-01-10"
    }
  ],
  "total": 50,
  "page": 1,
  "limit": 12
}
```

### 5. Testimonials API

#### Get Testimonials
```http
GET /testimonials?limit=10
```

**Response:**
```json
{
  "testimonials": [
    {
      "id": "test-001",
      "clientName": "Sarah Johnson",
      "eventType": "wedding",
      "rating": 5,
      "comment": "Herkinx Events made our wedding absolutely perfect!",
      "date": "2024-01-05"
    }
  ],
  "total": 25
}
```

## Chat Widget Integration

The chat widget (`js/chat.js`) is designed for easy Telegram bot or custom backend integration.

### Configuration (`ChatConfig` at top of chat.js)

```javascript
const ChatConfig = {
  mode: 'demo',                    // 'demo' | 'production'
  endpoint: '',                    // Custom backend URL
  telegramBotToken: '',            // Telegram bot token
  telegramChatId: '',              // Telegram chat ID
  botDelay: 1500,                  // Typing delay in ms (demo only)
};
```

### Step-by-step: Switch to Production

1. **Set mode to `'production'`** — this enables `sendToBackend()` instead of the demo `getBotResponse()`.

2. **Choose integration method:**

   **Option A — Telegram Bot (direct from browser)**
   ```javascript
   ChatConfig.mode = 'production';
   ChatConfig.telegramBotToken = '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';
   ChatConfig.telegramChatId = '-1001234567890';
   ```
   Messages will be sent directly to Telegram via the Bot API. No server needed.

   **Option B — Custom Backend**
   ```javascript
   ChatConfig.mode = 'production';
   ChatConfig.endpoint = 'https://api.herkinevents.com/v1/chat';
   ```
   The `sendToBackend()` function POSTs to your endpoint and expects a JSON response with a `reply` field.

3. **Optional: Customize `sendToBackend()`** — Open `js/chat.js` and edit the function to match your API contract.

### Demo Mode (Default)

In demo mode (`ChatConfig.mode = 'demo'`), the widget simulates replies using keyword matching in `getBotResponse()`. No network calls are made.

## Webhook Integration

### Telegram Bot Webhook
```http
POST /webhooks/telegram
```

**Request Body:**
```json
{
  "update_id": 123456789,
  "message": {
    "chat": {
      "id": 123456789
    },
    "text": "New booking: John Doe, Wedding, Dec 25"
  }
}
```

### Cloudflare Workers Integration
```javascript
// Example webhook handler
export default {
  async fetch(request, env) {
    const data = await request.json();
    
    // Process booking
    const booking = await env.BOOKINGS_KV.put(
      `booking-${data.bookingId}`,
      JSON.stringify(data)
    );
    
    // Send to Telegram
    await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: `New booking: ${data.fullName}, ${data.eventType}`
      })
    });
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

## Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email address",
    "field": "email"
  }
}
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

### API Rate Limits
- **Bookings**: 10 requests per minute
- **Chat**: 30 messages per minute
- **Contact**: 5 requests per minute
- **Portfolio**: 60 requests per minute

### Headers
```http
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 9
X-RateLimit-Reset: 1642272000
```

## Data Storage (Future)

### Cloudflare KV
- **Bookings**: Temporary storage (30 days)
- **Chat Messages**: Temporary storage (5-7 days)
- **Contact Messages**: Permanent storage

### Cloudflare D1 (If needed)
- **Users**: User accounts
- **Events**: Event management
- **Analytics**: Usage statistics

## Security

### Input Validation
```javascript
function validateBooking(data) {
  const errors = [];
  if (!data.fullName) errors.push('Full name is required');
  if (!data.email) errors.push('Email is required');
  if (!data.phoneNumber) errors.push('Phone number is required');
  if (!data.eventType) errors.push('Event type is required');
  if (!data.eventDate) errors.push('Event date is required');
  return errors;
}
```

### XSS Prevention
```javascript
function sanitizeInput(input) {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}
```

### CSRF Protection
```javascript
// Future implementation
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
```

## Monitoring

### Error Tracking
```javascript
// Sentry integration (future)
Sentry.init({
  dsn: "your-dsn-here",
  environment: "production"
});
```

### Analytics
```javascript
// Google Analytics (future)
gtag('config', 'GA_MEASUREMENT_ID');
```

## Deployment

### Cloudflare Workers
```bash
# Deploy worker
wrangler deploy

# Set secrets
wrangler secret put TELEGRAM_BOT_TOKEN
wrangler secret put TELEGRAM_CHAT_ID
```

### Environment Variables
```bash
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
API_KEY=your_api_key
```