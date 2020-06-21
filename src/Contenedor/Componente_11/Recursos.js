import  React, {Component} from "react";
import {Button, Col, Divider, Input, Row} from "antd";
import TextArea from "antd/es/input/TextArea";
import  AppRec from './AppRec';
 class  recursos extends Component{
   render(){
     return (<div>

             <AppRec/>
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
                     <Col span={6}><TextArea type="text" /></Col>
                     <Col span={6}></Col>
                 </Row>
             <br/>
                 <Row>
                     <Col span={6}></Col>
                     <Col span={6}>Competencia 1:</Col>
                     <Col span={6}><Input type="text" /></Col>
                     <Col span={6}></Col>
                 </Row>
             <br/>
                <Row>
                     <Col span={6}></Col>
                     <Col span={6}>Competencia 2:</Col>
                     <Col span={6}><Input type="text" /></Col>
                     <Col span={6}></Col>
                 </Row>
             <br/>
                 <Row>
                     <Col span={6}></Col>
                     <Col span={6}>Competencia 3:</Col>
                     <Col span={6}><Input type="text" /></Col>
                     <Col span={6}></Col>
                 </Row>
             <br/>
             <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                 <h3>Menciona las temáticas (puedes incluir videos o archivos PDF) necesarios para el logro del reto
                 </h3>
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
             <Button href="/Rec">Siguiente</Button>
            </div>

     )
   }
}

export  default recursos;