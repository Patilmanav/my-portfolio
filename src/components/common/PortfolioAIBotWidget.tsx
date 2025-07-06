"use client";
import { useState, useEffect, useRef } from "react";

// Predefined questions and answers
const faqData = [
  {
    question: "What are Manav&apos;s top skills?",
    answer: "Manav&apos;s top skills include:\n\n🤖 **RPA & Automation:** Python, Selenium, Playwright, BeautifulSoup\n🧪 **Test Automation:** PyTest, Appium, CI/CD integration\n🌐 **Web Development:** React, Next.js, FastAPI, Django\n💾 **Databases:** MongoDB, SQLite, MySQL\n☁️ **Cloud & DevOps:** AWS, Docker, Git, GitHub\n\nHe specializes in building intelligent automation solutions and scalable web applications."
  },
  {
    question: "Tell me about his projects",
    answer: "Here are Manav&apos;s key projects:\n\n🔐 **FaceVault:** Secure face recognition web app (Next.js, MongoDB)\n🤖 **RPA Workflow Automation:** Business process automation (Python, Selenium)\n📊 **Web Scraping Platform:** Large-scale data extraction (BeautifulSoup, Selenium)\n🧪 **Test Automation Framework:** End-to-end testing (PyTest, Selenium)\n🔌 **API Automation Toolkit:** Workflow integration (FastAPI)\n📈 **Data Processing Pipeline:** ETL operations (Python)\n📄 **OCR Automation System:** Document processing (Tesseract)\n\nAll projects focus on automation, efficiency, and intelligent solutions."
  },
  {
    question: "What&apos;s his work experience?",
    answer: "Manav&apos;s work experience:\n\n🏢 **RPA Developer & Automation Engineer** at Tech Vyassa Pvt Ltd (Current)\n• Developed 10+ RPA solutions using Python, Selenium, Playwright\n• Created intelligent web scraping systems with anti-detection\n• Built test automation frameworks reducing manual testing by 80%\n• Implemented data processing pipelines handling 100K+ records daily\n\n🏢 **Python Developer & Automation Specialist** at Technical VPN Pvt Ltd\n• Developed automated web scraping solutions\n• Built REST APIs using FastAPI and Django\n• Created OCR automation systems\n• Implemented CI/CD pipelines"
  },
  {
    question: "What technologies does he use?",
    answer: "Manav works with these technologies:\n\n🐍 **Programming:** Python, JavaScript, TypeScript, Java\n🤖 **Automation:** Selenium, Playwright, BeautifulSoup, lxml\n🧪 **Testing:** PyTest, Appium, UnitTest\n🌐 **Web:** React, Next.js, FastAPI, Django, Flask\n💾 **Databases:** MongoDB, SQLite, MySQL, Firebase\n☁️ **Cloud:** AWS, Docker, Terraform, Kubernetes\n🛠️ **Tools:** Git, GitHub, Jenkins, Ubuntu\n\nHe&apos;s particularly strong in Python automation and modern web development."
  },
  {
    question: "How can I contact Manav?",
    answer: "You can contact Manav through:\n\n📧 **Email:** Check his portfolio for contact details\n💼 **LinkedIn:** Connect with him on LinkedIn\n🐙 **GitHub:** Follow his projects on GitHub\n💬 **Social Media:** Check his social links in the portfolio\n\nHe&apos;s always open to discussing automation projects, RPA opportunities, and collaboration on interesting tech challenges!"
  }
];

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function PortfolioAIBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-open after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      addBotMessage("Hi! 👋 I&apos;m Manav&apos;s AI assistant. Here are some questions you can ask me:");
      setTimeout(() => {
        addBotMessage("💡 **Quick Questions:**\n\n1. What are Manav&apos;s top skills?\n2. Tell me about his projects\n3. What&apos;s his work experience?\n4. What technologies does he use?\n5. How can I contact Manav?\n\nJust type any of these questions or ask something similar!");
      }, 1000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();
      
      // Check for numbered questions (1, 2, 3, 4, 5)
      const numberMatch = lowerMessage.match(/^(\d+)\.?$/);
      if (numberMatch) {
        const questionNumber = parseInt(numberMatch[1]);
        if (questionNumber >= 1 && questionNumber <= faqData.length) {
          addBotMessage(faqData[questionNumber - 1].answer);
          setIsTyping(false);
          return;
        }
      }
      
      // Check if the message matches any FAQ keywords
      let matchedIndex = -1;
      
      // Check for exact keyword matches
      if (lowerMessage.includes('skill') || lowerMessage.includes('ability') || lowerMessage.includes('expertise')) {
        matchedIndex = 0; // Skills question
      } else if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
        matchedIndex = 1; // Projects question
      } else if (lowerMessage.includes('experience') || lowerMessage.includes('job') || lowerMessage.includes('work history') || lowerMessage.includes('career')) {
        matchedIndex = 2; // Experience question
      } else if (lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('stack') || lowerMessage.includes('tools')) {
        matchedIndex = 3; // Technologies question
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('linkedin')) {
        matchedIndex = 4; // Contact question
      }
      
      // Also check if the message contains words from the FAQ questions
      if (matchedIndex === -1) {
        for (let i = 0; i < faqData.length; i++) {
          const questionWords = faqData[i].question.toLowerCase().split(' ');
          const hasMatchingWords = questionWords.some(word => 
            word.length > 3 && lowerMessage.includes(word)
          );
          if (hasMatchingWords) {
            matchedIndex = i;
            break;
          }
        }
      }

      if (matchedIndex !== -1) {
        addBotMessage(faqData[matchedIndex].answer);
      } else {
        addBotMessage("I&apos;m not sure about that. Try asking about Manav&apos;s skills, projects, experience, technologies, or how to contact him!");
      }
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

 const formatMessage = (text: string) => {
  return text.split('\n').map((line, index) => (
    <div key={index} style={{ marginBottom: line.includes('**') ? '8px' : '4px' }}>
      {line.includes('**') ? (
        <strong style={{ color: 'var(--primaryColor)' }}>
          {line.replace(/\*\*/g, '')}
        </strong>
      ) : (
        line
      )}
    </div>
  ));
};


  return (
    <>
      {/* Chat Launcher Button */}
      <div 
        className="fixed bottom-6 left-6 z-50 cursor-pointer transition-all duration-300 hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
        title="Ask Manav&apos;s AI!"
      >
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-r from-[var(--primaryColor)] to-[var(--secondaryColor)] rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-[var(--primaryColor)] rounded-full animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[var(--primaryColor)] to-[var(--secondaryColor)] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--primaryColor)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Manav&apos;s AI Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything!</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
  key={message.id}
  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
>
  <div
    className={`max-w-xs px-4 py-2 rounded-lg ${
      message.isUser
        ? 'bg-[var(--primaryColor)] text-white'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
    }`}
  >
    <div className="text-sm whitespace-pre-line">
      {formatMessage(message.text)}
    </div>
    <div className={`text-xs mt-1 ${message.isUser ? 'text-gray-200' : 'text-gray-500'}`}>
      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </div>
  </div>
</div>
))}

{/* Typing indicator */}
{isTyping && (
  <div className="flex justify-start">
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: '0.1s' }}
        ></div>
        <div
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: '0.2s' }}
        ></div>
      </div>
    </div>
  </div>
)}

<div ref={messagesEndRef} />
</div>

{/* Input */}
<div className="p-4 border-t border-gray-200 dark:border-gray-700">
  <div className="flex space-x-2">
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Type your question..."
      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      disabled={isTyping}
    />
    <button
      onClick={handleSendMessage}
      disabled={!inputValue.trim() || isTyping}
      className="px-4 py-2 bg-[var(--primaryColor)] text-white rounded-lg hover:bg-[var(--primaryColor)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </button>
  </div>
</div>
        </div>
      )}
    </>
  );
} 