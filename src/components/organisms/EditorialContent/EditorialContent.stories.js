/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import EditorialContent from './EditorialContent';
import propMock from './EditorialContent.mock';

storiesOf('04 - Organisms', module)
  .addDecorator(withKnobs)
  .add('EditorialContent', withInfo()(() => <EditorialContent {...propMock} />));
