/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  BadassTitle,
  EditorialTitle,
  LeadBodyCopy,
  LeadBodyCopyEditorial,
  TinyHeading,
  Mention,
  SubTitle,
  BodySans,
  Title3,
  Title3Sans,
} from './Typography';

storiesOf('02 - Atoms', module).add('Typography', () => (
  <div>
    <BadassTitle>BadassTitle</BadassTitle>
    <br />
    <EditorialTitle>EditorialTitle</EditorialTitle>
    <br />
    <SubTitle>SubTitle</SubTitle>
    <br />
    <Title3>Title3</Title3>
    <br />
    <Title3Sans>Title3Sans</Title3Sans>
    <br />
    <TinyHeading>TinyHeading</TinyHeading>
    <br />
    <LeadBodyCopy>LeadBodyCopy</LeadBodyCopy>
    <br />
    <LeadBodyCopyEditorial>LeadBodyCopyEditorial</LeadBodyCopyEditorial>
    <br />
    <BodySans>BodySans</BodySans>
    <br />
    <Mention>Mention</Mention>
    <br />
  </div>
));
