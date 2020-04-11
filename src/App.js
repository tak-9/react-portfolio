import React from 'react';
import './css/creative.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/react-portfolio" component={Home} />
          <Route exact path="/react-portfolio/about" component={About} />
          <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
          <Route exact path="/react-portfolio/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
