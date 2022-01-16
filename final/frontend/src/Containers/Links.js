import { useMutation, useQuery } from '@apollo/client';
import { Popconfirm, Table } from 'antd';
import { useEffect } from 'react';
import { DELETE_LINK_MUTATION } from '../graphql/mutations';

const Links = ({ refetch, user, data }) => {

    const [deletelink] = useMutation(DELETE_LINK_MUTATION);

    // useEffect(() => {

    // }, [data, user]);

    const handleDelete = async (record) => {
        await deletelink({
            variables: {
                url: record.short_URL,
                username: user,
            }
        })
        refetch();
    };

    const columns = [
        {
            title: 'origin URL',
            dataIndex: 'origin_URL',
            key: 'origin_URL',
            render: text => <a>{text}</a>,
        },
        {
            title: 'short URL',
            dataIndex: 'short_URL',
            key: 'short_URL',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            key: 'operation',
            render: (_, record) => 
                data.userHistory.length >= 1? (
                    <Popconfirm
                    title="Sure to delete?"
                    onConfirm={() => handleDelete(record)}
                    ><a>Delete</a>
                    </Popconfirm>
                ) : null,
            // }
        },
    ];

    return (

        <Table
        columns={columns}
        dataSource={
            data.userHistory.map((link_data, i) => {
                return {
                    origin_URL: link_data.origin,
                    short_URL: link_data.short
                }
            }
        )}
        bordered
        ></Table>

    )
}

export default Links;