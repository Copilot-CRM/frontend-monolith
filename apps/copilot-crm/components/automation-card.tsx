import { forwardRef } from "react";
import Link from "next/link";

// ui
import { Button } from "@repo/ui/components/ui/button";
import * as Text from "@repo/ui/components/ui/text";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/components/ui/collapsible";
import { StatusChip } from "@repo/ui/components/ui/status-chip";
import { iconSize } from "@repo/ui/components/ui/icon-button";

// icons
import { ChevronRight, Lock, LockOpen, Eye, EyeOff } from "lucide-react";

// utils
import { cn } from "@repo/ui/lib/utils";

/**
 *
 * Condition block (read only)
 *
 */

interface ConditionBlockProps extends Text.TextBodyProps {
  block: string;
}

const ConditionBlock = ({ block, children, ...props }: ConditionBlockProps) => (
  <Text.Body>
    <span className="font-bold">{block}</span> {children}
  </Text.Body>
);

/**
 *
 * Automation Condition (read only)
 *
 */
export interface AutomationConditionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const AutomationCondition = forwardRef<
  HTMLDivElement,
  AutomationConditionProps
>(({ className, ...props }, ref) => {
  // Base styles
  const _styles =
    "bg-gray-100 py-3 px-4 flex flex-col gap-3 max-w-[700px] border border-solid border-gray-300 rounded";

  return <div ref={ref} className={cn([_styles, className])} {...props} />;
});
AutomationCondition.displayName = "Card";

const IconWrap = ({ className = "", ...props }) => (
  <span
    className={cn("p-1 inline-flex justify-center items-center", className)}
    {...props}
  />
);

/**
 *
 * Automation Card
 *
 */

export type AutomationCardProps = {
  isVisible?: boolean;
  isLocked?: boolean;
  isActive: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const mockDescription =
  "This is an automation description that can be long but will eventually wrap.";

const AutomationCard = ({
  isVisible = true,
  isLocked = false,
  isActive = false,
  title,
  description = mockDescription,
  children,
  ...props
}: AutomationCardProps) => {
  function onEditAutomation() {
    console.log("🤖 edit automation");
  }

  // tab state
  return (
    <Collapsible>
      {/* items */}
      <div className="p-4 flex flex-row bg-white rounded-lg drop-shadow-md">
        <div className="flex flex-row justify-start items-start gap-3 flex-grow">
          {/* toggle */}
          <CollapsibleTrigger>
            {/* #TODO: Replace with icon button */}
            <IconWrap>
              <ChevronRight size={16} />
            </IconWrap>
          </CollapsibleTrigger>

          {/* main */}
          <div className="flex flex-col flex-1">
            {/* header row */}
            <div className="flex flex-row">
              <div className="flex flex-col flex-1">
                <div className="flex flex-row items-center gap-1.5">
                  <Text.Heading size="sm">{title}</Text.Heading>
                  {isVisible ? (
                    <Eye size={iconSize.md} />
                  ) : (
                    <EyeOff size={iconSize.md} />
                  )}
                  {isLocked ? (
                    <Lock size={iconSize.md} />
                  ) : (
                    <LockOpen size={iconSize.md} />
                  )}
                </div>
                <Text.Body>{description}</Text.Body>
              </div>
              {/* Right Sice */}
              <div className="flex flex-row justify-start items-center gap-6 ">
                {isActive ? (
                  <StatusChip intent="success">On</StatusChip>
                ) : (
                  <StatusChip intent="danger">Off</StatusChip>
                )}
                <Button variant="outline" onClick={onEditAutomation} asChild>
                  <Link href={"/automation-builder"}>Edit Automation</Link>
                </Button>
              </div>
            </div>
            {/* content */}
            <CollapsibleContent className="CollapsibleContent">
              <div className="pt-6 pb-2">{children}</div>
            </CollapsibleContent>
          </div>
        </div>
      </div>
    </Collapsible>
  );
};

// <div>
//   This is an automation description that can be long but
//   will eventually wrap.
// </div>
// {/* description */}

export { ConditionBlock, AutomationCondition, AutomationCard };
