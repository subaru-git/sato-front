/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import Item from './item';

storiesOf('atoms/Item', module).add('default avatar', () => (
  <Item
    htmlUrl="https://google.com"
    head="test head"
    description="this item is test item"
  />
));

storiesOf('atoms/Item', module).add('long description', () => (
  <Item
    htmlUrl="https://google.com"
    head="test head"
    description="Fiction-writing also has modes: action, exposition, description, dialogue, summary, and transition.[4] Author Peter Selgin refers to methods, including action, dialogue, thoughts, summary, scenes, and description.[5] Currently, there is no consensus within the writing community regarding the number and composition of fiction-writing modes and their uses.Description is the fiction-writing mode for transmitting a mental image of the particulars of a story. Together with dialogue, narration, exposition, and summarization, description is one of the most widely recognized of the fiction-writing modes. As stated in Writing from A to Z, edited by Kirk Polking, description is more than the amassing of details; it is bringing something to life by carefully choosing and arranging words and phrases to produce the desired effect.[6] The most appropriate and effective techniques for presenting description are a matter of ongoing discussion among writers and writing coaches."
  />
));
