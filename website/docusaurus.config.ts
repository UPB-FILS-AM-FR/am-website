import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Microprocessor Architecture',
  tagline: '🤖✨',
  favicon: 'img/sigla_am.ico',

  // Set the production url of your site here
  url: 'https://upb-fils-am-fr.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UPB-FILS-AM-FR', // Usually your GitHub org/user name.
  projectName: 'UPB-FILS-AM-FR.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        theme:{
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: false,
        blog: false, // If blog is not needed, disable it
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'lab', // Unique ID for the plugin
        path: 'lab', // Points to the new "lab" folder
        routeBasePath: 'lab', // URL will be /lab/
        sidebarPath: require.resolve('./sidebarsLab.ts'), // Sidebar file
        remarkPlugins: [require('remark-import-partial')], // Enables @include
      },
      
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'project', // Unique ID for the plugin
        path: 'project', // Points to the new "project" folder
        routeBasePath: 'project', // URL will be /project/
        sidebarPath: require.resolve('./sidebarsProject.ts'), // Sidebar file
        remarkPlugins: [require('remark-import-partial')], // Enables @includes
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial', // Unique ID for the plugin
        path: 'tutorial', // Points to the new "tutorial" folder
        routeBasePath: 'tutorial', // URL will be /tutorial/
        sidebarPath: require.resolve('./sidebarsTutorial.ts'), // Sidebar file
        remarkPlugins: [require('remark-import-partial')], // Enables @include
      },
    ],
  ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Microprocessor Architecture',
      logo: {
        alt: 'Microprocessor Architecture',
        src: 'img/sigla_am.svg',
      },
      items: [
        {to: '/lab',label: 'Lab', position: 'left'},
        {to: '/project',label: 'Project', position: 'left'},
        //{to: '/tutorial',label: 'Tutorial', position: 'left'},
        
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/UPB-FILS-AM-FR/am-website',
          label: 'GitHub',
          position: 'right',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'UPB Open CourseWare ',
              href: 'https://ocw.cs.pub.ro/courses/pm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Politehnica Bucharest. <br> This pages are the translated and adapted version from https://ocw.cs.pub.ro/courses/pm`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,


};

export default config;
