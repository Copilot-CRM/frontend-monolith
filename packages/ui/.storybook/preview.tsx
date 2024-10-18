import type { Preview } from "@storybook/react";
import React from "react";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from "@storybook/blocks";

import "../dist/output.css";

const preview: Preview = {
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgTypes />
        </>
      ),
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
