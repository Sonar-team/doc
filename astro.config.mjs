import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import astroIcon from 'astro-icon';
import rehypeMermaid from 'rehype-mermaid';

export default defineConfig({
  site: 'https://Sonar-team.github.io',
  base: '/doc',

  markdown: {
    rehypePlugins: [rehypeMermaid],
  },

  integrations: [
    starlight({
      // Titre multilingue
      title: {
        fr: 'Sonar',
        en: 'Sonar ',
      },

      defaultLocale: 'fr',

      locales: {
        fr: { label: 'Français', lang: 'fr' },
        en: { label: 'English', lang: 'en' },
      },

      logo: {
        src: './src/assets/logo_sonar.png',
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Sonar-team',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/65twx4CpDr',
        },
      ],

      sidebar: [
        {
          label: 'Guides',
          translations: { en: 'Guides' },
          items: [
            {
              label: 'Installation',
              translations: { en: 'Installation' },
              link: 'guides/installation',
            },
          ],
        },
        {
          label: 'Développement',
          translations: { en: 'Development' },
          items: [
            {
              label: 'Capture pcap',
              translations: { en: 'Pcap Capture' },
              link: 'developpement/capture',
            },
          ],
        },
      ],
    }),

    astroIcon(),
  ],
});
