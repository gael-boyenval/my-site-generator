import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react'
import '../src/styles/GlobalStyles'

import chaptersAddon from 'react-storybook-addon-chapters'

addDecorator(story => (
  <MemoryRouter initialEntries={['/settings']}>{story()}</MemoryRouter>
))

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
