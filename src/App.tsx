import React from "react";
import { Redirect, Route, Switch } from 'react-router';
import TopPage from './components/pages/toppage/toppage'
import LoginPage from './components/pages/loginpage/loginpage'
import RegisterPage from './components/pages/registerpage/registerpage'
import Auth from './components/atoms/auth/auth'
import SendPointPage from "./components/pages/sendpointpage/sendpointpage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/login' exact component={LoginPage} />
      <Route path='/register' exact component={RegisterPage} />
      <Auth>
        <Route path='/' exact component={TopPage} />
        <Route path='/send' exact component={SendPointPage} />
      </Auth>
      <Redirect to='/' />
    </Switch>
  );
};

export default App;
