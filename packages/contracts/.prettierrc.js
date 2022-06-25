module.exports = {
  plugins: [require("prettier-plugin-organize-imports")],
  overrides: [
    {
      files: "*.sol",
      options: {
        singleQuote: false,
        explicitTypes: "always",
        plugins: [require("prettier-plugin-solidity")],
      },
    },
  ],
  tabWidth: 2,
  singleQuote: false,
};
