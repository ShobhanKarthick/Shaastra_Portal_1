import React from 'react';
import './Components/Mystyles.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Intro from './Components/Intro' 
import About from './Components/AboutUs' 
import Portfolio from './Components/Portfolio' 
import Contact from './Components/Contact';

function App() {
    return (
        <Router className = "page" >
            <Route path="/" exact component={Intro} />
            <Route path="/aboutus" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Router>
    );
}

export default App;