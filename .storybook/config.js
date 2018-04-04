import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { withInfo } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
setOptions({
  addonPanelInRight: true,
  url: 'https://gael-boyenval.github.io',
  name: 'gaelboyenval.fr',
});

import '../src/styles/GlobalStyles';

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
