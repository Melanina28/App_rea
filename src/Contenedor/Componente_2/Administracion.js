import  React, {Component} from 'react';
import {Col, Divider, Row, Table,Button} from 'antd';
import AppAdmin from './AppAdmin';
const { Column } = Table;

class administracion extends Component {
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/prueba')
            .then(result=>result.json())
            .then(items=>this.setState({
                done: true,
                items
            }))
            .catch(() => {
                this.setState({
                    done: true,
                    success: false
                })
            })
    }
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    render() {
        return (
            <div>

                <Row>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                </Row>

                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <AppAdmin items={this.state.items}/>
                    </Col>
                </Row>

            </div>

        )

    }
}
export default  administracion;