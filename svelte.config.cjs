const sveltePreprocess = require("svelte-preprocess");
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
// const {VitePWA} = require('vite-plugin-pwa');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		adapter: {
			adapt: static
		},
		target: '#svelte',
		vite: {
			// plugins: [
			// 	VitePWA()
			// ],
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			server: {
				port: "3001"
			}
		}
	}
};
