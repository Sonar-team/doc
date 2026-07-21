import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import astroIcon from "astro-icon";
import rehypeMermaid from "rehype-mermaid";
import starlightUtils from "@lorenzo_lewis/starlight-utils";

const sidebarRoot = [
  {
    label: "Parcours Utilisateur",
    items: [
      { label: "Installation", link: "guides/installation" },
      { label: "Utilisation", link: "guides/utilisation" },
      { label: "Fonctionnalités", link: "guides/fonctionalitées" },
      { label: "Dépannage", link: "guides/troubleshooting" },
      { label: "Téléchargement", link: "download" },
      { label: "Changelog", link: "changelog" },
    ],
  },
  {
    label: "Parcours Ingénierie",
    items: [
      { label: "Confiance release", link: "guides/release-trust" },
      { label: "Reproductibilité", link: "guides/reproducibility-matrix" },
      { label: "Épinglage des dépendances", link: "securite/epingle" },
      { label: "Builds reproductibles", link: "securite/reproductibilite" },
      { label: "Interfaces réseau", link: "developpement/interface" },
      { label: "Capture pcap", link: "developpement/capture" },
      { label: "Logging temps réel", link: "developpement/logging" },
      { label: "Export des logs", link: "developpement/export_logs" },
      { label: "État partagé & concurrence", link: "developpement/etat_partage" },
      { label: "Pré-requis dev", link: "developpement/prerequis" },
    ],
  },
  {
    label: "Référence",
    items: [
      { label: "Labels & fusion de matrices", link: "reference/labels" },
      { label: "Format matrice de flux", link: "reference/format" },
      { label: "Matrices de flux réseau", link: "reference/matrices-de-flux-réseau" },
      { label: "Protocoles", link: "reference/protocoles" },
    ],
  },
];

const sidebarEn = [
  {
    label: "User Track",
    items: [
      { label: "Installation", link: "guides/installation" },
      { label: "Usage", link: "guides/usage" },
      { label: "Features", link: "guides/features" },
      { label: "Troubleshooting", link: "guides/troubleshooting" },
      { label: "Download", link: "download" },
      { label: "Changelog", link: "changelog" },
    ],
  },
  {
    label: "Engineering Track",
    items: [
      { label: "Release trust", link: "guides/release-trust" },
      { label: "Reproducibility", link: "guides/reproducibility-matrix" },
      { label: "Dependency pinning", link: "security/dependency-pinning" },
      { label: "Reproducible builds", link: "security/reproducible-builds" },
      { label: "Network interfaces", link: "developpement/interface" },
      { label: "Pcap Capture", link: "developpement/capture" },
      { label: "Real-time logging", link: "developpement/logging" },
      { label: "Export logs", link: "developpement/export_logs" },
      { label: "Shared state & concurrency", link: "developpement/shared-state" },
      { label: "Dev prerequisites", link: "developpement/prerequis" },
    ],
  },
  {
    label: "Reference",
    items: [
      { label: "Labels & matrix merging", link: "reference/labels" },
      { label: "Flow matrix format", link: "reference/format" },
      { label: "Flow matrices", link: "reference/flow-matrices" },
      { label: "Protocols", link: "reference/protocols" },
    ],
  },
];

export default defineConfig({
  site: "https://sonar-team.github.io",
  base: "/doc",
  markdown: {
    rehypePlugins: [rehypeMermaid],
  },
  integrations: [
    starlightUtils({
      multiSidebar: {
        switcherStyle: "horizontalList",
        sidebars: {
          root: sidebarRoot,
          en: sidebarEn,
        },
      },
    }),
    starlight({
      title: "Sonar",
      favicon: "/assets/icon.png",
      pagination: false,
      description: "Surveillance Optimisée des Nœuds pour Analyse Réseau",
      locales: {
        root: { label: "Français", lang: "fr" },
        en: { label: "English", lang: "en" },
      },
      logo: {
        src: "./src/assets/logo_sonar.png",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Sonar-team",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/65twx4CpDr",
        },
      ],
    }),
    astroIcon(),
  ],
});
