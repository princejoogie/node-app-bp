const esbuildPluginTsc = require("esbuild-plugin-tsc");

module.exports = {
  outDir: "./dist",
  esbuild: {
    minify: true,
    target: "es2015",
    plugins: [esbuildPluginTsc()],
  },
  assets: {
    baseDir: "src",
    outDir: "./dist",
    filePatterns: ["**/*.json"],
  },
};
