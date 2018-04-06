/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Header from './Header';
import mock from './Header.mock';

storiesOf('04 - Organisms', module).add('Header', withInfo()(() => <Header data={mock} />));
