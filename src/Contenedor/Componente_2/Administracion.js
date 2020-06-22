import  React, {Component} from 'react';
import './Admin.css';
import axios from 'axios';
import { Table, Tag, Space, Button, Radio, Modal } from 'antd';
const { Column, ColumnGroup } = Table;

let dummy = {
    name:"nameDummy",
    description:"descriptionDummy",
}

class administracion extends React.Component {
    state = {
        data: [],
        done:false,
        success:false,
        visible:false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {

       axios.get(`http://127.0.0.1:8000/api/prueba`).then((data)=>{
            console.log(data.data.message.data, 'data');
            this.setState({
                data:data.data.message.data
            })

        }).catch((err)=>{

        });

        console.log(this.state);
    }



    render() {

        return (
            <>
                <h1>Administracion de internships</h1>

                <Button className="btn_add_proyect" shape="round" size="large" onClick={this.showModal}>
                    Agregar proyecto
                </Button>

                <Table dataSource={this.state.data} className="tab">
                    <Column title="Nombre" dataIndex="name" key="name" />
                    <Column title="Descripción" dataIndex="description" key="description" />
                    <Column title="Activo" dataIndex="visible" key="visible" />

                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <a>...</a>
                            </Space>
                        )}
                    />
                </Table>

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <h2>Agregar proyecto internship</h2>
                    <Button  shape="round">nuevo proyecto</Button>
                    <Button  shape="round">importar</Button>

                </Modal>
            </>
        );
    }
}

export default administracion;
