"use client";
import { useState, useRef, useEffect } from 'react';

export const LegalChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your legal advice assistant. I can help answer general legal questions and provide information about legal processes. Please note that this is for informational purposes only and does not constitute legal advice. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateBotResponse = (userMessage) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = generateLegalResponse(userMessage);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateLegalResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('contract') || lowerMessage.includes('agreement')) {
      return "Regarding contracts, it's important to ensure all terms are clearly defined, both parties have legal capacity to enter the agreement, and there's valid consideration. Always have contracts reviewed by a qualified attorney before signing. Would you like me to explain any specific aspect of contract law?";
    }
    
    if (lowerMessage.includes('tenant') || lowerMessage.includes('landlord') || lowerMessage.includes('rent')) {
      return "Tenant rights vary by jurisdiction, but generally include the right to a habitable dwelling, privacy, and protection from discrimination. Landlords have obligations to maintain the property and follow proper eviction procedures. What specific tenant/landlord issue can I help clarify?";
    }
    
    if (lowerMessage.includes('divorce') || lowerMessage.includes('custody')) {
      return "Family law matters like divorce and custody are highly state-specific and emotionally complex. Key considerations include property division, child custody arrangements, and support obligations. I strongly recommend consulting with a family law attorney for personalized guidance. Is there a general aspect I can help explain?";
    }
    
    if (lowerMessage.includes('criminal') || lowerMessage.includes('arrested') || lowerMessage.includes('charge')) {
      return "If facing criminal charges, the most important step is to exercise your right to remain silent and request an attorney immediately. Do not speak to law enforcement without legal representation. Criminal law has serious consequences and requires professional legal counsel. Please contact a criminal defense attorney right away.";
    }
    
    if (lowerMessage.includes('small claims') || lowerMessage.includes('sue')) {
      return "Small claims court is designed for disputes involving smaller amounts of money (limits vary by state). It's typically faster and less formal than regular court. You'll need to determine if you have a valid claim, whether the court has jurisdiction, and if the defendant can pay a judgment. Would you like to know more about the small claims process?";
    }
    
    if (lowerMessage.includes('will') || lowerMessage.includes('estate') || lowerMessage.includes('inheritance')) {
      return "Estate planning is crucial for protecting your assets and ensuring your wishes are carried out. A will should be properly executed according to state law, and you may also want to consider trusts, power of attorney, and healthcare directives. What specific estate planning question do you have?";
    }
    
    return "That's an interesting legal question. Legal matters can be complex and highly dependent on specific facts and jurisdiction. For the most accurate advice, I'd recommend consulting with a qualified attorney who specializes in the relevant area of law. Is there a specific legal concept or process you'd like me to explain in general terms?";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    
    simulateBotResponse(inputText);
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-legal-blue to-legal-purple text-white p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Legal Advice Assistant</h2>
        <p className="text-sm opacity-90 font-medium">
          ⚖️ For informational purposes only - Not a substitute for professional legal advice
        </p>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] p-4 rounded-2xl relative ${
              message.sender === 'user'
                ? 'bg-legal-blue text-white rounded-br-sm shadow-lg'
                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600'
            }`}>
              <p className="mb-2 leading-relaxed">{message.text}</p>
              <span className="text-xs opacity-70 block">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="max-w-[70%] p-4 bg-white border border-gray-200 rounded-2xl rounded-bl-sm shadow-md dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing" style={{animationDelay: '0.16s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing" style={{animationDelay: '0.32s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="flex p-4 bg-white border-t border-gray-200 space-x-3 dark:bg-gray-800 dark:border-gray-700">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask a legal question..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-full outline-none text-base transition-colors focus:border-legal-blue focus:ring-4 focus:ring-legal-blue/20 disabled:bg-gray-100 disabled:cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-legal-blue"
          disabled={isTyping}
        />
        <button 
          type="submit" 
          className="px-6 py-3 bg-legal-blue text-white rounded-full font-medium cursor-pointer transition-all hover:bg-legal-blue/90 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          disabled={isTyping || !inputText.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
};
