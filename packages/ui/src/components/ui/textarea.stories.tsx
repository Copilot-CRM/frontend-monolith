import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@repo/ui/components/ui/textarea";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "UI/Textarea",
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
  tags: ["autodocs"],
  // All the types are filtered out by the autodocs parser. example: React.TextareaHTMLAttributes
  // This is expected behavior. We only render the components props, in the case it's just weird that the component has no props of it's own outside of the HTML element props.
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Showcase: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Textarea placeholder="Default textarea" />
      <Textarea placeholder="Disabled textarea" disabled />
      <Textarea placeholder="With value" defaultValue="This is some text" />
      <Textarea placeholder="Resizable" style={{ resize: "both" }} />
      <Textarea placeholder="Custom height" className="min-h-[150px]" />
      <Textarea placeholder="Custom width" className="w-64" />
    </div>
  ),
};

export const Hover: Story = {
  args: {
    placeholder: "I'm being hovered",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  args: {
    placeholder: "I'm focused",
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const Active: Story = {
  args: {
    placeholder: "I'm active",
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "I'm disabled",
    disabled: true,
  },
};

export const WithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    placeholder: "I'm some placeholder text",
    value: "This is some text",
    defaultValue: "This is some text",
    disabled: false,
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    defaultValue: {
      control: "text",
    },
  },
  render: (args) => {
    return <Textarea {...args}></Textarea>;
  },
};
