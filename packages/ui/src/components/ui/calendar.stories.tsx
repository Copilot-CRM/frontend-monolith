import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@repo/ui/components/ui/calendar";

const meta: Meta<typeof Calendar> = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  // TODO - autodocs is failing to parse the types for this component.
  // uses daypicker -> https://daypicker.dev/
  // https://daypicker.dev/docs/customization
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const WithControls: Story = {
  args: {
    weekStartsOn: 1,
    mode: "single",
    showOutsideDays: true,
    fixedWeeks: true,
    showWeekNumber: false,
  },
  argTypes: {
    weekStartsOn: {
      control: {
        type: "number",
      },
    },
    mode: {
      control: {
        type: "select",
        options: ["single", "multiple", "range"],
      },
    },
    onSelect: {
      table: {
        disable: true,
      },
    },
    showOutsideDays: {
      control: {
        type: "boolean",
      },
    },
    fixedWeeks: {
      control: {
        type: "boolean",
      },
    },
    showWeekNumber: {
      control: {
        type: "boolean",
      },
    },
  },
  render: (args) => <Calendar {...args} />,
};
