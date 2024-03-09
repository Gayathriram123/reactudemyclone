import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Navbar from "./components/navbar.js"
import Navbar1 from './components/navbar1.js';
import Saleimage from './components/saleimage.js';
import Recomend from './components/recomend.js';
import Topics from './components/topics.js';
import Mostpopular from './components/mostpopular.js';
import Footer from './components/footer.js';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <div>
    <Navbar></Navbar>
    <Navbar1></Navbar1>
    <Saleimage></Saleimage>
    <Recomend></Recomend>
    <Topics></Topics>
    <Mostpopular></Mostpopular>
    <Recomend></Recomend>
    <Footer></Footer>
  
    
    </div>
  
  )

