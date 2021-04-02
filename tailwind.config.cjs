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
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
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
		// '.fa-primary': {
        //   color: theme('colors.gray.500'),
		//   fill: 'currentColor'
        // },
		// '.sidebar-icon': {
        //   color: theme('colors.red.500'),
		//   fill: 'currentColor',
        // },
      }

      addComponents(icons)
    })
  ]
};
