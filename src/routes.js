import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './store/Auth';

import { Home, Login, Signup } from './pages';
import PrivateRoute from './store/PrivateAuth';

export const Routes = () => {
  return (
    <AuthProvider>
      <div className={'pages-container'}>
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/*' component={() => 404} />

            {/* <PrivateRoute exact path='/' component={Login} />
          <PrivateRoute exact path='/' component={Login} />
          <PrivateRoute exact path='/' component={Login} /> */}
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
};
