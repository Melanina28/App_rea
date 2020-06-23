import React, {Component} from "react";
import "./Importar_intership.css";
import {Input, Form, Button} from "antd";
import TextArea from "antd/es/input/TextArea";

class importar extends  Component{
    render() {
        return ( <><Form>

                            <h1>Importar Intership</h1>

                                    <Form.Item name="note" label="Nombre" >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                                        <TextArea/>
                                    </Form.Item>

                                    <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                                        <TextArea/>
                                    </Form.Item>
                <h2>Agragar los recursos para resolver la problematica</h2>
                                    <Button></Button>
                    </Form>
                 </>
        )
    }

}

export default importar;