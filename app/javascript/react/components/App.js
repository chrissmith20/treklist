import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DestinationList from './destinations/DestinationList'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={DestinationList} />
          <Route exact path='/destinations' component={DestinationList} />
      </Switch>
    </BrowserRouter>

  )
}

export default App;
