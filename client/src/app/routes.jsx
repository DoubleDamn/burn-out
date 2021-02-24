import * as React from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../containers/authentication/SignIn';
import SignUp from '../containers/authentication/SingUp';
import UserProfile from '../containers/user-profile/UserProfile';

export const ROUTES = {
  ROOT: '/',
  AUTH: '/auth',
  SIGN_UP: '/auth/signUp',
  USER_PROFILE: '/user-profile',
};

const AppRoute = () => {
  return (
    <>
      <Route exact path={ROUTES.AUTH} component={SignIn} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Route exact path={ROUTES.ROOT} component={UserProfile} />
    </>
  );
};

export default AppRoute;
