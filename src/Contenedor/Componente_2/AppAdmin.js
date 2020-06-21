import React  from "react";
import {Col, Divider, Row, Table,Button} from 'antd';
const { Column } = Table;
let appAdmin = ({items}) =>{
    return (
        <div>

            <Divider orientation="center" style={{color: '#333', fontWeight: 'normal'}}>
                <h1>Administración de Internships</h1>
            </Divider>
            <Row>
                <Col span={8}></Col>
                <Col span={8}></Col>
                <Col span={8}><Button type="button" href="/botones">Agregar proyecto </Button></Col>
            </Row>

            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <table className="tabla">
                        <tr>
                            <td>Nombre</td>
                            <td>Descripcion</td>
                            <td>Estatus</td>
                        </tr>
                        <tbody>
                        {items.map((items)=>(
                            <tr key={items.id}>
                                <td>{items.name}</td>
                                <td>{items.description}</td>
                                <td>{items.status_id}</td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </Col>
            </Row>

        </div>

    )
}
export default  appAdmin;