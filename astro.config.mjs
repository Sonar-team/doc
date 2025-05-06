import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import astroIcon from 'astro-icon';
import rehypeMermaid from 'rehype-mermaid';
// https://astro.build/config
export default defineConfig({
	site: 'https://Sonar-team.github.io',

	markdown: {
		rehypePlugins: [rehypeMermaid], 
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
				},
				{
					icon: "discord",
					label: "Discord",
					href: "https://discord.gg/65twx4CpDr"
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
		astroIcon(),
	],

});
