import styled from '@emotion/styled';
import logoEmpresa from '../../assets/images/logo.webp';

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  ${({ isChatOpen }) => !isChatOpen && `
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #0098CA;
    justify-content: center;
  `}
`;
export const ChatHeader = styled.div`
  padding: 10px;
  background-color: #0098CA;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isChatOpen }) => !isChatOpen && `
    padding: 0;
    width: 100%;
    background-color: white;
    height: 100%;
    background-image: url(${logoEmpresa});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `}
`;
export const MessageList = styled.ul`
  flex-grow: 1;
  padding: 60px 10px;
  list-style-type: none;
  margin: 0;
  overflow-y: scroll;
`;
export const MessageForm = styled.form`
  padding: 10px;
  display: flex;
  border-top: 1px solid #ccc;
`;
export const MessageInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 10px;
  border-radius: 5px;
  outline: none;
`;
export const UserMessage = styled.li`
  margin-bottom: 10px;
  text-align: right;
  background-color: #0098CA;
  color: white;
  padding: 8px;
  border-radius: 5px;
  display: inline-block;
  max-width: 80%;
  word-wrap: break-word;
  float: right;
  clear: both;
`;
export const BotMessage = styled.li`
  margin-bottom: 10px;
  text-align: left;
  background-color: #f1f1f1;
  color: #333;
  padding: 8px;
  border-radius: 5px;
  display: inline-block;
  max-width: 80%;
  word-wrap: break-word;
  float: left;
  clear: both;
`;
export const SendButton = styled.button`
  background-color: #0098CA;
  color: white;
  font-weight: bold;
  border: none;
  padding: 8px 12px;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0079A3;
  }
`;
export const ChatMessageContainer = styled.div`
  position: fixed;
  bottom: ${({ isChatOpen }) => (isChatOpen ? '100px' : '90px')};
  right: 20px;
  display: flex;
  top: 64%;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
`;
export const ChatMessage = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  background-color: #0098CA;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
  z-index: 1;
`;