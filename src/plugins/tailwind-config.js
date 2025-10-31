// src/plugins/tailwind-config.js
module.exports = function tailwindPlugin(context, options) {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require('@tailwindcss/postcss'), // <--- Change this line
        require('autoprefixer'),
      ];
      return postcssOptions;
    },
  };
};