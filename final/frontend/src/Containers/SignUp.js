import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import Title from '../Components/Title';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../graphql/mutations';
// import { USERHISTORY_QUERY } from '../graphql/queries';

const SignUp = ({ user, setUser, displayStatus, setSignUp }) => {

    const [password, setPassword] = useState('');
    const [createUser] = useMutation(CREATE_USER_MUTATION);
    // const [checkUser] = useQuery(USERHISTORY_QUERY);
    const handleClick = async () => {
        if(!user || !password) {
            displayStatus({
                type: 'error',
                msg: `user or password cannot be empty`,
            });
            setUser('');
            setPassword('');
        }
        else {
            try{
                const { data } = await createUser({
                    variables: {
                        name: user,
                        password: password,
                    },
                });
                setSignUp(false);
                // console.log(data);
            } catch(error) {
                displayStatus({
                    type: 'error',
                    msg: 'username exists',
                });
                setUser('');
                setPassword('');
            }
        }
    }

    return (
        <>
            <div className = "BigBox_signIn">
                <input className = "input"
                prefix={<UserOutlined />}
                placeholder="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                size="Large"
                style={{ width: 300, margin: 50 }}
                ></input>
                <input className = "input"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="Large"

                style={{ width: 300, margin: 50}}
                ></input>
                <Button
                type="primary"
                onClick={handleClick}
                >Sign Up</Button>
        </div>
            {/* <Title>
                <h1>My Chat Room</h1>
            </Title> */}
            {/* <Input
            prefix={<UserOutlined />}
            placeholder="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            size="medium"
            style={{ width: 300, margin: 50 }}
            // enterButton="Sign In"
            // onSearch={ (name) => {
            //     console.log(name);
            // } }
            ></Input>
            <Input.Password
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="medium"
            style={{ width: 300, margin: 50 }}
            // enterButton="Sign In"
            // onSearch={ (name) => {
            //     console.log(name);
            // } }
            ></Input.Password>
            <Button
            type="primary"
            onClick={handleClick}
            >Sign Up</Button> */}
        </>
        
    )
}

export default SignUp;