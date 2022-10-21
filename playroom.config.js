const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  components: "./src/playroom/components.ts",
  outputPath: "./dist/playroom",

  title: "Demo Playroom",
  themes: "./src/playroom/themes/index.ts",
  snippets: "./src/playroom/snippets.ts",
  frameComponent: "./src/playroom/FrameComponent.tsx",
  // scope: './playroom/useScope.js',
  widths: [425, 768, 1440],
  port: 9000,
  openBrowser: true,
  paramType: "search", // default is 'hash'
  exampleCode: `
    <Button
      href="#"
      icon="chevron-right"
      label="More info"
    />
  `,
  baseUrl: "/playroom/",
  iframeSandbox: "allow-scripts",
  typeScriptFiles: ["src/components/**/*.{ts,tsx}", "!**/node_modules"],
  webpackConfig: () => ({
    plugins: [
      new CopyPlugin({
        patterns: [
          "static",
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules\/(?!(@kickstartds)\/).*/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", { loader: "css-loader", options: { url: false } }],
          exclude: /node_modules\/(?!(@kickstartds)\/).*/,
        },
        {
          test: /\.scss$/,
          use: ["style-loader", { loader: "css-loader", options: { url: false } }, "sass-loader"],
          exclude: /node_modules\/(?!(@kickstartds)\/).*/,
        },
      ],
    },
  }),
};
