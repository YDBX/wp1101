import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Title from '../Components/Title';
// import { useState } from 'react';

const SignIn = ({ me, setMe, setSignedIn, displayStatus }) => {
    return (
        <>
            <Title>
                <h1>My Chat Room</h1>
            </Title>
            <Input.Search
            prefix={<UserOutlined />}
            placeholder="Enter your name"
            value={me}
            onChange={(e) => setMe(e.target.value)}
            size="large"
            style={{ width: 300, margin: 50 }}
            enterButton="Sign In"
            onSearch={ (name) => {
                if (!name) {
                    displayStatus({
                        type: 'error',
                        msg: "Missing user name",
                    });
                }
                else {
                    setSignedIn(true);
                }
            } }
            ></Input.Search>
        </>
    )
}

export default SignIn;