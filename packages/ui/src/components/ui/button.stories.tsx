import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

import { fn } from "@storybook/test";

import { Button } from "@repo/ui/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ["fill", "outline", "ghost"] as const;
const intents = ["default", "action", "danger"] as const;
const sizes = ["sm", "md"] as const;

const IntentVariants = ({ disabled }: { disabled?: boolean }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {variants.map((variant) => (
        <div key={variant} className="space-y-2">
          <h4 className="font-semibold capitalize">{variant}</h4>
          <div className="flex justify-start gap-4">
            {intents.map((intent) => (
              <Button
                disabled={disabled}
                key={`${variant}-${intent}`}
                variant={variant}
                intent={intent}
                className="capitalize"
              >
                {intent}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Showcase: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {variants.map((variant) => (
          <div key={variant} className="space-y-4">
            <h3 className="font-bold text-lg capitalize">{variant}</h3>
            {intents.map((intent) => (
              <div key={intent} className="space-y-2">
                <h4 className="font-semibold capitalize">{intent}</h4>
                {sizes.map((size) => (
                  <div
                    key={`${variant}-${intent}-${size}`}
                    className="flex justify-start gap-2"
                  >
                    <Button
                      variant={variant}
                      intent={intent}
                      size={size}
                      className="capitalize"
                    >
                      {`${variant.charAt(0).toUpperCase() + variant.slice(1)} ${intent} ${size}`}
                    </Button>
                    <Button variant={variant} intent={intent} size={size}>
                      <Plus size={16} />
                      {`With Icon`}
                    </Button>
                    <Button
                      variant={variant}
                      intent={intent}
                      size={size}
                      aria-label={`${variant} ${intent} ${size} icon only`}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const Hover: Story = {
  render: () => {
    return <IntentVariants />;
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const Active: Story = {
  render: () => {
    return <IntentVariants />;
  },
  parameters: {
    pseudo: { active: true },
  },
};
export const Focus: Story = {
  render: () => {
    return <IntentVariants />;
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const Disabled: Story = {
  render: () => {
    return <IntentVariants disabled />;
  },
};

export const Interactive: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    children: "Button",
    variant: "fill", // Set default value for variant here
    intent: "default", // Set default value for intent here
    size: "md", // Set default value for size here
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["fill", "outline", "ghost"],
    },
    intent: {
      control: "select",
      options: ["default", "action", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
