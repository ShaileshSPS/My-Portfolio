import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <div className="header">
          <h1>My Portfolio</h1>
        </div>
        <div className="navbar">
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Route path="/" exact component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;