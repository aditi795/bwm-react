import React from 'react';
import Header from './components/shared/header.js';
import Routes from './Routes';
import { BrowserRouter as Router} from "react-router-dom";


const App = () => {

 
  

  return (
    <div>
    <Router>
      <Header />
      <Routes/>
    </Router>
  </div>
  )
}

export default App; 