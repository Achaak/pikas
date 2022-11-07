module.exports = {
  extends: ["plugin:react/recommended", require.resolve("./index.cjs") ],
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    JSX: true,
  },
  rules: {
    "react/no-unescaped-entities": 0,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
  },
};
