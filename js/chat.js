// Chat Widget for Herkinx Events

function initChatWidget() {
  const chatButton = document.getElementById('chat-button');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  if (!chatButton || !chatWindow) return;

  // Toggle chat window
  chatButton.addEventListener('click', () => {
    const isOpen = chatWindow.classList.toggle('open');
    chatButton.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      chatInput.focus();
    }
  });

  // Close chat
  chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('open');
    chatButton.setAttribute('aria-expanded', 'false');
  });

  // Send message on button click
  chatSend.addEventListener('click', sendMessage);

  // Send message on Enter key
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Simulate bot response after delay
    setTimeout(() => {
      hideTypingIndicator();
      addBotResponse(message);
    }, 1500);
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = `
      <div class="message-bubble">${escapeHtml(text)}</div>
      <div class="message-time">${getCurrentTime()}</div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  function addBotResponse(userMessage) {
    // Demo mode responses
    const responses = {
      default: "Demo Mode — Live chat will be activated after deployment.",
      hello: "Hello! How can I help you with your event today?",
      booking: "To book an event, please fill out our booking form or call us at +234 801 234 5678.",
      price: "Our pricing varies based on event type and requirements. Please check our services page or contact us for a custom quote.",
      wedding: "We specialize in luxury wedding decorations! Check our portfolio for inspiration.",
      thanks: "You're welcome! Is there anything else I can help you with?"
    };

    // Simple keyword matching for demo
    const lowerMessage = userMessage.toLowerCase();
    let response = responses.default;

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      response = responses.hello;
    } else if (lowerMessage.includes('book') || lowerMessage.includes('booking')) {
      response = responses.booking;
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
      response = responses.price;
    } else if (lowerMessage.includes('wedding')) {
      response = responses.wedding;
    } else if (lowerMessage.includes('thank')) {
      response = responses.thanks;
    }

    addMessage(response, 'bot');
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
      <div class="message-bubble typing-bubble">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
  }

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Close chat when clicking outside
  document.addEventListener('click', (e) => {
    if (!chatWindow.contains(e.target) && !chatButton.contains(e.target) && chatWindow.classList.contains('open')) {
      chatWindow.classList.remove('open');
      chatButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatWidget);
} else {
  initChatWidget();
}