import React, {Component} from "react";
import { Form, Input, Button,Collapse } from 'antd';
import "./Recuros.css";
import TextArea from "antd/es/input/TextArea";
const { Panel } = Collapse;

class Recursos extends Component{
    state ={
        retos:[{nombre:"",descripcion:"",}]
    }
    addClick = e =>{
        this.setState({
            retos:[...this.state.retos,{nombre:"",descripcion:""}]
        });
    };

    handleChane(e,index){
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleRemove(index){
        this.state.retos.splice(index, 1)

        this.setState({retos:this.state.retos})
    }
    render() {
        return (
         <>
            <Form>
                <div className="contenedor">
                    <h1>Retos del Proyecto Intership</h1>
                        <h3>blablablablabla</h3>
                            <div className="collapse">
                                <Collapse >
                                    <Panel header="Nombre" >
                                        <p></p>
                                    </Panel>
                                    <Panel  header="Descripción">
                                        <p></p>
                                    </Panel>
                                    <Panel header="Problemática que se desea resolver" >
                                        <p></p>
                                    </Panel>
                                </Collapse>
                        <p>Reto</p>
                        <div className="app">
                            {this.state.retos.map((reto, index)=>{
                                return(
                                    <div key={index}  style={{display:'flex',margin:'0,8px'}}>
                                        <div>
                                            <Input name="nombre" placeholder="Nombre" onChange={(e)=>this.handleChane(e,index)} value={reto.nombre}/>

                                            <TextArea name ="descripción"placeholder="Descripcion" onChange={(e)=>this.handleChane(e,index)} value={reto.descripcion}/>
                                            <br/>
                                            <br/>
                                            <br/>
                                        </div>
                                        <Button className={"but2"} onClick={()=>this.handleRemove(index)}>-</Button>
                                    </div>)})}
                                    <Button type="submit" name="submit"  className={"but3"} onClick={(e)=>this.addClick(e)}>Agregar</Button>
                            <br/>
                         </div>
                        <Button className={"but"}>Siguiente</Button>
                    </div>


                </div>


            </Form>
         </>
        )
    }

}

export default Recursos;