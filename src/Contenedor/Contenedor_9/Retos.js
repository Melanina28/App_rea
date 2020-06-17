import React from "react";
import {Col, Row, Button, Input, Form} from "antd";


let retos = ()=>{
    return(
        <div>
            <h1>Retos del Proyecto Internship</h1>
                <br/>
                 <Row>
                     <Col xs={20} sm={16} md={12} lg={8} xl={4}></Col>
                     <Col  xs={20} sm={16} md={12} lg={8} xl={4}></Col>
                     <Col span={6} lg={8}><Form.Item label="Objetivo  "> <Input/> </Form.Item> </Col>
                     <Col></Col>
                 </Row>
                 <Row>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}></Col>
                     <Col  xs={20} sm={16} md={12} lg={8} xl={4}></Col>
                    <Col span={6} lg={8}><Form.Item label="Problematica"><Input/></Form.Item></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                        <Col span={6} order={4}>

                        </Col>
                        <Col span={6} order={3}>
                            <h3>Introduccion del reto</h3>
                        </Col>
                        <Col span={6} order={2}>
                            <h3>Nombre del reto</h3>

                        </Col>
                        <Col span={6} order={1}>

                        </Col>
                    </Row>

                    <Row gutter={[40, 16]}>
                        <Col span={6} order={4}>

                        </Col>
                        <Col span={6} order={3}>
                            <Input/>
                        </Col>
                        <Col span={6} order={2}>
                            <Input/>
                        </Col>
                        <Col span={6} order={1}>

                        </Col>
                    </Row>
            <br/>
                    <Row>
                        <Col span={6} order={4}>

                        </Col>
                        <Col span={6} order={3}>
                            <Button>Siguiente</Button>
                        </Col>
                        <Col span={6} order={2}>

                            <Button type="primary">Agregar</Button>
                        </Col>
                        <Col span={6} order={1}>

                        </Col>
                    </Row>


        </div>


    )


}

export default retos;