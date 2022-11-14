import { actions } from "@storybook/addon-actions";
import { DocsContainer } from "@storybook/addon-docs";
import { unpackDecorator } from "@kickstartds/core/lib/storybook/helpers";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";
import "../src/index.js";
import "../static/index.css";

import IconSprite from "../src/token/icons/IconSprite";
import Providers from "../src/Providers";
import { LinkProvider } from "../src/docs/LinkProvider";

const myActions = actions("radio");
window.rm.radio.on("*", myActions.radio);

const providerDecorator = (Story, context) => (
  <Providers>
    <Story {...context} />
  </Providers>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: { order: ["Docs", ["Welcome"]] },
  },
  designToken: {
    disable: true,
  },
  docs: {
    container: (props) => (
      <LinkProvider>
        <Providers>
          <IconSprite />
          <DocsContainer {...props} />
        </Providers>
      </LinkProvider>
    ),
  },
  playroom: {
    url:
      process.env.NODE_ENV === "production"
        ? "http://localhost:9000/playroom/"
        : "http://localhost:9000",
  },
};

export const decorators = [
  unpackDecorator,
  providerDecorator,
  (Story) => (
    <>
      <IconSprite />
      <Story />
    </>
  ),
];
