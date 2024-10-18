import type { Meta, StoryObj } from "@storybook/react";
import { ChevronToggle } from "./chevron-toggle";

const meta: Meta<typeof ChevronToggle> = {
  component: ChevronToggle,
  title: "UI/ChevronToggle",
};

export default meta;
type Story = StoryObj<typeof ChevronToggle>;

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-row gap-4">
      <ChevronToggle isOpen={false} />
      <ChevronToggle isOpen={false} alt={true} />
      <ChevronToggle isOpen={false} size={24} />
      <ChevronToggle isOpen={false} alt={true} size={24} />
      <ChevronToggle isOpen={true} />
      <ChevronToggle isOpen={true} alt={true} />
      <ChevronToggle isOpen={true} size={24} />
      <ChevronToggle isOpen={true} alt={true} size={24} />
    </div>
  ),
};

export const WithControls: Story = {
  args: {
    isOpen: false,
    alt: false,
    size: 24,
  },
  argTypes: {
    classNames: {
      table: {
        disable: true,
      },
    },
    alt: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
  },
  render: (args) => (
    <div className="flex items-start">
      <ChevronToggle {...args} />
    </div>
  ),
};
