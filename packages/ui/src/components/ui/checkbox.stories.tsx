import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@repo/ui/components/ui/checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "UI/Checkbox",
  parameters: {
    layout: "centered",
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Showcase: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox />
        <label className="text-sm">Default Checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox defaultChecked />
        <label className="text-sm">Checked Checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox disabled />
        <label className="text-sm">Disabled Checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox disabled defaultChecked />
        <label className="text-sm">Disabled and Checked Checkbox</label>
      </div>
    </div>
  ),
};

export const HoverState: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox />
        <label className="text-sm">Default Checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox defaultChecked />
        <label className="text-sm">Checked Checkbox</label>
      </div>
    </div>
  ),
};

export const FocusState: Story = {
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox />
        <label className="text-sm">Default Checkbox</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox defaultChecked />
        <label className="text-sm">Checked Checkbox</label>
      </div>
    </div>
  ),
};
