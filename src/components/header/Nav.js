import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <AnchorLink href="#Sobre" offset="100">
          Sobre
        </AnchorLink>
        <AnchorLink href="#Preço" offset="100">
          Preço
        </AnchorLink>
        <AnchorLink href="#Variação" offset="100">
          Variação
        </AnchorLink>
        <AnchorLink href="#Contatos" offset="100">
          Contatos
        </AnchorLink>
      </div>
    );
  }
}
