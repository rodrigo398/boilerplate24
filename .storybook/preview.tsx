import React from 'react'
import type { Preview } from '@storybook/react'

import { Box } from '@mui/material'
import Providers from '../src/providers'

const decorators = [
  (StoryFn, context) =>
    context ? (
      <Providers>
        <Box p={3}>
          <StoryFn />
        </Box>
      </Providers>
    ) : (
      <StoryFn />
    ),
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators,
}

export default preview
