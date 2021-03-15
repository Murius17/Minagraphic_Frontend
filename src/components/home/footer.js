import React from "react";

export default class Footer extends React.Component {
  render() {

    return (
        <div className="footer">
          <div>
          <img className= "LogoFooter"src='https://w7.pngwing.com/pngs/796/937/png-transparent-triangle-logo-brand-triangle-angle-text-triangle.png' alt='Logo' width="60" height="60"/>
            MinaGraphic
          </div>
          <div className = "direitosFooter">
          ©2021 MinaGraphic
          </div>
          <div className= "contatosFooter"> 
            Endereço<br/>
            Telefone<br/>
            E-mail<br/>
          </div>
        </div>
    );
  }
}