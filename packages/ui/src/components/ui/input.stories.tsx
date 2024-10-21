import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@repo/ui/components/ui/input";
import { fn } from "@storybook/test";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input",
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true, disable: false },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Showcase: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="With value" value="Hello, World!" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="date" />
      <Input type="time" />
      <Input type="file" />
      <Input type="color" />
      <Input type="range" />
    </div>
  ),
};

export const HoverState: Story = {
  args: {
    placeholder: "Hover over me",
  },
  parameters: {
    pseudo: { hover: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="With value" value="Hello, World!" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="date" />
      <Input type="time" />
      <Input type="file" />
      <Input type="color" />
      <Input type="range" />
    </div>
  ),
};

export const FocusState: Story = {
  args: {
    placeholder: "Focus on me",
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="With value" value="Hello, World!" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="date" />
      <Input type="time" />
      <Input type="file" />
      <Input type="color" />
      <Input type="range" />
    </div>
  ),
};
export const ActiveState: Story = {
  args: {
    placeholder: "Focus on me",
  },
  parameters: {
    pseudo: { active: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="With value" value="Hello, World!" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="date" />
      <Input type="time" />
      <Input type="file" />
      <Input type="color" />
      <Input type="range" />
    </div>
  ),
};

export const DisabledState: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Input placeholder="Default input" disabled />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="With value" value="Hello, World!" disabled />
      <Input type="password" placeholder="Password input" disabled />
      <Input type="number" placeholder="Number input" disabled />
      <Input type="date" disabled />
      <Input type="time" disabled />
      <Input type="file" disabled />
      <Input type="color" disabled />
      <Input type="range" disabled />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    placeholder: "Interactive input",
    type: "text",
    disabled: false,
  },
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "password",
        "number",
        "date",
        "time",
        "file",
        "color",
        "range",
      ],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    controls: { disable: false },
  },
  render: (args) => <Input {...args} />,
};
