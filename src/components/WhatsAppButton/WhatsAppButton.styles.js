import styled from '@emotion/styled';

export const WhatsAppButtonContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20px;
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const WhatsAppMessage = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  background-color: #25D366;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
`;