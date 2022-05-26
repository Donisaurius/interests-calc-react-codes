import React from "react";
import Content from "./Content";
import Header from "./Header";

const Main = () => {

  return(
    <main
    style={{height: "100vh"}}
    className="bg-dark text-light"
    >
      <Header />
      <Content />
    </main>
  )
}

export default Main;