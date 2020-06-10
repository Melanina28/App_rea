import React, {Component}  from 'react';
import './App.css';
import Importar_intership from './Componente_4/Importar_intership';
import Agregar_intership from './Componente_5/Agregar_interships';
import Tipo_proyecto     from './Componente_6/Tipo_proyecto';
import Inteligencias_utilizadas from './Componente_7/Inteligencias_utilizadas';
import Competencias from './Componente_10/Competencias';
import Recursos  from     './Componente_11/Recursos';
import Administracion from "./Componente_2/Administracion";
import Datos_proyecto from "./Componente_8/Datos_proyecto";
import {BrowserRouter} from 'react-router-dom';


class App extends Component{
    render(){
        return(

            <di>
            <di className="menu">
                <header>
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>woli peloni</a></li>
                        </ul>
                    </nav>

                </header>
            </di>
            <div className="App">

                <Administracion />
                <Importar_intership/>
                <Agregar_intership/>
                <Tipo_proyecto/>
                <Inteligencias_utilizadas/>
                <Datos_proyecto/>
                <Competencias/>
                <Recursos/>
            </div>
            </di>
        );

    }

}
export default App;