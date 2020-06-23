import  React, {Component} from 'react';
import './Competencias.css';
import {Button, Col, Divider, Dropdown, Input, Menu, Row, Form,Collapse} from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

class competencias extends  Component{
    render(){
        return(
                <>
                 <Form>
                     <div className="contenedor">
                      <br/>
                     <p3>Competencias requeridas</p3>
                      <br/>
                     <p1>Titulo grande de la competencia</p1>
                     <br/>
                     <p2>Descripcion de la competencia</p2>
                         <br/>
                         <br/>
                     <div className="collapse">
                         <Collapse >
                             <Panel header="Competencia 1" >
                                 <Dropdown className="drop">
                                     <Button>
                                         Indicadores para evaluación<DownOutlined/>
                                     </Button>
                                 </Dropdown>
                                 <Dropdown className="drop">
                                     <Button>
                                        Indicadores para la evaluación<DownOutlined/>
                                     </Button>
                                 </Dropdown>
                             </Panel>
                             <Panel  header="Competencia 2">
                                 <Dropdown className="drop">
                                     <Button>
                                         Indicadores para evaluación<DownOutlined/>
                                     </Button>
                                 </Dropdown>
                                 <Dropdown className="drop">
                                     <Button>
                                         Indicadores para la evaluación<DownOutlined/>
                                     </Button>
                                 </Dropdown>
                             </Panel>
                             <Panel header="Competencia 3" >
                                 <Dropdown className="drop">
                                     <Button>
                                         Indicadores para evaluación<DownOutlined/>
                                     </Button>
                                 </Dropdown>
                                 <Dropdown className="drop">
                                     <Button>
                                         Indicadores para la evaluación<DownOutlined/>
                                     </Button>
                                 </Dropdown>
                             </Panel>
                         </Collapse>

                             <Button className="btn">Siguiente</Button>


                     </div>

                     </div>


                 </Form>
                </>


        )

    }
}
export default competencias;