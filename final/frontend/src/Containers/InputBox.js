// import { Input } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import Title from '../Components/Title';
// import { useState } from 'react';
import { CREATE_LINK_MUTATION, SELF_DESIGN_LINK_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { Input, Space, Button } from 'antd';
import { validURL } from '../utils';
import { useEffect, useState } from 'react';

const InputBox = ({ refetch, url, setUrl, setShort, setIsShortened, user, displayStatus }) => {
    useEffect(() => {
    }, [url])
    
    const [sendURL] = useMutation(CREATE_LINK_MUTATION);
    const [sendselfURL] = useMutation(SELF_DESIGN_LINK_MUTATION);
    const [selfDefShort, setSelfDefShort] = useState('');
    const onSearch = async (value) => {
        if (validURL(value)){
            if (user !== ""){
                if (selfDefShort === "") {
                    const { data } = await sendURL({
                        variables: {
                          origin: url,
                          username: user,
                        },
                    });
                    setUrl('');
                    setShort(data.createLink.short);
                    setIsShortened(true);
                    refetch();
                }
                else {
                    const { data } = await sendselfURL({
                        variables: {
                            origin: url,
                            short: selfDefShort,
                            username: user,
                        },
                    });
                    setSelfDefShort('');
                    setUrl('');
                    setShort(data.selfDefLink.short);
                    setIsShortened(true);
                    refetch();

                }
            }
            else {
                const { data } = await sendURL({
                    variables: {
                      origin: url,
                      username: user,
                    },
                });
                setUrl('');
                setShort(data.createLink.short);
                setIsShortened(true);
                refetch();
                // send url to backend
            }
        }
        else {
            displayStatus({
                type: 'error',
                msg: "Wrong URL format",
            });
        }
    }

    return (
        <div className = "UserInput">

                {
                    user === ""?
                    <>
                    </>:

                        <input className="input"
                        placeholder="input self-defined short url"
                        size="medium"
                        value={selfDefShort}
                        onChange={(e) => setSelfDefShort(e.target.value)}
                        ></input>
                        
                }

                    <input className="input"
                    placeholder="Enter the URL here"
                    // allowClear
                    enterButton="Shorten URL"
                    size="large"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onSearch={onSearch}
                    />
                    <div className="ButtonWrapper">
                        <Button className = "button" onClick =  {() => {
                            onSearch(url)}
                        }>Confirm
                        </Button>
                        <Button className = "button" onClick = {
                            () => {
                                setUrl("");
                                setSelfDefShort("")
                                }}>Clear</Button>
                    </div>

         </div> 
        //  {/* </> */}
    )
}

export default InputBox;