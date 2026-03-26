import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TabsDefault, TabsWithIcon, TabsCustomAnimation,
  TransparentTabs, VerticalTabs, UnderlineTabs,
} from './Tabs';

const meta = {
  title: 'Material Tailwind/Tabs',
  component: TabsDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof TabsDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function TabsDefault() {
  const data = [
    { label: "HTML", value: "html", desc: "It really matters and then like it really doesn't matter." },
    { label: "React", value: "react", desc: "Because it's about motivating the doers." },
    { label: "Vue", value: "vue", desc: "We're not always in the position that we want to be at." },
    { label: "Angular", value: "angular", desc: "Because it's about motivating the doers." },
    { label: "Svelte", value: "svelte", desc: "We're not always in the position that we want to be at." },
  ];

  return (
    <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>{label}</Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>{desc}</TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}`,
      },
    },
  },
};
export const WithIcon: Story = { render: () => <TabsWithIcon /> };
export const CustomAnimation: Story = { render: () => <TabsCustomAnimation /> };
export const Transparent: Story = { render: () => <TransparentTabs /> };
export const Vertical: Story = { render: () => <VerticalTabs /> };
export const Underline: Story = { render: () => <UnderlineTabs /> };
