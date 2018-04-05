/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import PostItem from './PostItem';
import mock from './PostItem.mock';

storiesOf('03 - Molecules', module)
  .addDecorator(withKnobs)
  .add('PostItem', withInfo()(() => <PostItem post={mock} />));
