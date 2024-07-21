const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const prettierCommand = "prettier --write --ignore-unknown";

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, prettierCommand],
  "*.{json,md,mdx,yml,yaml}": [prettierCommand],
};
