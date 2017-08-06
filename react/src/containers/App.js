import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ConcertsIndexContainer from './ConcertsIndexContainer';
import ConcertShowContainer from './ConcertShowContainer';
import createBrowserHistory from 'history/createBrowserHistory'

const App = props => {
  let customHistory = createBrowserHistory()
  return (
    <Router history={customHistory}>
      <div>
        <Route path='/' component={ConcertsIndexContainer}/>
        <Route path='/concerts' component={ConcertsIndexContainer}/>
        <Route path='/concerts/:id' component={ConcertShowContainer}/>
      </div>
    </Router>
  )
}

export default App;
