import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import Title from '../Components/Title';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOGIN_QUERY } from '../graphql/queries';

const SignIn = ({ user, setUser, displayStatus, setSignIn, setSignIn_user }) => {

    const [password, setPassword] = useState('');
    const { data, loading } = useQuery(LOGIN_QUERY, {
        variables: {
            name: user,
            password: password,
        },
    });

    const handleClick = async () => {
        if(!user || !password) {
            displayStatus({
                type: 'error',
                msg: `user or password cannot be empty`,
            });
            setUser('');
        }
        else if (!data) {
            displayStatus({
                type: 'error',
                msg: `username or password is wrong`,
            });
        }
        else {
            setSignIn_user(true);
            setSignIn(false);
        }
    }

    return (
        
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
            >Sign In</Button>
        </div>
    )
}

export default SignIn;