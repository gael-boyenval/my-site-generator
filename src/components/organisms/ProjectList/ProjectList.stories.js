/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import ProjectList from './ProjectList';
import Mock from './ProjectList.mock';

storiesOf('04 - Organisms', module)
  .addDecorator(withKnobs)
  .add('ProjectList', withInfo()(() => <ProjectList projects={Mock} />));
