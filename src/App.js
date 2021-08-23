import React from 'react'
import {Switch, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
   const [t,i18n] = useTranslation("global");
  return (
    <div className="contenedor">
       <h1>MultiLenguaje</h1>
       <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
         <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
       <nav>
          <ul className="nav-ul">
             <li>
             <Link className="boton" to="/">Short Stories 1</Link>
             </li>
             <li>
             <Link className="boton" to="/about">Short Stories 2</Link>
             </li>
             <li>
             <Link className="boton" to="/contact">Short Stories 3</Link>
             </li>
          </ul>
       </nav>
       <Switch>
          <Route path="/" exact>
             <Home/>
          </Route>
          <Route path="/about">
             <About/>
          </Route>
          <Route path="/contact" >
             <Contact/>
          </Route>
       </Switch>
    </div>
  );
}

export default App;
