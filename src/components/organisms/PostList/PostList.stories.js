/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import PostList from './PostList';
import Mock from './PostList.mock';

storiesOf('04 - Organisms', module)
  .addDecorator(withKnobs)
  .add('PostList', withInfo()(() => <PostList posts={Mock} />));
