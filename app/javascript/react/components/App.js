import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TreklistContainer from './destinations/TreklistContainer'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={TreklistContainer} />
      </Switch>
    </BrowserRouter>

  )
}

export default App;
