import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "@repo/ui/components/ui/star-rating";
import { fn } from "@storybook/test";

const meta: Meta<typeof StarRating> = {
  title: "UI/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
  argTypes: {
    rating: { control: { type: "range", min: 0, max: 5, step: 1 } },
    totalStars: { control: { type: "number", min: 1, max: 10 } },
    onRatingChange: { action: "rating changed" },
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    rating: 3.5,
    totalStars: 5,
  },
};

export const CustomTotalStars: Story = {
  args: {
    rating: 7,
    totalStars: 10,
  },
};

export const ZeroRating: Story = {
  args: {
    rating: 0,
    totalStars: 5,
  },
};

export const FullRating: Story = {
  args: {
    rating: 5,
    totalStars: 5,
  },
};

export const Interactive: Story = {
  args: {
    rating: 1,
    totalStars: 5,
  },
  parameters: {
    controls: { disable: false },
  },
  argTypes: {
    onRatingChange: {
      table: {
        disable: true,
      },
    },
    rating: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    const [rating, setRating] = useState(args.rating);
    return (
      <StarRating
        {...args}
        rating={rating}
        onRatingChange={(newRating) => {
          setRating(newRating);
        }}
      />
    );
  },
};
export const WithControls: Story = {
  args: {
    rating: 1,
    totalStars: 5,
  },
  parameters: {
    controls: { disable: false },
  },
  argTypes: {
    onRatingChange: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return <StarRating {...args} />;
  },
};
