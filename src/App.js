import React from 'react';
import './css/creative.css';
import { HashRouter, Route, Switch } from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <HashRouter basename="/react-portfolio">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
