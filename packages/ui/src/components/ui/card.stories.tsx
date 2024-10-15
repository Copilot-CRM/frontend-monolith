import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardBody,
} from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Showcase: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>This is a basic card example.</CardDescription>
        </CardHeader>
        <CardBody>
          <p>Card body content goes here.</p>
        </CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Custom Background</CardTitle>
          <CardDescription>Card with custom background color.</CardDescription>
        </CardHeader>
        <CardBody>
          <p>Card body content goes here.</p>
        </CardBody>
        <CardFooter>
          <Button variant="outline">Action</Button>
        </CardFooter>
      </Card>

      <Card className="border-2 border-primary">
        <CardHeader>
          <CardTitle>Custom Border</CardTitle>
          <CardDescription>Card with custom border style.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Using CardContent instead of CardBody.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Enhanced Shadow</CardTitle>
          <CardDescription>Card with larger shadow.</CardDescription>
        </CardHeader>
        <CardBody>
          <p>Card body content goes here.</p>
        </CardBody>
      </Card>
    </div>
  ),
};
