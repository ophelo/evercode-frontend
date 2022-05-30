const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const withTM = require("next-transpile-modules")(["@monaco-editor/react"]);

module.exports = withTM({
  webpack: (config) => {
    const rule = config.module.rules
      .find((rule) => rule.oneOf)
      .oneOf.find(
        (r) =>
          // Find the global CSS loader
          r.issuer && r.issuer.include && r.issuer.include.includes("_app")
      );
    if (rule) {
      rule.issuer.include = [
        rule.issuer.include,
        /[\\/]node_modules[\\/]monaco-editor[\\/]/,
      ];
    }

    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: [
          "json",
          "markdown",
          "css",
          "typescript",
          "javascript",
          "html",
          "graphql",
          "python",
          "scss",
          "yaml",
        ],
        filename: "static/[name].worker.js",
      })
    );
    return config;
  },
});

module.exports = {
  images: {
    domains: ["source.unsplash.com"],
  },
};
// Backend url system if you set the override you
// change the url in the development stage
// do not commit the change of BACKEND_OVERRIDE
const BACK_OVERRIDE = "http://localhost:5000";

const BACK_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? BACK_OVERRIDE ?? process.env.BACK_ENDPOINT
    : BACK_OVERRIDE ?? process.env.NEXT_PUBLIC_BACK_ENDPOINT;

module.exports = {
  env: {
    BACK_ENDPOINT: BACK_ENDPOINT,
  },
};
