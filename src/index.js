import React from "react";
import { render } from "react-dom";
import Dashboard from "./components/dashboard";
import Header from "./components/Header";
import "./app.css";
// import NavbarComp from "./components/navbarcomp";

class App extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
