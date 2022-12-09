const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-design-token",
      options: { designTokenGlob: "src/token/storybook/*" },
    },
    "@whitespace/storybook-addon-html",
    "storybook-addon-playroom",
    "@kickstartds/storybook-addon-component-tokens",
    "@storybook/addon-a11y",
    "@kickstartds/storybook-addon-jsonschema",
  ],
  framework: "@storybook/react",
  staticDirs: ["../static"],
  // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-implicit-postcss-loader
  features: {
    postcss: false,
  },
  async webpackFinal(config, { configType }) {
    const babelRuleIndex = config.module.rules.findIndex((rule) =>
      rule?.use?.some((u) => u?.loader.includes("babel-loader"))
    );

    config.module.rules[babelRuleIndex].exclude =
      /node_modules\/(?!(@kickstartds\/))|core-js/;

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, "../node_modules")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../src"),
    });

    config.resolve.mainFields = ["browser", "module", "main"];

    return config;
  },
};
