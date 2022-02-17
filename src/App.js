import { useEffect } from "react";
import "./App.css";
import List from "./List";
import Navigation from "./Navigation";

function App() {
  

  return (
    <div className="app">
      <div className="glass">
        <Navigation />
        <List />
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
