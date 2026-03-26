import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Orbit HR Design System',
  brandImage: '/orbit-logo.png',
  brandUrl: '/',
});

addons.setConfig({ theme });
