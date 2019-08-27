import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, useState } from 'react';

import Loading from 'components/global/Loading';

import AuthContext from 'contexts/AuthContext';

const Login = lazy(() => import('routes/Login'));
const Profile = lazy(() => import('routes/Profile'));
const Register = lazy(() => import('routes/Register'));
const Result = lazy(() => import('routes/Result'));





const App = () => {

  const [isAuth, setAuth] = useState(false);


  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" render={() => (
              isAuth ? (
                <Profile />
              ) : (
                  <Redirect to="/login" />
                )
            )} />
            <Route path="/result" render={() => (
              isAuth ? (
                <Result />
              ) : (
                  <Redirect to="/login" />
                )
            )} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Suspense>
      </Router>
    </AuthContext.Provider>
  )
};
export default App;
