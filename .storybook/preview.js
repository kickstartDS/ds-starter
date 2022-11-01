import { actions } from "@storybook/addon-actions";
import { DocsContainer } from "@storybook/addon-docs";
// TODO is this actually needed, when it's also imported as part of `src/dist.js`?
// feels like one should be able to go?
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import "lazysizes/plugins/attrchange/ls.attrchange";
import {
  unpackDecorator,
} from "@kickstartds/core/lib/storybook/helpers";

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
    storySort(a, b) {
      // welcome page to top!
      if (a[0].includes("welcome")) {
        return -1;
      }

      // alphabetically
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    },
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
    url: process.env.NODE_ENV === 'production' ? 'http://localhost:9000/playroom/' : 'http://localhost:9000',
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
