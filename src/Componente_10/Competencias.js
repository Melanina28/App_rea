import * as React from 'react';
import {Button, Col, Divider, Dropdown, Input, Menu, Row} from "antd";
import TextArea from "antd/es/input/TextArea";


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


let competencias = () =>{

    return(
            <div>
                <h1>Competencias requeridas por el Proyecto Internship</h1>
                <Divider>
                    <h3>Competencias requeridas por el Proyecto Internship</h3>
                </Divider>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}>Nombre de reto:</Col>
                    <Col span={6}><Input type="text" /></Col>
                    <Col span={6}></Col>
                </Row>
                <br/>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}>Descripción:</Col>
                    <Col span={6}><TextArea/></Col>
                    <Col span={6}></Col>
                </Row>
                <br/>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}>Competencia 1</Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6}></Col>
                </Row>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}>Indicadores de evaluación</Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6}></Col>
                </Row>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}>Indicadores de evaluación</Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"} >
                            <Button>DROPMENU</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6}></Col>
                </Row>
                <br/>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}>Competencia 2</Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6}></Col>
                </Row>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}>Indicadores de evaluación</Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"}>
                            <Button>DROPMENU</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6}></Col>
                </Row>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}>Indicadores de evaluación</Col>
                    <Col span={6}>
                        <Dropdown overlay={menu} placement={"bottomCenter"} >
                            <Button>DROPMENU</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            <Button>Siguiente</Button>
            </div>


    )


}
export default competencias;