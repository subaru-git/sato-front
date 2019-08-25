/** @jsx jsx */
import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux'
import { jsx, css } from "@emotion/core";
import { Button, Form } from "semantic-ui-react";
import { point } from '../../../actions/point'

interface DispatchProps {
  sendPoint: (name: string, point: number) => void;
}

type EnhancedMemberProps = DispatchProps;

const mapStateToProps = (state: null) => ({})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      sendPoint: (name: string, p: number) => point.send({ name, point: p }),
    }, dispatch,
  );

const SendPointForm: FC<EnhancedMemberProps> = ({
  sendPoint,
}) => {
  const [name, setName] = useState('');
  const [point, setPoint] = useState(0);
  return (
    <Form>
      <Form.Field>
        <label>name</label>
        <input placeholder='name' onChange={e => setName(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>point</label>
        <input type="number" placeholder='point' onChange={e => setPoint(parseInt(e.target.value))} />
      </Form.Field>
      <Button onClick={() => sendPoint(name, point)}>Submit</Button>
    </Form>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(SendPointForm);
