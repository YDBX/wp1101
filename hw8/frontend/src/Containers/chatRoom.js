// import useChat from '../Hooks/useChat'
import Title from '../Components/Title';
import Messages from '../Components/Messages';
import { Button, Input, Tag } from 'antd'
import { useRef, useState } from 'react';

const ChatRoom = ({ me, messages, sendMessage, clearMessages, displayStatus }) => {

  const [body, setBody] = useState('');
  const bodyRef = useRef(null);

  return (
    <>
      <Title>
        <h1>{me}'s Chat Room</h1>
        <Button type="primary" danger onClick={clearMessages} >
          Clear
        </Button>
      </Title>
      <Messages>
        {messages.length === 0 ? (
          <p style={{ color: '#ccc' }}>No messages...</p>
        ) : (
          messages.map(({ name, body }, i) => (
            <p className="App-message" key={i}>
              <Tag color="blue">{name}</Tag> {body}
            </p>
          ))
        )}
      </Messages>
      {/* <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            bodyRef.current.focus()
          }
        }}
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: 10 }}
      ></Input> */}
      <Input.Search
        ref={bodyRef}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        enterButton="Send"
        placeholder="Type a message here..."
        onSearch={(msg) => {
          if (!msg) {
            displayStatus({
              type: 'error',
              msg: 'Please enter a message body.'
            })
            return
          }
          sendMessage({ name: me, body: msg })
          setBody('')
        }}
      ></Input.Search>
    </>
  )
}

export default ChatRoom;