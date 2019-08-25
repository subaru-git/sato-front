/** @jsx jsx */
import React, { FC } from "react";
import { jsx, css } from "@emotion/core";
import { Button, Form } from "semantic-ui-react";

const RegisterForm: FC<{}> = ({
}) => (
    <Form>
      <Form.Field>
        <label>mail</label>
        <input placeholder='mail' />
      </Form.Field>
      <Form.Field>
        <label>name</label>
        <input placeholder='name' />
      </Form.Field>
      <Form.Field>
        <label>password</label>
        <input placeholder='password' />
      </Form.Field>
      <Button type='submit'>Sign up</Button>
    </Form>
  );

export default RegisterForm;
