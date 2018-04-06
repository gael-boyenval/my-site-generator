/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import ProjectItem from './ProjectItem';
import mock from './ProjectItem.mock';

storiesOf('03 - Molecules', module)
  .addDecorator(withKnobs)
  .add('ProjectItem', withInfo()(() => <ProjectItem num="01" {...mock} />));
