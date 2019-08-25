/** @jsx jsx */
import React, { FC } from "react";
import { jsx, css } from "@emotion/core";
import { List, Grid, Statistic } from "semantic-ui-react";
import { UserPoint } from '../../../services/models'

const listBoardCss = css`
  max-height: 200px;
  overflow: hidden;
`;

export interface ListBoardProps {
  data: UserPoint[];
}

const ListBoard: FC<ListBoardProps> = ({
  data = []
}) => (
    <List divided relaxed size="massive">
      {data.map((item, i) => (
        <List.Item key={i}>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <List.Header>{item.name}</List.Header>
                  <List.Description>{item.last_update}</List.Description>
                </Grid.Column>
                <Grid.Column>
                  <Statistic>
                    <Statistic.Value>{item.point}</Statistic.Value>
                  </Statistic>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );

export default ListBoard;
