import React  from "react";
import {Col, Divider, Row, Table,Button} from 'antd';
const { Column } = Table;
let appAdmin = ({items}) =>{
    return (
        <div>
            <table className="tabla">
                <tr>
                    <td>Nombre</td>
                    <td>Descripcion</td>
                    <td>Estatus</td>
                </tr>
                <tbody>
                {items.map((items)=>(
                    <tr key={items.id}>
                        <td>{items.name}</td>
                        <td>{items.description}</td>
                        <td>{items.status_id}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </div>

    )
}
export default  appAdmin;