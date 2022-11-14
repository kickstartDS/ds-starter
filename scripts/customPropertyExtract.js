const fs = require("fs-extra");
const fg = require("fast-glob");
const { extract } = require("custom-property-extract");
const sass = require("sass");

const createTokens = (scssPath) => {
  try {
    const result = sass.compile(scssPath, {
      loadPaths: ["node_modules"],
    });
    const dest = scssPath.replace(
      /(.*\/)_?(.*)-tokens\.scss/,
      "$1$2-tokens.json"
    );
    const tokens = extract(result.css.toString(), {
      source: "content",
      mode: "full",
    });
    return fs.outputJson(dest, tokens, { spaces: 2 });
  } catch (e) {
    console.error(scssPath);
    console.error(e);
    throw e;
  }
};

(async () => {
  const [, , scssPath] = process.argv;

  try {
    if (scssPath) {
      return createTokens(scssPath);
    }

    const schemaPaths = await fg("src/**/*-tokens.scss");
    return schemaPaths.map(createTokens);
  } catch (e) {
    process.exit(1);
  }
})();
