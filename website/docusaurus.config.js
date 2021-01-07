module.exports = {
  title: 'UBC Pandas',
  tagline:
    "UBC's new student run data and machine learning design team.",
    // TODO: change this to the link that we have readily available for ubc pandas
  url: 'https://ubcpandas.github.io',
  baseUrl: '/',
  favicon: 'img/nn1.png',
  organizationName: 'ubcpandas',
  projectName: 'ubcpandas.github.io',
  onBrokenLinks: 'ignore',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'UBC Pandas.',
      logo: {
        alt: 'Tech Interview Handbook Logo',
        src: 'img/favicon.png',
      },
      items: [
        {to: 'ubcpandas/introduction', label: 'Introduction', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/ubcpandas/',
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
          routeBasePath: 'ubcpandas',
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
