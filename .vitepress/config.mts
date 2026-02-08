import { defineConfig } from 'vitepress';

function inferBaseFromEnv(): string {
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) return '/';

  const repoName = repo.split('/')[1] || '';
  if (repoName.endsWith('.github.io')) return '/';

  return `/${repoName}/`;
}

export default defineConfig({
  lang: 'en-US',
  title: 'UrsaWorks',
  description:
    'End-user documentation for UrsaWorks — an automation platform for managing Ursa feature/config approval requests.',

  base: process.env.CI ? inferBaseFromEnv() : '/',

  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Rules', link: '/rules' },
      { text: 'User Settings', link: '/user-settings' },
      { text: 'Troubleshooting', link: '/troubleshooting' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Rules', link: '/rules' },
          { text: 'Feature Toggle', link: '/feature-toggle' },
          { text: 'Manual Run', link: '/manual-run' },
          { text: 'User Settings', link: '/user-settings' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'Security', link: '/security' }
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/johnneerdael/UrsaWorks-Documentation',
      },
    ],
  },
});
