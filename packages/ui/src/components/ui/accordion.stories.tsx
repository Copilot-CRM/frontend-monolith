import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@repo/ui/components/ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  // TODO - autodocs is failing to parse the types for this component.
  // TYPES:
  // interface AccordionSingleProps extends AccordionImplSingleProps {
  //     type: 'single';
  // }
  // interface AccordionMultipleProps extends AccordionImplMultipleProps {
  //     type: 'multiple';
  // }
  // declare const Accordion: React__default.ForwardRefExoticComponent<(AccordionSingleProps | AccordionMultipleProps) & React__default.RefAttributes<HTMLDivElement>>;
  // interface AccordionImplSingleProps extends AccordionImplProps {
  //     /**
  //      * The controlled stateful value of the accordion item whose content is expanded.
  //      */
  //     value?: string;
  //     /**
  //      * The value of the item whose content is expanded when the accordion is initially rendered. Use
  //      * `defaultValue` if you do not need to control the state of an accordion.
  //      */
  //     defaultValue?: string;
  //     /**
  //      * The callback that fires when the state of the accordion changes.
  //      */
  //     onValueChange?(value: string): void;
  //     /**
  //      * Whether an accordion item can be collapsed after it has been opened.
  //      * @default false
  //      */
  //     collapsible?: boolean;
  // }
  // interface AccordionImplMultipleProps extends AccordionImplProps {
  //     /**
  //      * The controlled stateful value of the accordion items whose contents are expanded.
  //      */
  //     value?: string[];
  //     /**
  //      * The value of the items whose contents are expanded when the accordion is initially rendered. Use
  //      * `defaultValue` if you do not need to control the state of an accordion.
  //      */
  //     defaultValue?: string[];
  //     /**
  //      * The callback that fires when the state of the accordion changes.
  //      */
  //     onValueChange?(value: string[]): void;
  // }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const MultiAccordion: Story = {
  render: () => (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can it be used in multiple mode?</AccordionTrigger>
        <AccordionContent>
          Yes, you can set the type prop to "multiple" to allow multiple items
          to be open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styleable?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses Tailwind CSS which makes it easy to style.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleAccordion: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is an accordion?</AccordionTrigger>
        <AccordionContent>
          An accordion is a vertically stacked set of interactive headings that
          each reveal a section of content.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          It uses JavaScript to expand and collapse content sections when the
          headings are clicked.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// You can add a new story to demonstrate the usage of controls
export const WithControls: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-1",
  },
  argTypes: {
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
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>Content for the first item.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item</AccordionTrigger>
        <AccordionContent>Content for the second item.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
