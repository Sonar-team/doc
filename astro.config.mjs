import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import rehypeMermaid from 'rehype-mermaid';
// https://astro.build/config
export default defineConfig({
	site: 'https://Sonar-team.github.io',

	markdown: {
		rehypePlugins: [rehypeMermaid], // <-- clé ici !
	  },

	base: '/doc',
	integrations: [
		starlight({
			title: 'Sonar',
			logo: {
				src: './src/assets/logo_sonar.png',
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
				 	href: "https://github.com/Sonar-team"
				}
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: 'guides/installation' },
					],
				},
				{
					label: 'Developpement',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Capture pcap', link: 'developpement/capture' },
					],
				},
			],
		}),
	],

});
