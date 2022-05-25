import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './global-styles';
import Home from './pages/Home';
import Recipe from './pages/SingleRecipe';
import NotFoundPage from './pages/NotFoundPage';
import Favorites from './pages/Favorites';
import About from './pages/About';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recipes/:id" component={Recipe} />

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
