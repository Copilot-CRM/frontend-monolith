import type { Meta, StoryObj } from "@storybook/react";

import { StatusChip } from "@repo/ui/components/ui/status-chip";

const meta = {
  title: "UI/StatusChip",
  component: StatusChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatusChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => {
    const intents = ["neutral", "success", "warn", "danger", "action"] as const;

    return (
      <div className="flex flex-row items-start gap-4">
        {intents.map((intent) => (
          <StatusChip key={intent} intent={intent}>
            {intent}
          </StatusChip>
        ))}
      </div>
    );
  },
};

export const WithoutChildren: Story = {
  args: {
    intent: "neutral",
  },
};

export const WithControls: Story = {
  args: {
    intent: "neutral",
    children: "Neutral Text",
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["neutral", "success", "warn", "danger", "action"],
    },
    children: {
      control: "text",
    },
  },
  parameters: {
    controls: { disable: false },
  },
  render: (args) => {
    return <StatusChip {...args} />;
  },
};
