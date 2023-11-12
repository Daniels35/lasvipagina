import React, { useState, useEffect, useRef } from 'react';

import {
  ChatContainer,
  ChatHeader,
  MessageList,
  MessageForm,
  MessageInput,
  UserMessage,
  BotMessage,
  ChatMessage,
  SendButton,
  ChatMessageContainer,
} from './TextChatBot.styles';

const TextChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const messageListRef = useRef(null);
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');
  };
 useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prevShowMessage) => !prevShowMessage);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === 'user') {
      processMessage(lastMessage.text);
    }
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  const processMessage = (message) => {
    let response;
    if (message.toLowerCase() === 'hola') {
      response = 'Hola soy el Chat Bot de PINZAS LASVI, ¿en qué te podemos ayudar?';
    } else if (message.toLowerCase() === 'como estas') {
      response = 'Muy bien, con muchas ganas de ayudarte, ¿qué quieres preguntarme?';
    } else {
      response = 'Lo siento, no entiendo esa solicitud. Por favor, intenta de nuevo.';
    }
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
    }, 1000);
  };
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
<>
    <ChatMessageContainer isChatOpen={isChatOpen}>
      {!isChatOpen && showMessage && <ChatMessage>Hola, escríbenos 👋</ChatMessage>}
    </ChatMessageContainer>
    <ChatContainer isChatOpen={isChatOpen}>
      <ChatHeader onClick={toggleChat} isChatOpen={isChatOpen}>
        {isChatOpen && 'Chat Bot Pinzas Lasvi'}
      </ChatHeader>
      {isChatOpen && (
        <>
          <MessageList ref={messageListRef}>
            {messages.map((message, index) => {
              if (message.sender === 'user') {
                return <UserMessage key={index}>{message.text}</UserMessage>;
              } else {
                return <BotMessage key={index}>{message.text}</BotMessage>;
              }
            })}
          </MessageList>
          <MessageForm onSubmit={handleMessageSubmit}>
            <MessageInput
              type="text"
              value={inputMessage}
              onChange={(event) => setInputMessage(event.target.value)}
            />
            <SendButton type="submit">Enviar</SendButton>
          </MessageForm>
        </>
      )}
    </ChatContainer>
  </>
  );
};

export default TextChatBot;