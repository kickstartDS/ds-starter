import React, { Suspense, lazy, useEffect } from "react";
import Providers from "../components/Providers";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";

const CoreTheme = lazy(() => import("./themes/core"));

const ThemeSelector = ({ theme, children }) => {
  return (
    <>
      <Suspense fallback={<></>}>
        {theme === "core" && <CoreTheme />}
      </Suspense>
      {children}
    </>
  );
};

export default function FrameComponent({ theme, children }) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.style.backgroundColor = "var(--ks-background-color-default)";
  }, []);

  return (
    <ThemeSelector theme={theme}>
      <Providers>{children}</Providers>
    </ThemeSelector>
  );
}
