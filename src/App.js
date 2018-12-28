import React from 'react';
import {
BrowserRouter as Router,
Route,
} from 'react-router-dom';
import * as routes from './routes';
import Home from './Components/Screens/Home';
import Booking from './Components/Screens/Booking';

const App = () =>
<Router>
  <div>
    <Route
    exact path={routes.HOME}
    component={() => <Home />}
    />
    <Route
    exact path={routes.BOOKING}
    component={() => <Booking />}
    />
  </div>
</Router>
export default App;
