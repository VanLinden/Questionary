import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Questionary from './Questionary';
import Viewing from './Viewing';

const App = props => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Questionary} exact />
          <Route path="/Viewing" component={Viewing} exact />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
