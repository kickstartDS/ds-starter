const path = require("path");
const fs = require("fs-extra");
const fg = require("fast-glob");
const { dereference } = require("./schemaParser");
const { createTypes } = require("./schemaToTypescript");

const processSchema = async (schemaPath) => {
  try {
    const dirname = path.dirname(schemaPath);
    const basename = path.basename(schemaPath, ".json");
    const dereffed = await dereference(schemaPath);
    await createTypes(dereffed, schemaPath);

    return fs.outputJson(`${dirname}/${basename}.dereffed.json`, dereffed, {
      spaces: 2,
    });
  } catch (e) {
    console.error(schemaPath);
    console.error(e);
    throw e;
  }
};

(async () => {
  const [, , schemaPath] = process.argv;

  try {
    if (schemaPath) {
      return processSchema(schemaPath);
    }

    const schemaPaths = await fg("src/**/*.schema.json");
    return schemaPaths.map(processSchema);
  } catch (e) {
    process.exit(1);
  }
})();
