import React from "react";
import {Button, Col, Divider, Input, Row, Collapse} from "antd";
import TextArea from "antd/es/input/TextArea";
const { Panel } = Collapse;
let appRec =()=>{
    return (
        <div>
            <Divider orientation="left" style={{color: '#333', fontWeight: 'normal'}}>
                <h1>Recursos requeridos para el Proyecto Internship</h1>

            </Divider>

           <Row>
               <Col span={24}>
                   <Collapse accordion>
                       <Panel header="This is panel header 1" key="1">
                           <p>hola munnod</p>
                       </Panel>
                       <Panel header="This is panel header 2" key="2">
                           <p>aaaa</p>
                       </Panel>
                       <Panel header="This is panel header 3" key="3">
                           <p>aaaaaaaaaa</p>
                       </Panel>
                   </Collapse>
               </Col>
           </Row>


        </div>

    )


}

export default appRec;