const path = require('path')

module.exports = {
  title: 'Python-Wechaty',
  tagline: '一个开发所有IM平台的聊天机器人SDK',
  url: 'https://wj-Mcat.github.io',
  baseUrl: '/python-wechaty-doc/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wj-Mcat',    // Usually your GitHub org/user name.
  projectName: 'python-wechaty-doc',  // Usually your repo name.
  stylesheets: [
    '/css/gitter-sidecar.css',
  ],
  scripts: [
    '/js/gitter-sidecar.js',
    { src: 'https://sidecar.gitter.im/dist/sidecar.v1.js', async: true },
  ],
  themeConfig: {
    image: 'img/wechaty-icon.png',
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'We are looking to revamp our website, please comment on <a target="_blank" href="https://github.com/wechaty/wechaty.js.org/issues/440">this issue</a>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    navbar: {
      title: '',
      logo: { alt: 'Wechaty Logo', src: 'img/wechaty-logo.svg' },
      hideOnScroll: true,
      items: [
        { label: 'News',            to: 'news/',         position: 'right', target: '_self' },
        { label: 'Blog',            to: 'blog/',         position: 'right', target: '_self' },
        { label: 'Docs',            to: 'docs/', position: 'right', activeBasePath: 'docs',
          items: [
            { label: 'Introduction',    to: 'docs/introduction/' },
            { label: 'Getting Started', to: 'docs/getting-started/' },
            { label: 'Tutorial',        to: 'docs/tutorials/' },
            { label: 'Recipe',          to: 'docs/recipes/' },
            { label: 'Case Study',      to: 'docs/case-study/' },
            { label: 'API',             to: 'docs/api/' },
            { label: 'FAQ',             to: 'docs/faq/' },
            { label: 'Troubleshooting', to: 'docs/troubleshooting' },
          ],
        },

        { label: 'GitHub',          href: 'https://github.com/wechaty/python-wechaty',   position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: 'docs/getting-started/' },
            { label: 'Tutorial',        to: 'docs/tutorials/' },
            { label: 'FAQ',             to: 'docs/faq/' },
            { label: 'API Reference',   to: 'docs/api/' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow',  href: 'https://stackoverflow.com/questions/tagged/wechaty' },
            { label: 'Gitter',          href: 'https://gitter.im/wechaty/wechaty' },
            { label: 'Telegram',        href: 'https://t.me/wechaty' },
            { label: 'Twitter',         href: 'https://twitter.com/chatieio' },
            { label: 'YouTube',         href: 'https://www.youtube.com/playlist?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh' },
            { label: 'OpenCollective',  href: 'https://opencollective.com/wechaty' },
            { label: 'Meeting Notes',   href: 'https://bit.ly/2zpi2XG' },
            { label: 'Google Drive',    href: 'https://bit.ly/33Dfkuf' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog',      href: 'https://wechaty.js.org/blog/' },
            { label: 'Book',      href: 'http://www.bot5.club/blogs/chatbot-0-1/' },
            { label: 'GitHub',    href: 'https://github.com/wechaty/wechaty#readme' },
            { label: 'Status',    href: 'https://chatie.statuspage.io/' },
          ],
        },
      ],
      logo: {
        alt  : 'Wechaty Logo',
        src  : 'img/wechaty-logo.svg',
        href : 'https://wechaty.js.org/',
      },
      copyright: `Copyright © 2020-${new Date().getFullYear()} Python-Wechaty Contributors`,
    },
    algolia: {
      apiKey           : 'cd8ca324c447a803e8a196a5c8fa22dd',
      indexName        : 'wechaty',
      searchParameters : {},                                   // Optional (if provided by Algolia)
    },
    googleAnalytics: {
      trackingID: 'UA-88739146-3',
    },
    prism: {
      additionalLanguages: [
        'csharp',
        'kotlin',
        'scala',
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/wechaty/wechaty.js.org/edit/master/docusaurusblog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('./src/plugins/qrcode'),
  ],
}
