import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./toaster";
import { useToast } from "@repo/ui/hooks/use-toast";
import { Button } from "@repo/ui/components/ui/button";

const meta: Meta<typeof Toaster> = {
  title: "UI/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Interactive: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div>
        <Button
          onClick={() =>
            toast({
              title: "Default Toast",
              description: "This is a default toast message.",
            })
          }
        >
          Show Default Toast
        </Button>
        <Toaster />
      </div>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div>
        <Button
          onClick={() =>
            toast({
              variant: "destructive",
              title: "Destructive Toast",
              description: "This is a destructive toast message.",
            })
          }
        >
          Show Destructive Toast
        </Button>
        <Toaster />
      </div>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div>
        <Button
          onClick={() =>
            toast({
              title: "Toast with Action",
              description: "This toast has an action button.",
              action: <Button variant="outline">Action</Button>,
            })
          }
        >
          Show Toast with Action
        </Button>
        <Toaster />
      </div>
    );
  },
};

export const WithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    title: "Toast with Action",
    description: "This toast has an action button.",
  },
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
  // TODO - the type of the args is mismatching with the actual props that we pass to the toast.
  render: (args: any) => {
    const { toast } = useToast();
    return (
      <div>
        <Button
          onClick={() =>
            toast({
              title: args.title,
              description: args.description,
            })
          }
        >
          Show Toast with Action
        </Button>
        <Toaster />
      </div>
    );
  },
};
