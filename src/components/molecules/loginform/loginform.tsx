/** @jsx jsx */
import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux'
import { jsx, css } from "@emotion/core";
import { Button, Form } from "semantic-ui-react";
import { auth } from '../../../actions/auth'

interface DispatchProps {
  loginStart: (mail: string, password: string) => void;
}

type EnhancedMemberProps = DispatchProps;

const mapStateToProps = (state: null) => ({})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      loginStart: (email: string, password: string) => auth.login({ email, password }),
    }, dispatch,
  );

const LoginForm: FC<EnhancedMemberProps> = ({
  loginStart,
}) => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Form>
      <Form.Field>
        <label>mail</label>
        <input placeholder='mail' onChange={e => setMail(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>password</label>
        <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)} />
      </Form.Field>
      <Button onClick={() => loginStart(email, password)}>Submit</Button>
    </Form>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
