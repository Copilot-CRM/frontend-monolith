import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@repo/ui/components/ui/toggle";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  tags: ["autodocs"],
  title: "UI/Toggle",
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Showcase: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Toggle variant="and-or" size="sm" />
      <Toggle variant="and-or" size="md" />
      <Toggle variant="off-on" size="sm" />
      <Toggle variant="off-on" size="md" />
      <Toggle variant="and-or" size="sm" pressed />
      <Toggle variant="and-or" size="md" pressed />
      <Toggle variant="off-on" size="sm" pressed />
      <Toggle variant="off-on" size="md" pressed />
    </div>
  ),
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Toggle variant="and-or" size="sm" />
      <Toggle variant="and-or" size="md" />
      <Toggle variant="off-on" size="sm" />
      <Toggle variant="off-on" size="md" />
      <Toggle variant="and-or" size="sm" pressed />
      <Toggle variant="and-or" size="md" pressed />
      <Toggle variant="off-on" size="sm" pressed />
      <Toggle variant="off-on" size="md" pressed />
    </div>
  ),
};
export const Focus: Story = {
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Toggle variant="and-or" size="sm" />
      <Toggle variant="and-or" size="md" />
      <Toggle variant="off-on" size="sm" />
      <Toggle variant="off-on" size="md" />
      <Toggle variant="and-or" size="sm" pressed />
      <Toggle variant="and-or" size="md" pressed />
      <Toggle variant="off-on" size="sm" pressed />
      <Toggle variant="off-on" size="md" pressed />
    </div>
  ),
};
export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Toggle variant="and-or" size="sm" />
      <Toggle variant="and-or" size="md" />
      <Toggle variant="off-on" size="sm" />
      <Toggle variant="off-on" size="md" />
      <Toggle variant="and-or" size="sm" pressed />
      <Toggle variant="and-or" size="md" pressed />
      <Toggle variant="off-on" size="sm" pressed />
      <Toggle variant="off-on" size="md" pressed />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Toggle variant="and-or" size="sm" disabled />
      <Toggle variant="and-or" size="md" disabled />
      <Toggle variant="off-on" size="sm" disabled />
      <Toggle variant="off-on" size="md" disabled />
      <Toggle variant="and-or" size="sm" pressed disabled />
      <Toggle variant="and-or" size="md" pressed disabled />
      <Toggle variant="off-on" size="sm" pressed disabled />
      <Toggle variant="off-on" size="md" pressed disabled />
    </div>
  ),
};

export const WithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    variant: "and-or",
    size: "md",
    pressed: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["and-or", "off-on"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    pressed: {
      control: "boolean",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: "boolean",
    },
  },
  render: (args) => <Toggle {...args} />,
};
