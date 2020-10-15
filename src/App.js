import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Contact } from "./components/Contact";
import { NewHome } from "./components/NewHome";

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
      {/* <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/> */}
      <Route exact path="/" component={NewHome}/>
     
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
