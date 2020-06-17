import React from "react";
import {Button, Col, Row} from "antd";
let boton =()=>{
return(
            <div orientation="center">

                <Row gutter={[40, 16]} justify="cent" >
                    <Col span={6}></Col>
                    <Col span={6} >
                        <Button type="primary" block={6}>
                            Importar y editar proyecto Internship
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary"block={6}>
                            Agregar proyecto Internship nuevo.
                        </Button>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>

)

}

export default boton;