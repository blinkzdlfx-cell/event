/*
 * Chat Widget — Herkinx Events
 * ==============================
 *
 * SETUP (Telegram Bot — recommended):
 *   1. Get a bot token from @BotFather on Telegram
 *   2. Message your bot once, then visit:
 *      https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
 *      to find your chat_id
 *   3. Paste both below in ChatConfig
 *   4. Change mode from 'demo' to 'production'
 *
 * The demo mode uses keyword matching (getBotResponse).
 * Production mode forwards messages to your Telegram.
 */

const ChatConfig = {

  /* ---- SET THESE TWO ---- */
  telegramBotToken: '',            // from @BotFather
  telegramChatId: '',              // your chat ID (e.g. '-1001234567890')
  /* ----------------------- */

  mode: 'demo',                    // 'demo' | 'production'
  botDelay: 1500,                  // typing delay in ms (demo only)
};

function initChatWidget() {
  const chatButton = document.getElementById('chat-button');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  if (!chatButton || !chatWindow) return;

  chatButton.addEventListener('click', () => {
    const isOpen = chatWindow.classList.toggle('open');
    chatButton.setAttribute('aria-expanded', isOpen);
    if (isOpen) chatInput.focus();
  });

  chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('open');
    chatButton.setAttribute('aria-expanded', 'false');
  });

  chatSend.addEventListener('click', sendMessage);

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  document.addEventListener('click', (e) => {
    if (!chatWindow.contains(e.target) && !chatButton.contains(e.target) && chatWindow.classList.contains('open')) {
      chatWindow.classList.remove('open');
      chatButton.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---- send message flow ---- */

  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatInput.value = '';

    if (ChatConfig.mode === 'production') {
      sendToBackend(text);
    } else {
      showTypingIndicator();
      setTimeout(() => {
        hideTypingIndicator();
        const reply = getBotResponse(text);
        addMessage(reply, 'bot');
      }, ChatConfig.botDelay);
    }
  }

  /* ---- send to Telegram ---- */

  async function sendToBackend(userMessage) {
    showTypingIndicator();
    try {
      const url = `https://api.telegram.org/bot${ChatConfig.telegramBotToken}/sendMessage`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: ChatConfig.telegramChatId,
          text: `New chat message from herkinevents.com:\n\n${userMessage}`,
        }),
      });
      if (!res.ok) throw new Error('Telegram API error');
      hideTypingIndicator();
      addMessage('Thank you for your message! We will get back to you shortly.', 'bot');
    } catch {
      hideTypingIndicator();
      addMessage('Sorry, something went wrong. Please try again or WhatsApp us at +234 903 505 732.', 'bot');
    }
  }

  /* ---- pluggable: demo bot response ---- */

  function getBotResponse(userMessage) {
    const kw = userMessage.toLowerCase();
    if (kw.includes('hello') || kw.includes('hi')) {
      return 'Hello! How can I help you with your event today?';
    }
    if (kw.includes('book') || kw.includes('booking')) {
      return 'To book an event, please fill out our booking form or chat with us on WhatsApp at +234 903 505 732.';
    }
    if (kw.includes('price') || kw.includes('cost') || kw.includes('budget')) {
      return 'Our pricing varies based on event type and requirements. Please check our services page or send us a message on WhatsApp for a custom quote.';
    }
    if (kw.includes('wedding')) {
      return 'We specialize in luxury wedding decorations! Check our portfolio for inspiration or reach out on WhatsApp.';
    }
    if (kw.includes('whatsapp') || kw.includes('whats app')) {
      return 'You can reach us on WhatsApp at +234 903 505 732. We typically respond within minutes!';
    }
    if (kw.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    return 'Thanks for reaching out! For urgent inquiries, call or WhatsApp us at +234 903 505 732.';
  }

  /* ---- UI helpers ---- */

  function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `chat-message ${sender}`;
    div.innerHTML = `
      <div class="message-bubble">${escapeHtml(text)}</div>
      <div class="message-time">${getCurrentTime()}</div>
    `;
    chatMessages.appendChild(div);
    scrollToBottom();
  }

  function showTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'chat-message bot typing-indicator';
    div.id = 'typing-indicator';
    div.innerHTML = '<div class="message-bubble typing-bubble"><span></span><span></span><span></span></div>';
    chatMessages.appendChild(div);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
  }

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function escapeHtml(text) {
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatWidget);
} else {
  initChatWidget();
}
