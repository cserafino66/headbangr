import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ConcertsIndexContainer from './ConcertsIndexContainer';
import ConcertShowContainer from './ConcertShowContainer';

const App = props => {

  return (
    <Router history={browserHistory}>
      <Route path='/' component={ConcertsIndexContainer}/>
      <Route path='/concerts' component={ConcertsIndexContainer}/>
      <Route path='/concerts/:id' component={ConcertShowContainer}/>
    </Router>
  )
}

export default App;
