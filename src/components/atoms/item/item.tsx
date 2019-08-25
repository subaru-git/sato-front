/** @jsx jsx */
import React, { FC } from "react";
import { jsx, css } from "@emotion/core";
import { Card, Image } from "semantic-ui-react";
import defaultImage from "./image.png";

const itemCss = css`
  max-height: 200px;
  overflow: hidden;
`;

export interface CardProps {
  htmlUrl: string;
  avatar?: string;
  head: string;
  description: string;
  key?: number;
}

const Item: FC<CardProps> = ({
  htmlUrl,
  avatar = defaultImage,
  head,
  description,
  key
}) => (
  <Card key={key} href={htmlUrl} target="_blank">
    <Card.Content data-testid={key} css={itemCss}>
      <Image floated="left" src={avatar} avatar />
      <Card.Header>{head}</Card.Header>
      <Card.Meta>{description}</Card.Meta>
    </Card.Content>
  </Card>
);

export default Item;
