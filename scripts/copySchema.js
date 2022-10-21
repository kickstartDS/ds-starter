const fs = require("fs-extra");
const fg = require("fast-glob");

(async () => {
  const schemaPaths = await fg("src/**/*.schema.(?:dereffed.)?json");
  return Promise.all(
    schemaPaths.map((schemaPath) => {
      const dest = schemaPath.replace("src/", "dist/");
      return fs.copy(schemaPath, dest);
    })
  );
})();
