import styled from 'styled-components';
import { Button, Input, Space } from 'antd';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    width: 500px;
    margin: auto;
`;

const { Search } = Input;

const OutputBox = ({ setIsShortened, setShort, short, displayStatus }) => {
    
    // const [sendURL] = useMutation(CREATE_LINK_MUTATION);

    const handleClick = () => {
        setIsShortened(false);
        setShort('');
    }

    const onSearch = async (value) => {
        navigator.clipboard.writeText(`localhost:5000/${value}`);
        displayStatus({
            type: 'success',
            msg: `Copy the url`,
        });
    }

    return (
        <Wrapper>
            {/* <Space direction="vertical"> */}
                <Search
                placeholder=""
                // allowClear
                enterButton="Copy URL"
                size="large"
                value={short}
                // onChange={(e) => setUrl(e.target.value)}
                onSearch={onSearch}
                />
            {/* </Space> */}
            <Button className = "convert_button" type="primary" danger onClick={handleClick}>Convert next!</Button>
        </Wrapper>
    )
}

export default OutputBox;