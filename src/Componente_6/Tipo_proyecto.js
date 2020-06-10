import React from "react";
import { Row, Col, Divider,Dropdown, Checkbox, Menu  } from 'antd';
import Button from "antd/lib/button";
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" >
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" >
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" >
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const tipoProyecto = () =>{

    return  <div>
                <h1>Tipo de proyecto</h1>

                        <Row>
                            <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                                        <h3>Selecciona el tipo de proyecto a elegir:</h3>
                            </Divider>

                            <Col span={24}>
                                <Dropdown overlay={menu} placement="bottomCenter">
                                    <Button>bottomCenter</Button>
                                </Dropdown>
                            </Col>

                        </Row>

                    <Divider orientation="center" style={{ color: '#333', fontWeight:'300' }}>
                       <h3> Selecciona pre-requisitos indispensables: </h3>
                    </Divider>
                    <Row justify="center">

                        <Col span={4}><Checkbox onChange={onChange}>Algebra Lineal</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Programación</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Estadistica</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Matematicas</Checkbox></Col>

                    </Row>
                    <Row justify="center">

                        <Col span={4}><Checkbox onChange={onChange}>Algebra Lineal</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Programación</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Estadistica</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Matematicas</Checkbox></Col>

                    </Row>
                    <Row justify="center">

                        <Col span={4}><Checkbox onChange={onChange}>Algebra Lineal</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Programación</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Estadistica</Checkbox></Col>
                        <Col span={4}><Checkbox onChange={onChange}>Matematicas</Checkbox></Col>

                    </Row>
        <br/>
                    <Row>
                        <Col span={6} order={4}>   <Button>Siguiente</Button></Col>
                        <Col span={6} order={3}></Col>
                        <Col span={6} order={2}></Col>
                        <Col span={6} order={1}></Col>
                    </Row>

            </div>


}
export default tipoProyecto;

