/** @jsx jsx */
import React, { FC, useState, useCallback, Fragment } from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import { jsx, css } from "@emotion/core";
import Menubar from '../../organisms/menubar/menubar'
import RegisterForm from '../../molecules/registerform/registerform'

const Register: FC<RouteComponentProps> = ({
  history
}) => {
  return (
    <Fragment>
      <Menubar items={[{ name: 'home', to: '/' }, { name: 'login', to: '/login' }, { name: 'register', to: '/register' }]} />
      <RegisterForm />
    </Fragment>
  )
};

export default withRouter(Register);
