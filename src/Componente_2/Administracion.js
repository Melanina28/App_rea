
import  * as  React from 'react';
import {Col, Divider, Row, Table} from 'antd';
import {  Space } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        Intership: 'Mike',
        Descripcion: '10 Downing Street',
        Status: 32,

    },
    {
        key: '2',
        Intership: 'Mike',
        Descripcion: '10 Downing Street',
        Status: 32,

    },
];

let administracion =()=>{
    return(
        <di>
            <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                <h1>Administración de Internships</h1>
            </Divider>

                <Row>

                    <Col span={8}></Col>
                        <Col span={8}>
                            <Table dataSource={data}>

                                    <Column title="Intership" dataIndex="Intership" key="Intership" />
                                    <Column title="Descripcion" dataIndex="Descripcion" key="Descripcion" />
                                    <Column title="Status" dataIndex="Status" key="Status" />
                                    <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <a>Delete</a>
                                        </Space>
                                    )}
                                />
                            </Table>
                        </Col>
                    </Row>
        </di>

    )

}

export default  administracion;