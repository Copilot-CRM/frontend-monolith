import { Meta, StoryObj } from "@storybook/react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@repo/ui/components/ui/alert";
import { AlertTriangle, Info } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Showcase = () => {
  return (
    <div className="flex flex-col  gap-4">
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Default Alert With Icon</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          This is a destructive alert message.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Destructive Alert With Icon</AlertTitle>
        <AlertDescription>
          This is a destructive alert message.
        </AlertDescription>
      </Alert>
      <Alert variant="warn">
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>This is a warning alert message.</AlertDescription>
      </Alert>
      <Alert variant="warn">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning Alert With Icon</AlertTitle>
        <AlertDescription>This is a warning alert message.</AlertDescription>
      </Alert>
    </div>
  );
};

export const Interactive: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    variant: "default",
    title: "Alert",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "warn"],
    },
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>
        <span className="capitalize">{args.variant}</span> {args.title}
      </AlertTitle>
      <AlertDescription>
        This is a {args.variant} alert message.
      </AlertDescription>
    </Alert>
  ),
};
