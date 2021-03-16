import React from "react";

export default class Address extends React.Component {
  render() {
    return (
      <div className='endereço'>
        <img className= "Logo"src='https://w7.pngwing.com/pngs/796/937/png-transparent-triangle-logo-brand-triangle-angle-text-triangle.png' alt='Logo' width="60" height="60"/> <br/>
        <div className="contato">
        <img className="address" src='https://w7.pngwing.com/pngs/874/257/png-transparent-whatsapp-computer-icons-computer-software-whatsapp-text-logo-whatsapp-icon.png' alt='WhatsApp de Contato' width="25" height="25"/> <strong>(xx) xxxx-xxx </strong><br/>  
        </div>
         </div>
    );
  }
}
