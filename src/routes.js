import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './store/Auth';

import Footer from './components/Footer';
import { Home, Login, Signup, Shop, SetDownload, Add } from './pages';
import PrivateRoute from './store/PrivateAuth';

export const Routes = () => {
  return (
    <AuthProvider>
      <div className={'pages-container'}>
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/shop' component={Shop} />
            <PrivateRoute exact path='/download' component={SetDownload} />
            <PrivateRoute exact path='/add' component={Add} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/*' component={() => 404} />
          </Switch>
          <PrivateRoute component={Footer} />
        </Router>
      </div>
    </AuthProvider>
  );
};
