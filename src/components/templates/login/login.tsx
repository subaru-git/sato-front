/** @jsx jsx */
import React, { FC, useState, useCallback, Fragment } from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import { jsx, css } from "@emotion/core";
import Menubar from '../../../components/organisms/menubar/menubar'
import LoginForm from '../../molecules/loginform/loginform'

const Login: FC<RouteComponentProps> = ({
  history
}) => {
  return (
    <Fragment>
      <Menubar items={[{ name: 'home', to: '/' }, { name: 'login', to: '/login' }, { name: 'register', to: '/register' }]} />
      <LoginForm />
    </Fragment>
  )
};

export default withRouter(Login);
