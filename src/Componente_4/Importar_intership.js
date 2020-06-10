import * as React from "react";
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Button,Divider } from 'antd';
import { Form, Input } from 'antd';
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


let importar =() =>{
     return (
         <div>

             <h1>Importar interships</h1>
             <br/>
             <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                 <h3>Selecciona el proyecto que deseas importar y modificar:</h3>
             </Divider>

                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}>
                                <Dropdown overlay={menu} placement={"bottomCenter"} >
                                    <Button>DROPMENU</Button>
                                </Dropdown>
                        </Col>
                        <Col span={8}></Col>
                    </Row>

             <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                 <h3>Escribe el nombre y la descripción del Internship que deseas elaborar:</h3>
             </Divider>
             <br/>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={6}>Nombre</Col>
                            <Col span={6}>
                                <Input type="text" />
                            </Col>
                        <Col span={6}></Col>
                     </Row>
             <br/>
                     <Row>
                         <Col span={6}></Col>
                         <Col span={6}>Objetivo intership</Col>
                             <Col span={6}>
                                 <Input type="text" />
                             </Col>
                         <Col span={6}></Col>
                     </Row>
             <br/>
                     <Row>
                         <Col span={6}></Col>
                         <Col span={6}>Problematica a resolver</Col>
                             <Col span={6}>
                                 <Input type="text" />
                             </Col>
                         <Col span={6}></Col>
                     </Row>
             <br/>
                     <Row>
                         <Col span={6}></Col>
                         <Col span={6}>Competencia general</Col>
                         <Col span={6}>
                             <Dropdown overlay={menu} placement={"bottomCenter"} >
                                 <Button>DROPMENU</Button>
                             </Dropdown>
                         </Col>
                         <Col span={6}></Col>
                     </Row>
             <br/>

             <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                 <h3>De ser necesario, agrega los recursos para resolver la problemática (estándares, repositorios, etc).</h3>
             </Divider>

                     <Row>
                         <Col span={6}></Col>
                         <Col span={6}>
                             <label>Recursos</label>
                             <label> </label>
                             <Input/>
                         </Col>
                         <Col span={6}>
                             <label> Nombre recursos  </label>
                             <label> </label>
                             <Input/>
                         </Col>
                         <Col span={6}></Col>
                     </Row>

                        <br/>
                        <Button>Guardar</Button>
                        <label>   </label>
                        <Button>Siguiente</Button>


</div>)


}
export default  importar;