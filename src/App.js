import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home  from "./pages/Home";
import PlayerStats from "./pages/PlayerStats";
import TeamStats from "./pages/TeamStats";
import Standings from './pages/Standings'
import css from './app.css'


function App() {
  return ( 
    <Router>
      <div className="App">
        <Navbar />
 
        <div className="content">
        
        <Routes> <Route  path="/" element={<Home></Home>} />  
      <Route path="/playerstats" element={<PlayerStats></PlayerStats>} />
         <Route path="/teamstats" element={<TeamStats></TeamStats>} />  
         <Route path="/standings" element={<Standings></Standings>} /></Routes>
        </div>
       
      </div>
    </Router>
  );
}
export default App;
