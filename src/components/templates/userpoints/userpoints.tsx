/** @jsx jsx */
import React, { FC, useState, useCallback, Fragment, useEffect } from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux'
import { jsx, css } from "@emotion/core";
import Menubar from '../../organisms/menubar/menubar'
import ListBoard from '../../molecules/listboard/listboard'
import { point } from '../../../actions/point'
import { AppState } from '../../../reducer'
import { UserPoint } from '../../../services/models'

export interface UserPointsProps {
  data?: UserPoint[];
};

interface DispatchProps {
  getUserPoints: () => void;
}

const mapStateToProps = (state: AppState) => ({
  data: state.user_point.points,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getUserPoints: () => point.getUserPoint(),
    }, dispatch,
  );

type EnhancedMemberProps = UserPointsProps & RouteComponentProps<{}> & DispatchProps;

const UserPoints: FC<EnhancedMemberProps> = ({
  getUserPoints,
  data = []
}) => {
  useEffect(() => {
    getUserPoints();
  }, [])
  return (
    <Fragment>
      <Menubar items={[{ name: 'home', to: '/' }, { name: 'send point', to: '/send' }]} />
      <ListBoard data={data} />
    </Fragment>
  )
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPoints)
);
