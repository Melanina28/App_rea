import React, {Component} from "react";
import {Route} from 'react-router-dom'
import Administracion from "./Contenedor/Componente_2/Administracion";
import Importar_intership from "./Contenedor/Componente_4/Importar_intership";
import Agregar_interships from "./Contenedor/Componente_5/Agregar_interships";
import Tipo_proyecto from './Contenedor/Componente_6/Tipo_proyecto';
import Inteligencias_utilizadas from './Contenedor/Componente_7/Inteligencias_utilizadas';
import Datos_proyectos from './Contenedor/Componente_8/Datos_proyecto';
import Recursos from './Contenedor/Componente_11/Recursos';
import competencias from "./Contenedor/Componente_10/Competencias";
import Botton from "./Contenedor/Componente_3/Botton";
import Retos from "./Contenedor/Contenedor_9/Retos";
class routes extends Component{
    render(){
        return(<di>
    <Route path={"/retos "} exact component={Retos}/>
    <Route path={"/"}  component={Administracion} />
    <Route path={"/botones"} component={Botton}/>
    <Route path={"/importar"} component={Importar_intership} />
    <Route path={"/agregar"} component={Agregar_interships} />
    <Route path={"/Tipo"} component={Tipo_proyecto}/>
    <Route path={"/Intel"} component={Inteligencias_utilizadas} />
    <Route path={"/Datos"} component={Datos_proyectos} />
    <Route path={"/Comp"} component={competencias} />
    <Route path={"/Rec"} component={Recursos} />
</di>


        );

    }

}
export default routes;