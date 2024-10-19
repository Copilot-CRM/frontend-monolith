import { Label } from "@repo/ui/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "UI/Label",
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;
const weights = ["normal", "medium", "bold"] as const;
const sizes = ["sm", "md"] as const;

export const ComponentShowcase = () => (
  <div className="grid grid-cols-3 gap-4">
    {weights.map((weight) =>
      sizes.map((size) => (
        <Label key={`${weight}-${size}`} weight={weight} size={size}>
          Label ({weight}, {size})
        </Label>
      )),
    )}
  </div>
);

export const Interactive: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    children: "Label",
    weight: "normal",
    size: "md",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "bold"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
  render: (args) => <Label {...args} />,
};
