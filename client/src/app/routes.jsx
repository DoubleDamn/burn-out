import * as React from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import SignIn from '../authentication/SignIn';
import SignUp from '../authentication/SingUp';
import UserProfile from './user-profile/UserProfile';

export const ROUTES = {
  ROOT: '/',
  AUTH: '/auth',
  SIGN_UP: '/signUp',
  USER_PROFILE: '/user-profile',
};

const AppRoute = () => {
  return (
    <Router>
      <Route exact path={ROUTES.USER_PROFILE} component={UserProfile} />
      <Route exact path={ROUTES.AUTH} component={SignIn} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Route exact path={ROUTES.ROOT} component={App} />
    </Router>
  );
};

export default AppRoute;
