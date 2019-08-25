import React, { FC } from 'react';
import { jsx, css } from "@emotion/core";
import { bindActionCreators, Dispatch } from 'redux';
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { AppState } from '../../../reducer'


const UserComponent: FC<Props> = ({ loggedin, children }) => (loggedin ? <>{children}</> : <Redirect to={'/login'} />)

const mapStateToProps = (state: AppState) => ({
  loggedin: state.auth.loggedin,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);
