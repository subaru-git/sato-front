/** @jsx jsx */
import React, { FC, useState, useCallback } from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import { jsx, css } from "@emotion/core";
import { Menu, Segment } from "semantic-ui-react";

export interface MenubarProps {
  items: { name: string, to: string }[];
}

type MenubarRouterProps = MenubarProps & RouteComponentProps;

const Menubar: FC<MenubarRouterProps> = ({
  history,
  items = []
}) => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        {items.map((item, i) => (
          <Menu.Item key={i} name={item.name} onClick={() => history.push(item.to)} />
        ))}
      </Menu>
    </Segment>)
};

export default withRouter(Menubar);
