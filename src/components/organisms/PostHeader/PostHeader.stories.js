/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import PostHeader from './PostHeader';
import propMock from './PostHeader.mock';

storiesOf('04 - Organisms', module)
  .addDecorator(withKnobs)
  .add('PostHeader', withInfo()(() => <PostHeader {...propMock} />));
