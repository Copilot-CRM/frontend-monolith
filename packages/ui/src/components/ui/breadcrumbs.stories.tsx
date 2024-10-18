import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "UI/Breadcrumbs",
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-4">
      <Breadcrumbs layers={["Home"]} />
      <Breadcrumbs layers={["Home", "Category"]} />
      <Breadcrumbs layers={["Home", "Category", "Subcategory"]} />
      <Breadcrumbs layers={["Home", "Category", "Subcategory", "Product"]} />
      <Breadcrumbs
        layers={["Home", "Category", "Subcategory", "Product", "Details"]}
      />
    </div>
  ),
};
