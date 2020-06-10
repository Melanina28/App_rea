import * as React from "react";
import {Divider, Layout, Menu} from 'antd';
import { Row, Col } from 'antd';
import {  Dropdown, Button,Checkbox } from 'antd';

const {  Content } = Layout;

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



let datosProyecto =()=>{

    return(     <div>
            <h1>Datos del proyecto</h1>
            <div>
                <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                    <h3>Selecciona los Datos a utilizar en tu proyecto (puedes agregar más):</h3>
                </Divider>
                <Row>
                    <Col span={6}>
                        <label>Ciudad País</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>
                    <br/>
                    <Col span={6}>
                        <label>Test de validación</label>
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
                        <label>Dato a encontrar</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>
                    <br/>
                    <Col span={6}>
                        <label>blanco </label>
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
                        <label>Estandar</label>
                        <br/>
                        <Checkbox onChange={onChange}>Matematicas</Checkbox>
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown></Col>
                    <br/>
                    <Col span={6}>
                        <label>Blanca</label>
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
                        <label>Presicion</label>
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

export default datosProyecto;