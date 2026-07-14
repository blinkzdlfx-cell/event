/*
 * Chat Widget — Herkinx Events
 * ==============================
 *
 * INTEGRATION GUIDE (Telegram / Backend):
 *   1. Set ChatConfig.mode to 'production' (default is 'demo')
 *   2. Set ChatConfig.endpoint to your backend API URL
 *   3. For Telegram-only: set ChatConfig.telegramBotToken and ChatConfig.telegramChatId
 *   4. Replace sendToBackend() below with your actual fetch/logic
 *   5. Replace getBotResponse() if you want server-driven replies
 *
 * The demo keyword-matching lives in getBotResponse() and can be
 * safely swapped for an API call without touching the UI logic.
 */

const ChatConfig = {
  mode: 'demo',                    // 'demo' | 'production'
  endpoint: '',                    // e.g. 'https://api.yourbackend.com/chat'
  telegramBotToken: '',            // e.g. '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11'
  telegramChatId: '',              // e.g. '-1001234567890'
  botDelay: 1500,                  // simulated typing delay in ms (demo only)
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

  /* ---- pluggable: backend call ---- */

  async function sendToBackend(userMessage) {
    showTypingIndicator();

    try {
      // -------------------------------------------------------
      // OPTION A — Telegram Bot (direct)
      // -------------------------------------------------------
      if (ChatConfig.telegramBotToken && ChatConfig.telegramChatId) {
        const url = `https://api.telegram.org/bot${ChatConfig.telegramBotToken}/sendMessage`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: ChatConfig.telegramChatId,
            text: `New chat message:\n${userMessage}`,
          }),
        });
        if (!res.ok) throw new Error('Telegram API error');
      }

      // -------------------------------------------------------
      // OPTION B — Custom backend endpoint
      // -------------------------------------------------------
      if (ChatConfig.endpoint) {
        const res = await fetch(ChatConfig.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage }),
        });
        if (res.ok) {
          const data = await res.json();
          hideTypingIndicator();
          addMessage(data.reply || 'Thank you for your message!', 'bot');
          return;
        }
      }

      // fallback if no real integration is wired up yet
      hideTypingIndicator();
      addMessage('Thank you for your message. We will get back to you shortly.', 'bot');
    } catch {
      hideTypingIndicator();
      addMessage('Sorry, something went wrong. Please try again or call us directly.', 'bot');
    }
  }

  /* ---- pluggable: demo bot response ---- */

  function getBotResponse(userMessage) {
    const kw = userMessage.toLowerCase();
    if (kw.includes('hello') || kw.includes('hi')) {
      return 'Hello! How can I help you with your event today?';
    }
    if (kw.includes('book') || kw.includes('booking')) {
      return 'To book an event, please fill out our booking form or call us at +234 801 234 5678.';
    }
    if (kw.includes('price') || kw.includes('cost') || kw.includes('budget')) {
      return 'Our pricing varies based on event type and requirements. Please check our services page or contact us for a custom quote.';
    }
    if (kw.includes('wedding')) {
      return 'We specialize in luxury wedding decorations! Check our portfolio for inspiration.';
    }
    if (kw.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    return 'Thanks for reaching out! For urgent inquiries, please call us at +234 801 234 5678.';
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
