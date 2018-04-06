/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import MainHero from './MainHero';

storiesOf('04 - Organisms', module).add('MainHero', withInfo()(() => <MainHero />));
