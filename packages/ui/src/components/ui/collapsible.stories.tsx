import { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@repo/ui/components/ui/collapsible";
import { Button } from "@repo/ui/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  // TODO - autodocs is failing to parse the types for this component.
  // TYPES:
  //   interface CollapsibleProps extends PrimitiveDivProps {
  //     defaultOpen?: boolean;
  //     open?: boolean;
  //     disabled?: boolean;
  //     onOpenChange?(open: boolean): void;
  // }
  parameters: {
    layout: "centered",
    controls: { hideNoControlsWarning: true, disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline">
              Toggle{" "}
              {isOpen ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            <div className="rounded-md border p-4">
              <h4 className="text-sm font-medium">Collapsible Content</h4>
              <p className="text-sm">
                This content can be expanded or collapsed.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="rounded-md border p-4">
          <h4 className="text-sm font-medium">Default Open Content</h4>
          <p className="text-sm">This content is initially open.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
