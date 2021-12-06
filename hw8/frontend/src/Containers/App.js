import styled from 'styled-components';
import ChatRoom from './chatRoom';
import SignIn from './signIn';
import useChat from '../Hooks/useChat';
import { message } from 'antd'
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 500px;
  margin: auto;
`;

const LOCALSTORAGE_KEY = "save-me";
const App = () => {
  const savedMe = localStorage.getItem(LOCALSTORAGE_KEY)
  console.log(savedMe);
  const { status, messages, sendMessage, clearMessages } = useChat();
  const [signedIn, setSignedIn] = useState(false);
  const [me, setMe] = useState(savedMe || '');
  
  useEffect(() => {
    displayStatus(status)
  }, [status]);

  useEffect(() => {
    if (signedIn) {
      localStorage.setItem(LOCALSTORAGE_KEY, me);
    }
  }, [signedIn, me]);

  const displayStatus = (payload) => {
    if (payload.msg) {
      const { type, msg } = payload;
      const content = { content: msg, duration: 0.5 }
      switch (type) {
        case 'success':
          message.success(content)
          break;
        case 'error':
          message.error(content)
          break;
        default:
          break;
      }
    }
  }

  return (
    <Wrapper>
      {signedIn ? <ChatRoom 
      me={me}
      messages={messages}
      sendMessage={sendMessage}
      clearMessages={clearMessages}
      displayStatus={displayStatus}
       /> : <SignIn
      me={me}
      setMe={setMe}
      setSignedIn={setSignedIn}
      displayStatus={displayStatus}
      />}
    </Wrapper>
  )
}

export default App
