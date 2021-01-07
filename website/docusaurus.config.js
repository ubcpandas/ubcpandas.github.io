module.exports = {
  title: 'Tech Interview Handbook',
  tagline:
    'Carefully curated content to help you ace your next technical interview',
    // TODO: change this to the link that we have readily available for ubc pandas
  url: 'https://ubcpandas.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'ubcpandas',
  projectName: 'website',
  onBrokenLinks: 'ignore',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Tech Interview Handbook',
      logo: {
        alt: 'Tech Interview Handbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'introduction', label: 'Getting Started', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/yangshun/tech-interview-handbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} UBC Pandas. Built with Docusaurus, hosted on Netlify, and made with  💖 by the chancellors of UBC pandas.`,
    },
    gtag: {
      trackingID: 'UA-44622716-2',
    },
    algolia: {
      apiKey: 'bd359779d1c4c71ade6062e8f13f5a83',
      indexName: 'yangshun-tech-interview',
    },
    announcementBar: {
      id: 'black_lives_matter',
      content:
        '<div style="font-weight: bold">Black Lives Matter. <a target="_blank" href="https://support.eji.org/give/153413/#!/donation/checkout">Support the Equal Justice Initiative</a></div>',
      backgroundColor: '#000',
      textColor: '#f5f6f7',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../contents',
          routeBasePath: 'localhost:3000',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/yangshun/tech-interview-handbook/edit/master/contents/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
