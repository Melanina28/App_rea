import  React, {Component} from "react";
import './Agregar.css';
import axios from "axios";
import {
    Input, Button, message, Form,Select, Row, Col
} from 'antd';
const { TextArea } = Input;
class intership extends Component {

    state = {
        competence: [],
        form: {
            competence: '',
            name: '',
            objetivo:'',
            problematica: '',
        },
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            form: {
                competence: this.state.form.competence,
                name: this.state.form.name,
                objetivo: this.state.form.objetivo,
                problematica : this.state.form.problematica,
                [e.target.name]: e.target.value,
            },
        });
    }


    render() {
        return (
            <div className="contenedor">
                <h1>Nuevo proyecto</h1>
                <br/>
                <div className="form">
                    <Form onSubmit={this.handleSubmit}>
                        <label>Competencia general</label>

                            <div>
                                <select  name="competencias" onChange={ this.handleChange }
                                         defaultValue={ this.state.form.competence }>
                                    {
                                        this.state.competence.map(competence =>
                                            <option>{competence.name}</option>
                                        )
                                    }
                            </select>
                            </div>
                        <br/>
                        <br/>
                        <label>Nombre</label>
                               <div>  <Input name="name" onChange={ this.handleChange }
                                             defaultValue={ this.state.form.name }/></div>

                        <br/>
                        <br/>
                        <label>Objetivo</label>
                            <div> <TextArea name="objetivo" onChange={ this.handleChange }
                                            defaultValue={ this.state.form.objetivo }/></div>
                        <br/>
                        <br/>
                        <label>Problematica</label>
                            <div><TextArea name="problematica" onChange={ this.handleChange }
                                           defaultValue={ this.state.form.problematica }/></div>
                        <br/>
                        <br/>
                        <h2>Agrega los recursos para resolver la problematica</h2>
                        <br/>
                        <br/>
                        <Row>
                            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                <Button  shape="round">Agregar</Button>
                                <Button onClick={ this.handleLogin } type="submit" shape="round">siguiente</Button>
                            </Col>
                            <Col xs={20} sm={16} md={12} lg={8} xl={4}>

                            </Col>
                            <Col xs={2} sm={4} md={6} lg={8} xl={10}>

                            </Col>
                        </Row>


                    </Form>
                </div>
            </div>
            )


    }
}
export default intership;
