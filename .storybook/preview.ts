import type { Preview } from '@storybook/sveltekit';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        // Default options
        dark: { name: 'Dark', value: 'oklch(27.4% 0.006 286.033)' }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  initialGlobals: {
    // Set the initial/default background color by name (e.g., 'light', 'dark', or 'maroon')
    backgrounds: {
      value: 'dark'
    }
  }
};

export default preview;
