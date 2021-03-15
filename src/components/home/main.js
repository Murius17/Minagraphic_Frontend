import React from "react";
import Cards from "../Main/Cards";
import Formulario from "../Main/contato"

export default class Main extends React.Component {
  render() {
    return ( 
        <div>
         <Cards/>
         <Formulario/>
         </div>
    );
      }
    }