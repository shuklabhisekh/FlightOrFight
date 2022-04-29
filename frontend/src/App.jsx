import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./component/Home";
import { Flight } from "./component/Flight";
import { Navbar } from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/flight/:id" element={<Flight />}>
          Flight
        </Route>
      </Routes>
    </div>
  );
}

export default App;
