const fs = require("fs-extra");
const glob = require("fast-glob");

const kdsUrlRegExp =
  /^http:\/\/schema\.kickstartds\.com\/([a-z-_]+)\/([a-z-_/]+)\.(?:schema|definitions)\.json$/i;

const kdsResolver = {
  canRead: /^http:\/\/schema\.kickstartds\.com/i,
  async read(file) {
    const [, module, name] = kdsUrlRegExp.exec(file.url);
    const [resolvedPath] = await glob(
      `node_modules/@kickstartds/${module}/lib/${name === 'lightbox-lazy-image' ? 'lightbox-image' : name}/${name}.(schema|definitions).json`
    );
    return fs.readJSON(resolvedPath);
  },
};

const customUrlRegExp =
  /^http:\/\/schema\.mydomain\.com\/([a-z-_]+)\.(?:schema|definitions)\.json$/;

const customResolver = {
  canRead: /^http:\/\/schema\.custom\.dev/i,
  async read(file) {
    const [, name] = customUrlRegExp.exec(file.url);
    const [resolvedPath] = await glob(
      `src/**/${name}/${name}.(schema|definitions).json`
    );
    return fs.readJSON(resolvedPath);
  },
};

module.exports = { kdsResolver, customResolver };
