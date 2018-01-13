const path = require("path");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (c, env) => {
  const config = genDefaultConfig(c, env);

  config.module.rules.push({
    test: /\.tsx?/,
    exclude: /node_modules/,
    use: "ts-loader"
  });
  config.resolve.extensions.push(".tsx", ".ts");

  console.log("WEBPACK MODULES###", config.resolve.modules); // WEBPACK MODULES### [ 'node_modules' ]
  // config.resolve.modules = ["node_modules", "src"]; // --> Module parse failed: Unexpected token (25:9)

  config.resolve.modules = ["node_modules", path.resolve(__dirname, "../src")];

  return config;
};
