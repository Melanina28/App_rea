import * as React from "react";
import {Divider, Layout, Menu} from 'antd';
import { Row, Col } from 'antd';
import {  Dropdown, Button,Checkbox } from 'antd';


const {  Content } = Layout;


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


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


let tecnologias =()=>{

    return(     <div>
            <h1>Tecnologías utilizadas en el proyecto Internship</h1>
            <div>
                <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                    <h3>Selecciona las tecnologías a utilizar (puedes agregar más):</h3>
                </Divider>
                <Row>
                    <Col span={6}>
                        <label>Paquete de tecnologías</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>
                    <br/>
                    <Col span={6}>
                        <label>Interfaz de usuario</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>

                    </Row>
                    <br/>
                    <Row>
                    <Col span={6}>
                        <label>Coodificación</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>
                        <br/>
                        <Col span={6}>
                        <label>Driver para BD</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>

                </Row>
                <br/>
                <Row>
                    <Col span={6}>
                        <label>Base de datos</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>
                    <br/>
                    <Col span={6}>
                        <label>Entorno de ejecución</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>
                </Row>
                <br/>
                <Row>
                    <Col span={6}>
                        <label>Framework</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>
                    <br/>
                    <Col span={6}>
                        <label>Otros</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>

                </Row>

                <Button>Agregar</Button>
            </div>
                <br/>
            <Button>Siguiente</Button>

        </div>

    )


}

export default tecnologias;