import { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@repo/ui/components/ui/tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  // TODO - autodocs is failing to parse the types for this component.
  // TYPES:
  // interface TabsProps extends PrimitiveDivProps {
  //   /** The value for the selected tab, if controlled */
  //   value?: string;
  //   /** The value of the tab to select by default, if uncontrolled */
  //   defaultValue?: string;
  //   /** A function called when a new tab is selected */
  //   onValueChange?: (value: string) => void;
  //   /**
  //    * The orientation the tabs are layed out.
  //    * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
  //    * @defaultValue horizontal
  //    */
  //   orientation?: RovingFocusGroupProps['orientation'];
  //   /**
  //    * The direction of navigation between toolbar items.
  //    */
  //   dir?: RovingFocusGroupProps['dir'];
  //   /**
  //    * Whether a tab is activated automatically or manually.
  //    * @defaultValue automatic
  //    * */
  //   activationMode?: 'automatic' | 'manual';
  //}
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-8">
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
        <TabsContent value="tab3">Content for Tab 3</TabsContent>
      </Tabs>

      <Tabs defaultValue="tab1">
        <TabsList className="flex-col">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
        <TabsContent value="tab3">Content for Tab 3</TabsContent>
      </Tabs>
    </div>
  ),
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};
export const Focus: Story = {
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};
export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger disabled value="tab1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger disabled value="tab2">
          Tab 2
        </TabsTrigger>
        <TabsTrigger disabled value="tab3">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};

export const WithControls: Story = {
  parameters: {
    controls: { disable: false },
  },
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
    value: "tab2",
  },
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["tab1", "tab2", "tab3"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    value: {
      control: "select",
      options: ["tab1", "tab2", "tab3"],
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};
