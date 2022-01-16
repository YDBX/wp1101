import styled from 'styled-components';
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Links from './Links';
import { message, Button } from 'antd'
import { useEffect, useState } from 'react';
import { USERHISTORY_QUERY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
//   justify-content: center;
  height: 90vh;
  width: 80em;
  margin: auto;
//   border:5px solidblack;
//   background:black;
`;

const LOCALSTORAGE_KEY = "save-user";
const App = () => {
    const [url, setUrl] = useState('');
    const [isShortened, setIsShortened] = useState(false);
    const [short, setShort] = useState('');
    const savedUser = localStorage.getItem(LOCALSTORAGE_KEY)
    const [user, setUser] = useState(savedUser || '');
    const [signIn_user, setSignIn_user] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const { data, refetch } = useQuery(USERHISTORY_QUERY, {
        variables: {
            username: user
        }
    });
    
    
    useEffect(() => {
        // console.log(user);
        if (signIn_user) {
            localStorage.setItem(LOCALSTORAGE_KEY, user);
        }
    }, [signIn_user, user]);

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

    const SignUpPage = (
        <>
            <div className = "Signing">
                <div className = "ButtonBox">
                    <Button 
                    type="primary"
                    danger
                    onClick={() => {
                        setSignUp(false);
                        setSignIn(false);
                    }}
                    >Home</Button>
                </div>
                <div className = "ButtonBox">
                    <Button
                    type="primary"
                    danger
                    onClick={() => {
                        setSignUp(true);
                        setSignIn(false);
                    }}
                    >Sign Up
                    </Button>
                    <Button
                    type="primary"
                    danger
                    onClick={() => {
                        setSignIn(true);
                        setSignUp(false);
                    }}
                    >Sign In
                    </Button>
                </div>
            </div>
            <Wrapper>
                <SignUp
                user={user}
                setUser={setUser}
                displayStatus={displayStatus}
                setSignUp={setSignUp}
                ></SignUp>
            </Wrapper>
        </>
    );

    const defaultPage = (
        <>
            {
                user !== ''?
                <>
                <div className = "Signing">
                    <div className = "ButtonBox">
                        <div>Hello, {user}</div>
                    </div>
                    <div className = "ButtonBox">
                    <Button
                    type="primary"
                    danger
                    onClick={() => {
                        setUser('');
                        setSignIn(false);
                        setShowHistory(false);
                        localStorage.setItem(LOCALSTORAGE_KEY, "");
                    }}
                    >Log out</Button>

                    <Button
                    type="primary"
                    danger
                    onClick={() => setShowHistory(!showHistory)}
                    >Link history</Button> 
                    </div>
                </div>
                    {/* <Button
                    type="primary"
                    danger
                    onClick={() => {
                        setUser('');
                        localStorage.setItem(LOCALSTORAGE_KEY, "");
                    }}
                    >Log out</Button>
                    <h3>
                        Hi, {user}
                    </h3>
                    <Button
                    type="primary"
                    danger
                    onClick={() => setShowHistory(!showHistory)}
                    >Link history</Button> */}
                </>:
                <div className = "Signing">
                    <div className = "ButtonBox">
                        <Button 
                        type="primary"
                        danger
                        >Home</Button>
                    </div>
                    <div className = "ButtonBox">
                        <Button
                        type="primary"
                        danger
                        onClick={() => setSignUp(true)}
                        >Sign Up
                        </Button>
                        <Button
                        type="primary"
                        danger
                        onClick={() => setSignIn(true)}
                        >Sign In
                        </Button>
                    </div>
                </div>
                
            }
            <Wrapper >
                <div className="BigBox">
            {
                isShortened?
                <OutputBox 
                setIsShortened={setIsShortened}
                setShort={setShort}
                short={short}
                displayStatus={displayStatus}
                ></OutputBox>:
                <InputBox
                refetch={refetch}
                url={url}
                setUrl={setUrl}
                setShort={setShort}
                setIsShortened={setIsShortened}
                user={user}
                displayStatus={displayStatus}
                ></InputBox>
            }
                </div>
                
            {
                showHistory?

                    <Links
                    refetch={refetch}
                    user={user}
                    data={data}
                    
                    ></Links>
:
                <></>
                
            }
                
            </Wrapper>
        </>
    )

    const SignInPage = (
        <>
            <div className = "Signing">
                <div className = "ButtonBox">
                    <Button 
                    type="primary"
                    danger
                    onClick={() => {
                        setSignUp(false);
                        setSignIn(false);
                    }}
                    >Home</Button>
                </div>
                <div className = "ButtonBox">
                    <Button
                    type="primary"
                    danger
                    onClick={() => {
                        setSignUp(true);
                        setSignIn(false);
                    }}
                    >Sign Up
                    </Button>
                    <Button
                    type="primary"
                    danger
                    onClick={() => setSignIn(true)}
                    >Sign In
                    </Button>
                </div>
            </div>
            <Wrapper>
                <SignIn
                user={user}
                setUser={setUser}
                displayStatus={displayStatus}
                setSignIn={setSignIn}
                setSignIn_user={setSignIn_user}
                ></SignIn>
            </Wrapper>
        </>
    )

    return (
        <>
            <div className = "Layout">
            {signIn?
                SignInPage
            : signUp? SignUpPage : defaultPage}
            </div>
        </>
    )
}

export default App