const esbuild = require("esbuild");
const fg = require("fast-glob");
const fs = require("fs-extra");

// https://github.com/evanw/esbuild/issues/619#issuecomment-751995294
const makeAllPackagesExternalPlugin = {
  name: "make-all-packages-external",
  setup(build) {
    const filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/; // Must not start with "/" or "./" or "../"
    build.onResolve({ filter }, (args) => ({
      path: args.path,
      external: true,
    }));
  },
};

const sharedConfig = {
  format: "esm",
  bundle: true,
  plugins: [makeAllPackagesExternalPlugin],
};

(async () => {
  const entryPoints = await fg("src/components/*/*Component.(jsx|tsx)");

  await fs.writeJSON(
    "dist/exports.json",
    entryPoints.reduce((map, entryPoint) => {
      map[entryPoint.split("/")[2]] = [
        entryPoint.split("/")[3].split(".")[0].replace("Component", ""),
      ];
      return map;
    }, {}),
    { spaces: 2 }
  );

  await esbuild.build({
    entryPoints,
    outdir: "dist/components",
    splitting: true,
    ...sharedConfig,
  });
})();
