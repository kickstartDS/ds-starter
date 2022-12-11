export default {
  title: "Pages/Demo",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
    controls: { disabled: true },
    playroom: {
      code: '<Demo />'
    }
  },
};

export { Demo } from "./Demo.story";
