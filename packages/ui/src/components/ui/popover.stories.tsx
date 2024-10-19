import { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@repo/ui/components/ui/popover";
import { Button } from "@repo/ui/components/ui/button";

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover,
  tags: ["autodocs"],
  // TODO - autodocs is failing to parse the types for this component.
  // TYPES
  //   interface PopoverProps {
  //     children?: React.ReactNode;
  //     open?: boolean;
  //     defaultOpen?: boolean;
  //     onOpenChange?: (open: boolean) => void;
  //     modal?: boolean;
  // }
  parameters: {
    layout: "centered",
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Showcase: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-20">
      {["top", "right", "left", "bottom"].map((side) => (
        <Popover key={side} defaultOpen={true} open={true}>
          <PopoverTrigger asChild>
            <Button variant="outline">Popover {side}</Button>
          </PopoverTrigger>
          <PopoverContent side={side as any}>
            <p>This is a popover on the {side}.</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};

export const AlignmentVariants: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      {["start", "center", "end"].map((align) => (
        <Popover key={align}>
          <PopoverTrigger asChild>
            <Button variant="outline">Align {align}</Button>
          </PopoverTrigger>
          <PopoverContent align={align as any}>
            <p>This popover is aligned to the {align}.</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <h3 className="font-bold mb-2">Popover Title</h3>
        <p>This is a popover with custom content and styling.</p>
        <Button className="mt-4" size="sm">
          Action Button
        </Button>
      </PopoverContent>
    </Popover>
  ),
};

export const WithControls: Story = {
  args: {
    defaultOpen: false,
    open: false,
    modal: false,
  },
  parameters: {
    controls: { disable: false },
  },
  argTypes: {
    open: {
      control: "boolean",
    },
    defaultOpen: {
      control: "boolean",
    },
    modal: {
      control: "boolean",
    },
  },
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button>Interactive Demo</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>this is some popover content</p>
      </PopoverContent>
    </Popover>
  ),
};
