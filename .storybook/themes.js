import { create } from "@storybook/theming";
import * as tokens from '../src/token/storybook/tokens';

export const light = create({
  base: "light",

  colorPrimary: tokens.KsColorPrimaryBase,
  colorSecondary: tokens.KsColorPrimaryBase,

  // UI
  appBg: tokens.KsColorPrimaryToBg9Base,
  appContentBg: tokens.KsBackgroundColorDefaultBase,
  appBorderColor: tokens.KsColorPrimaryAlpha2Base,
  appBorderRadius: tokens.KsBorderRadiusCard,

  // Typography
  fontBase: tokens.KsFontFamilyInterface,
  fontCode: tokens.KsFontFamilyMono,

  // Text colors
  textColor: tokens.KsTextColorDefaultBase,
  textInverseColor: tokens.KsTextColorDefaultInvertedBase,

  // Toolbar default and active colors
  barTextColor: tokens.KsColorPrimaryAlpha6Base,
  barSelectedColor: tokens.KsColorPrimaryBase,
  barBg: tokens.KsBackgroundColorDefaultBase,

  // Form colors
  inputBg: tokens.KsBackgroundColorInterfaceInteractiveBase,
  inputBorder: tokens.KsColorFgToBg7Base,
  inputTextColor: tokens.KsTextColorInterfaceInteractiveBase,
  inputBorderRadius: tokens.KsBorderRadiusControl,

  brandTitle: "Your kickstartDS Storybook",
  brandUrl: "https://www.kickstartDS.com",
  brandImage: "/logo.svg",
});
