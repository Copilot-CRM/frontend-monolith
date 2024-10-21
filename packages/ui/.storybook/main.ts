import type { StorybookConfig } from "@storybook/nextjs";
import { join, dirname } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-storysource"),
    getAbsolutePath("storybook-addon-pseudo-states"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",

    // was running into a "displayName" issue after adding react-docgen-typescript - if the first component in the file has a displayName with a space, it was breaking storybook.
    // similar to this issue https://github.com/storybookjs/storybook/issues/15401
    // this custom resolver fixes it.
    reactDocgenTypescriptOptions: {
      componentNameResolver: (expression) => {
        return expression.getName();
      },
      shouldExtractLiteralValuesFromEnum: true,
      // this is a custom prop filter that removes props that are not relevant to the story like those coming from the ButtonHTMLAttributes and react types
      propFilter: (prop) => {
        if (prop.parent) {
          return (
            !prop.parent.fileName.includes("node_modules") &&
            !/node_modules\/@types\/react\//.test(prop.parent.fileName) &&
            !/ButtonHTMLAttributes<HTMLButtonElement>/.test(prop.parent.name)
          );
        }
        return true;
      },
    },
  },
  // LEGZ
  // this was in theory supposed to work in tandem with pointing at the global.css file in the root of the project.
  // instead I've setup the build:css script in the ui package.json to compile the global.css file into a dist/output.css file.
  // webpackFinal: async (config) => {
  //   if (config.module && config.module.rules) {
  //     config.module.rules.push({
  //       test: /\.css$/,
  //       use: [
  //         "style-loader",
  //         {
  //           loader: "css-loader",
  //           options: {
  //             importLoaders: 1,
  //           },
  //         },
  //         "postcss-loader",
  //       ],
  //       include: [join(__dirname, "..", "src")],
  //     });
  //   }
  //   return config;
  // },
};

export default config;
