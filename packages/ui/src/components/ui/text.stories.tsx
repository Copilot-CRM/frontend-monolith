import { Meta, StoryObj } from "@storybook/react";
import { Body, Heading, Keyword } from "./text";

const meta: Meta = {
  title: "UI/Text",
  component: Body,
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-4">
        <Body>Default Body</Body>
        <Body weight="medium">Medium Body</Body>
        <Body weight="bold">Bold Body</Body>
        <Body size="sm">Small Body</Body>
        <Body size="sm" weight="medium">
          Small Medium Body
        </Body>
        <Body size="sm" weight="bold">
          Small Bold Body
        </Body>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Heading>Default Heading</Heading>
        <Heading size="sm">Small Heading</Heading>
        <Heading size="lg">Large Heading</Heading>
        <Heading size="xl">Extra Large Heading</Heading>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Keyword>Default Keyword</Keyword>
        <Keyword size="sm">Small Keyword</Keyword>
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-2">
      <Body>Default Body Text</Body>
      <Body weight="medium">Medium Body Text</Body>
      <Body weight="bold">Bold Body Text</Body>
      <Body size="sm">Small Body Text</Body>
    </div>
  ),
};

export const HeadingText: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading>Default Heading</Heading>
      <Heading size="sm">Small Heading</Heading>
      <Heading size="md">Medium Heading</Heading>
      <Heading size="lg">Large Heading</Heading>
      <Heading size="xl">Extra Large Heading</Heading>
    </div>
  ),
};

export const KeywordText: Story = {
  render: () => (
    <div className="space-y-2">
      <Keyword>Default Keyword</Keyword>
      <Keyword size="sm">Small Keyword</Keyword>
    </div>
  ),
};

export const HeadingWithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    size: "md",
    children: "Heading Text",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    children: {
      control: "text",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    weight: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return <Heading {...args}></Heading>;
  },
};

export const BodyWithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    size: "md",
    weight: "medium",
    children: "Body Text",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    children: {
      control: "text",
    },
    weight: {
      control: "select",
      options: ["default", "medium", "bold"],
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return <Body {...args}></Body>;
  },
};

export const KeywordWithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    size: "md",
    children: "Keyword Text",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    children: {
      control: "text",
    },
    weight: {
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
  render: (args) => {
    return <Keyword {...args}></Keyword>;
  },
};
