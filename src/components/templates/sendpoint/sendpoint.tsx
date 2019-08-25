/** @jsx jsx */
import React, { FC, useState, useCallback, Fragment } from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import { jsx, css } from "@emotion/core";
import Menubar from '../../organisms/menubar/menubar'
import SendPointForm from '../../molecules/sendpointform/sendpointform'

const SendPoint: FC<RouteComponentProps> = ({ }) => {
  return (
    <Fragment>
      <Menubar items={[{ name: 'home', to: '/' }, { name: 'send point', to: '/send' }]} />
      <SendPointForm />
    </Fragment>
  )
};

export default withRouter(SendPoint);
