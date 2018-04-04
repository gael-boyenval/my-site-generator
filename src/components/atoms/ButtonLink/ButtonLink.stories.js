/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ButtonLink from './ButtonLink';

storiesOf('01 - Atoms', module).add('ButtonLink', withInfo()(() => <ButtonLink>hello</ButtonLink>));
