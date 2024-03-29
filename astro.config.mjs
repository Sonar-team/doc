import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://Sonar-team.github.io',
	base: '/doc',
	integrations: [
		starlight({
			title: 'Sonar',
			logo: {
				src: './src/assets/logo_sonar.png',
			},
			social: {
				github: 'https://github.com/Sonar-team',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guides', link: 'guides' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
