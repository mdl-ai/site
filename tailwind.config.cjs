const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const plugin = require('tailwindcss/plugin');

module.exports = {
	darkMode: 'class',
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				...tailwindExtractor(content),
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
  plugins: [
	require('@tailwindcss/forms'),
    plugin(function({ addComponents, theme }) {
      const icons = {
        '.fa-secondary': {
          color: theme('colors.gray.700'),
		  fill: 'currentColor'
        },
      }
      addComponents(icons)
    })
  ]
};
