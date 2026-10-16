import type { Preview } from '@storybook/react-vite';
import '../src/index.css';
import '../src/tailwind.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Foundation', 'Common', '*', 'Employee module', 'Leaves module', 'Expenses module', 'Material Tailwind'],
      },
    },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;