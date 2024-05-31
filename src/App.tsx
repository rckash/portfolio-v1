import React from "react";
import { Button } from "./components/Button";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="App">Hello World!</h1>;
      <Button />
    </div>
  );
}

export default App;
