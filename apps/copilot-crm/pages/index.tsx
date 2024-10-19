// components
import { Layout } from "@/components/layout";
import {
  AutomationCard,
  ConditionBlock,
  AutomationCondition,
} from "@/components/automation-card";

// ui
import { Button } from "@repo/ui/components/ui/button";
import * as Text from "@repo/ui/components/ui/text";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import { Breadcrumbs } from "@repo/ui/components/ui/breadcrumbs";

// mocks TODO - use MSW
import { AUTOMATION_MOCK_DATA } from "@repo/mocks/automation-builder";

/**
 * Mock tab views
 */
export const MockViewAutomationsHistory = () => (
  <div>
    <Text.Heading size="sm">Automations History</Text.Heading>
    <Text.Body>
      Cold-pressed ethical next level tote bag poutine art party hashtag
      affogato polaroid seitan vibecession af bespoke. Humblebrag selfies
      whatever hoodie meggings health goth umami mukbang gastropub fashion axe.
      Blog vaporware echo park, pinterest man bun wayfarers fixie pickled
      jianbing ethical heirloom keytar. Kale chips knausgaard beard master
      cleanse sriracha listicle offal coloring book la croix. Asymmetrical
      kombucha poutine, normcore meggings hella pabst swag bitters kitsch marfa.
      Literally cray seitan hella chambray grailed solarpunk slow-carb ethical.
    </Text.Body>
  </div>
);

export const MockViewAutomationsReview = () => (
  <div>
    <Text.Heading size="sm">Automations Review</Text.Heading>
    <Text.Body>
      Cold-pressed ethical next level tote bag poutine art party hashtag
      affogato polaroid seitan vibecession af bespoke. Humblebrag selfies
      whatever hoodie meggings health goth umami mukbang gastropub fashion axe.
      Blog vaporware echo park, pinterest man bun wayfarers fixie pickled
      jianbing ethical heirloom keytar. Kale chips knausgaard beard master
      cleanse sriracha listicle offal coloring book la croix. Asymmetrical
      kombucha poutine, normcore meggings hella pabst swag bitters kitsch marfa.
      Literally cray seitan hella chambray grailed solarpunk slow-carb ethical.
    </Text.Body>
  </div>
);

export default function Home() {
  // tab state
  return (
    <Layout
      headbar={
        <>
          <Breadcrumbs
            layers={["Marketing", "Mock", "Next", "Automations (2)"]}
          />
          <div className="flex flex-row gap-3">
            <Button variant="outline">New Sequence Automation</Button>
            <Button variant="fill">New +</Button>
          </div>
        </>
      }
    >
      <Tabs defaultValue="automations-index" className="">
        <TabsList>
          <TabsTrigger value="automations-index">Automations</TabsTrigger>
          <TabsTrigger value="automations-history">History</TabsTrigger>
          <TabsTrigger value="automations-review">Review</TabsTrigger>
        </TabsList>
        <TabsContent value="automations-history">
          <div className="max-w-[600px]">
            <MockViewAutomationsHistory />
          </div>
        </TabsContent>
        <TabsContent value="automations-review">
          <div className="max-w-[600px]">
            <MockViewAutomationsReview />
          </div>
        </TabsContent>

        <TabsContent value="automations-index">
          <div className="flex flex-col gap-4">
            {AUTOMATION_MOCK_DATA.map(({ blocks, ...cardProps }, i) => (
              <AutomationCard key={i} {...cardProps}>
                {blocks && (
                  <AutomationCondition>
                    {blocks.map(({ block, children }, i) => (
                      <ConditionBlock block={block.toUpperCase()} key={i}>
                        {children.map((child, j) => {
                          // is this a single
                          const notNested = typeof child === "string";

                          if (notNested) {
                            return child;
                          }

                          // Probably need a cleaner recursive setup here

                          return (
                            <ConditionBlock block={child.block} key={j}>
                              {child.children.map((x, _k) => {
                                if (typeof x === "string") {
                                  return x;
                                }
                              })}
                            </ConditionBlock>
                          );
                        })}
                      </ConditionBlock>
                    ))}
                  </AutomationCondition>
                )}
              </AutomationCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
