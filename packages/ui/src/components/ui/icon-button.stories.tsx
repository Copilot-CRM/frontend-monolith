import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@repo/ui/components/ui/icon-button";
import { Plus, Minus, X } from "lucide-react";
import { fn } from "@storybook/test";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Showcase: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconButton variant="fill" size="md">
        <Plus />
      </IconButton>
      <IconButton variant="ghost" size="md">
        <Plus />
      </IconButton>
      <IconButton variant="fill" size="sm">
        <Plus />
      </IconButton>
      <IconButton variant="ghost" size="sm">
        <Plus />
      </IconButton>
    </div>
  ),
};

export const FillDisabled: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <IconButton variant="fill" size="md" disabled>
          <Plus />
        </IconButton>
        <IconButton variant="ghost" size="md" disabled>
          <Plus />
        </IconButton>
        <IconButton variant="fill" size="sm" disabled>
          <Plus />
        </IconButton>
        <IconButton variant="ghost" size="sm" disabled>
          <Plus />
        </IconButton>
      </div>
    );
  },
  args: {
    variant: "fill",
    size: "md",
    disabled: true,
  },
};

export const Hover: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <IconButton variant="fill" size="md">
          <Plus />
        </IconButton>
        <IconButton variant="ghost" size="md">
          <Plus />
        </IconButton>
        <IconButton variant="fill" size="sm">
          <Plus />
        </IconButton>
        <IconButton variant="ghost" size="sm">
          <Plus />
        </IconButton>
      </div>
    );
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const Focus: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <IconButton variant="fill" size="md">
          <Plus />
        </IconButton>
        <IconButton variant="ghost" size="md">
          <Plus />
        </IconButton>
        <IconButton variant="fill" size="sm">
          <Plus />
        </IconButton>
        <IconButton variant="ghost" size="sm">
          <Plus />
        </IconButton>
      </div>
    );
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const Active: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <IconButton variant="fill" size="md">
          <Plus />
        </IconButton>
        <IconButton variant="ghost" size="md">
          <Plus />
        </IconButton>
        <IconButton variant="fill" size="sm">
          <Plus />
        </IconButton>
        <IconButton variant="ghost" size="sm">
          <Plus />
        </IconButton>
      </div>
    );
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const Interactive: Story = {
  render: (args) => {
    return (
      <IconButton {...args}>
        <Plus />
      </IconButton>
    );
  },
  parameters: {
    controls: { disable: false },
  },
  args: {
    variant: "fill", // Set default value for variant here
    size: "md", // Set default value for size here
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["fill", "ghost"],
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

const overrideClasses =
  "bg-[magenta] hover:bg-[#bada55] text-white hover:text-[magenta]";

export const CustomClasses: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <IconButton size="md" className={overrideClasses}>
          <Plus />
        </IconButton>
        <IconButton size="sm" className={overrideClasses}>
          <Plus />
        </IconButton>
      </div>
    );
  },
};
