import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "@repo/ui/components/ui/radio-group";
import { fn } from "@storybook/test";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
  args: {
    onValueChange: fn(),
  },
  // TODO: missing types in argsTable
  //   interface RadioGroupProps extends PrimitiveDivProps {
  //     name?: RadioGroupContextValue['name'];
  //     required?: React.ComponentPropsWithoutRef<typeof Radio>['required'];
  //     disabled?: React.ComponentPropsWithoutRef<typeof Radio>['disabled'];
  //     dir?: RovingFocusGroupProps['dir'];
  //     orientation?: RovingFocusGroupProps['orientation'];
  //     loop?: RovingFocusGroupProps['loop'];
  //     defaultValue?: string;
  //     value?: RadioGroupContextValue['value'];
  //     onValueChange?: RadioGroupContextValue['onValueChange'];
  // }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Showcase: Story = {
  render: () => (
    <div className="grid gap-8">
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="option3" />
          <label htmlFor="option3">Option 3</label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="default" className="space-y-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="default" />
          <label htmlFor="default">Default</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="disabled" id="disabled" disabled />
          <label htmlFor="disabled">Disabled</label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};
export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};

export const WithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    defaultValue: "option1",
  },
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["option1", "option2", "option3"],
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    onValueChange: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <RadioGroup defaultValue="option1" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};
