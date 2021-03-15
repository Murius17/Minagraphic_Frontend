import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <AnchorLink href="#Home" offset="100">
          Home
        </AnchorLink>
        <AnchorLink>
          Favoritos
        </AnchorLink>
        <AnchorLink href="#Gráficos" offset="100">
          Gráficos
        </AnchorLink>
        <AnchorLink href="#Contato" offset="100">
          Contato
        </AnchorLink>
      </div>
    );
  }
}
