module.exports = {
	extends: ["next/core-web-vitals", require.resolve("./react.cjs") ],
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		"react/jsx-key": "off",
  },
};
