import { Meta, StoryObj } from "@storybook/react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@repo/ui/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Showcase: Story = {
  render: () => {
    const renderToggleGroup = (size: "sm" | "md" | "lg") => {
      const iconSizes = {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      };
      const iconSize = iconSizes[size];
      const sizeTitle =
        size === "md" ? "Default" : size === "sm" ? "Small" : "Large";

      return (
        <div className="flex flex-col gap-2 items-start w-full">
          <h3 className="text-lg font-semibold">{sizeTitle} Size</h3>
          <ToggleGroup type="multiple" size={size === "md" ? undefined : size}>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className={iconSize} />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className={iconSize} />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className={iconSize} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="multiple" size={size === "md" ? undefined : size}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <h3 className="text-sm font-semibold">Outline Variant</h3>
          <ToggleGroup type="multiple" size={size === "md" ? undefined : size}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
        </div>
      );
    };

    return (
      <div className="flex flex-row gap-4 w-full">
        {renderToggleGroup("sm")}
        {renderToggleGroup("lg")}
      </div>
    );
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Focus: Story = {
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true,
    },
  },
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
export const Active: Story = {
  parameters: {
    pseudo: {
      active: true,
    },
  },
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="multiple" variant="outline" disabled>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const MultipleSelect: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const SingleSelect: Story = {
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    size: "sm",
    variant: "default",
    type: "single",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "lg"],
    },
    type: {
      control: "select",
      options: ["multiple", "single"],
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
