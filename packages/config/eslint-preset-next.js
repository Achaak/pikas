module.exports = {
  extends: [require.resolve("./eslint-preset"), "next/core-web-vitals"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"]
      },
      {
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow"
      },

      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "require"
      },

      {
        selector: "typeLike",
        format: ["PascalCase"]
      }
    ]
  }
};
