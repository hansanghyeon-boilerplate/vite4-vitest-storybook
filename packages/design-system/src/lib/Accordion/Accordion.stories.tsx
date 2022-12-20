import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const preview = () => <Accordion title='Testing'><h4>Content</h4></Accordion>;