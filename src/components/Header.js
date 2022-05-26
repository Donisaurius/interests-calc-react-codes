import React from "react";
import Nav from "./Nav";

const Header = () => {

  return(
    <div className="shadow">
      <div className="navbar container d-flex flex-lg-row flex-column">
        <header>
          @Donisaurius | Calc with ReactJS and Bootstrap
        </header>
        <Nav />
      </div>
    </div>
  )
}

export default Header;