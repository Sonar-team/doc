import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import astroIcon from 'astro-icon';
import rehypeMermaid from 'rehype-mermaid';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

const sidebarRoot = [
  {
    label: 'Guides',
    items: [
      { label: 'Installation', link: 'guides/installation' },
      { label: 'Téléchargement', link: 'download' },
    ],
  },
  {
    label: 'Développement',
    items: [
      { label: 'Capture pcap', link: 'developpement/capture' },
    ],
  },
];

const sidebarEn = [
  {
    label: 'Guides',
    items: [
      { label: 'Installation', link: 'guides/installation' },
      { label: 'Download', link: 'download' },
    ],
  },
  {
    label: 'Development',
    items: [
      { label: 'Pcap Capture', link: 'developpement/capture' },
    ],
  },
];

export default defineConfig({
  site: 'https://sonar-team.github.io',
  base: '/doc',
  markdown: {
    rehypePlugins: [rehypeMermaid],
  },
  integrations: [
    starlightUtils({
      multiSidebar: {
        switcherStyle: 'horizontalList',
        sidebars: {
          root: sidebarRoot,
          en: sidebarEn,
        },
      },
    }),
    starlight({
      title: 'SONAR',
	  pagination: false,
      description: 'Surveillance Optimisée des Nœuds pour Analyse Réseau',
      locales: {
        root: { label: 'Français', lang: 'fr' },
        en: { label: 'English', lang: 'en' },
      },
      logo: {
        src: './src/assets/logo_sonar.png',
        replacesTitle: true,
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
      // 🚫 Ne pas mettre `sidebar:` ici !
    }),
    astroIcon(),
  ],
});
