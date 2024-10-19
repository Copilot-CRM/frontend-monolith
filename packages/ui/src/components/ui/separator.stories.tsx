import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@repo/ui/components/ui/separator";

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
  // TODO types are missing

  // interface SeparatorProps extends PrimitiveDivProps {
  //   /**
  //    * Either `vertical` or `horizontal`. Defaults to `horizontal`.
  //    */
  //   orientation?: Orientation;
  //   /**
  //    * Whether or not the component is purely decorative. When true, accessibility-related attributes
  //    * are updated so that that the rendered element is removed from the accessibility tree.
  //    */
  //   decorative?: boolean;
  // }
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Horizontal</h4>
        <Separator className="my-4" />
      </div>
      <div className="space-x-4 flex items-center">
        <h4 className="text-sm font-medium leading-none">Vertical</h4>
        <Separator orientation="vertical" className="h-4" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Custom Color</h4>
          <Separator className="my-4 bg-red-500" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Custom Thickness</h4>
          <Separator className="my-4 h-[2px]" />
        </div>
      </div>
    </div>
  ),
};

export const Decorative: Story = {
  args: {
    decorative: true,
  },
};

export const WithControls: Story = {
  args: {
    decorative: false,
    orientation: "horizontal",
    className: "h-initial",
  },
  parameters: {
    controls: { disable: false },
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: "boolean",
    },
    className: {
      control: "select",
      options: ["h-initial", "h-8", "h-12", "w-initial", "w-20", "w-50"],
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
