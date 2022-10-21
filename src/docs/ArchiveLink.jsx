import { name, version } from "../../package.json";

const filename = `${name}-${version.replace(/\./g, "-")}.tar.gz`;

export const ArchiveLink = (props) => (
  <a {...props} download={filename} target="_top" href={filename} />
);
