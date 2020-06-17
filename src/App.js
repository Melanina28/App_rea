import React, {Component}  from 'react';
import './App.css';
import Routes from './Routes';
import {BrowserRouter} from "react-router-dom";
import AppAdmin from './Contenedor/Componente_2/AppAdmin';

class App extends Component{

    render(){
        return(
            <BrowserRouter>
               <div className="App">

                   <Routes/>

               </div>
            </BrowserRouter>
        );

    }

}
export default App;