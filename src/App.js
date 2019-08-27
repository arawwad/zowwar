import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import Loading from 'components/global/Loading';

const Login = lazy(() => import('routes/Login'));
const Profile = lazy(() => import('routes/Profile'));
const Register = lazy(() => import('routes/Register'));
const Result = lazy(() => import('routes/Result'));




const App = () => (
  <Router>
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/result" component={Result} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
