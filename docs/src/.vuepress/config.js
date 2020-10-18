const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Conversational Interfaces',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Over',
        link: '/over/betekenis',
      },
      { 
        text: 'Toepassingen',
        link: '/toepassingen/voorbeelden',
      },
      { 
        text: 'Uitvoering',
        link: '/uitvoering/stappenplan',
      }
    ],
    sidebar: {
      '/over/': [
        {
          title: 'Wat zijn conversational interfaces',
          collapsable: false,
          children: [
            'betekenis',
            'oorsprong',
            'evolutie',
            'communiceren',
            'categorieën',
          ]
        }
      ],
      '/toepassingen/': [
        {
          title: 'Toepassingen',
          collapsable: false,
          children: [
            'voorbeelden',
            'eigenInterface',
          ]
        }
      ],
      '/uitvoering/': [
        {
          title: 'Uitvoering',
          collapsable: false,
          children: [
            'setup',
            'stappenplan',
            'stappenplan2',
            'stappenplan3',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  base:  '/research-nmdgent-sennwanc/',
}
