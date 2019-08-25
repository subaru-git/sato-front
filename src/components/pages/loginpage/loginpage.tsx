/** @jsx jsx */
import React, { FC, useState, useCallback, Fragment } from "react";
import { jsx, css } from "@emotion/core";
import { bindActionCreators, Dispatch } from 'redux';
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { AppState } from '../../../reducer'
import Login from '../../templates/login/login'

const LoginPage: FC<Props> = ({ loggedin = false }) => (loggedin ? <Redirect to={'/'} /> : <Login />)


const mapStateToProps = (state: AppState) => ({
  loggedin: state.auth.loggedin,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
