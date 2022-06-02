module.exports = {
  title: 'GridDB Documentation',
  base: '/',
  description: 'GridDB Documentation',
  plugins: [
    ['@vuepress/back-to-top'],
    ['vuepress-plugin-code-copy', true],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-81028923-2'
      }
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        locales: true,
      },
    ],
  ],
  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `
   const logoUrlChanger = setInterval(function() {
    //Anchor above the logo image
    const homeEls = document.getElementsByClassName("home-link");
    if(homeEls.length > 0) {
      const homeEl = homeEls[0];
      homeEl.setAttribute("href", "https://griddb.net");
      homeEl.setAttribute("onclick", "document.location='https://griddb.net';return false;");
      clearInterval(logoUrlChanger);
    }

    //Actual logo image
    const logoEls = document.getElementsByClassName("logo")
    if(logoEls.length > 0) {
      const logoEl = logoEls[0]
      logoEl.setAttribute("onclick", "document.location='https://griddb.net';return false;");
      clearInterval(logoUrlChanger);
    }
   }, 1000)
    
    let x = localStorage.getItem('visited')

    if (x == 'true') {
        //do nothing
    } else {
      let language = (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage).substr(0,2);
      let pathname= location.pathname;
      
      switch(language) {
      case "ja":
      pathname = pathname.replace(/\\//,"/ja/");
      window.location = pathname
      localStorage.setItem('lang', 'ja')
      break;

      default:
      window.location = pathname;
      localStorage.setItem('lang', 'en')
      break;
      }
    }

    localStorage.setItem('visited', 'true');
    localStorage.setItem('lang', 'en')
  `
    ]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'GridDB | Docs',
      description: 'GridDB Documentation'
    },
    '/ja/': {
      lang: 'ja',
      title: 'GridDB | ドキュメンテーション',
      description: 'GridDB ドキュメンテーション'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        // algolia docsearch options for current locale
        algolia: {
          apiKey: '68e1c311f84b9842d01c3b0aa738fde6',
          indexName: 'griddb',
        },
        nav: [
          { text: 'Docs', link: '/about/what-is-griddb', ariaLabel: 'docs' },
          { text: 'Blogs', link: 'https://griddb.net/en/blog', ariaLabel: 'blogs' },
          { text: 'Community', link: 'https://griddb.net/en/community', ariaLabel: 'community' },
          { text: 'Resources', link: 'https://griddb.net/en/resources', ariaLabel: 'resources' },
        ],
        // english sidebar
        sidebar: {
          '/': [
            {
              title: 'About GridDB',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'about/what-is-griddb',
                'about/what-is-time-series-database',
                //'about/benchmark-comparisons',
                'about/release-notes',
                'about/faq'
              ]
            },
            {
              title: 'Getting Started',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'gettingstarted/introduction',
                'gettingstarted/using-source-code',
                'gettingstarted/using-rpmyum',
                {
                  title: 'Build an App',
                  collapsable: false,
                  children: [
                    'gettingstarted/java',
                    'gettingstarted/python',
                    'gettingstarted/nodejs',
                    'gettingstarted/go',
                    'gettingstarted/php'
                  ]
                }
              ]
            },
            {
              title: 'Architecture',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                'architecture/introduction',
                'architecture/structure-of-griddb',
                'architecture/data-model',
                'architecture/database-function',
                'architecture/operating-function',
                'architecture/parameter'
                //'architecture/architecture-overview',
                //'architecture/key-container-model',
                //'architecture/tql',
                //'architecture/crud-operations',
                //'architecture/transaction-and-acid',
                //'architecture/indexes',
                //'architecture/storage-architecture',
                //'architecture/replication-distribution',
                //'architecture/sharding'
              ]
            },
            //{
            //  title: 'Data Modeling',
            //  collapsable: true,
            //  sidebarDepth: 2,
            //  children: [
            //    'datamodeling/data-modeling-basics',
            //    'datamodeling/data-modeling-using-griddb',
            //    'datamodeling/modeling-relationships',
            //    'datamodeling/data-model-variation'
            //  ]
            //},
            //{
            //  title: 'Query Language',
            //  collapsable: true,
            //  sidebarDepth: 2,
            //  children: [
            //    'querying/TQL-Reference',
            //    'querying/SQL-Reference'
            //  ]
            //},
            {
              title: 'SQL Reference',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                'sqlreference/introduction',
                'sqlreference/sql-description-format',
                'sqlreference/sql-commands-supported',
                'sqlreference/metatables',
                'sqlreference/reserved-words'
              ]
            },
            {
              title: 'TQL Reference',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                'tqlreference/introduction',
                'tqlreference/type',
                'tqlreference/tql-syntax-and-calculation-functions',
                'tqlreference/annex'
              ]
            },
            {
              title: 'Tutorial',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                'tutorial/wide-narrow',
                'tutorial/nifi',
                'tutorial/kafka',
                'tutorial/jupyter',
                'tutorial/pyspark',
                'tutorial/forecasting',
                'tutorial/timeseries-expiration',
                `tutorial/jms`
              ]
            },
            {
              title: 'JDBC Driver',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'jdbcdriver/introduction',
                'jdbcdriver/overview',
                'jdbcdriver/specifications',
                'jdbcdriver/sample'
              ]
            },
            {
              title: 'References',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'references/API-References'
                //     'references/JDBC-driver'
              ]
            }
          ]
        }
      },
      '/ja/': {
        selectText: '言語',
        label: '日本語',
        editLinkText: 'github飛ぶ',
        serviceWorker: {
          updatePopup: {
            message: "メッセージ",
            buttonText: "ボタン"
          }
        },
        algolia: {
          apiKey: '68e1c311f84b9842d01c3b0aa738fde6',
          indexName: 'griddb',
        },
        nav: [
          { text: 'ドキュメント', link: '/ja/about/what-is-griddb', ariaLabel: 'ドキュメント' },
          { text: 'ブログ', link: 'https://griddb.net/ja/blog', ariaLabel: 'ブログ' },
          { text: 'コミュニティ', link: 'https://griddb.net/ja/community', ariaLabel: 'コミュニティ' },
          { text: 'リソース', link: 'https://griddb.net/ja/resources', ariaLabel: 'リソース' },
        ],
        // japanese sidebar
        sidebar: {
          '/ja/': [
            {
              title: 'GridDBとは',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'about/what-is-griddb',
                'about/what-is-time-series-database',
                //'about/benchmark-comparisons',
                'about/release-notes',
                'about/faq'
              ]
            },
            {
              title: 'はじめに',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'gettingstarted/introduction',
                //'gettingstarted/installation',
                'gettingstarted/using-source-code',
                'gettingstarted/using-rpm',
                {
                  title: 'アプリ作成',
                  collapsable: false,
                  children: [
                    'gettingstarted/java',
                    'gettingstarted/python',
                    'gettingstarted/nodejs',
                    'gettingstarted/go',
                    'gettingstarted/php'
                  ]
                }
              ]
            },
            {
              title: 'アーキテクチャ',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                'architecture/introduction',
                'architecture/structure-of-griddb',
                'architecture/data-model',
                'architecture/database-function',
                'architecture/operating-function',
                'architecture/parameter'
                //'architecture/architecture-overview',
                //'architecture/key-container-model',
                //'architecture/tql',
                //'architecture/crud-operations',
                //'architecture/transaction-and-acid',
                //'architecture/indexes',
                //'architecture/storage-architecture',
                //'architecture/replication-distribution',
                //'architecture/sharding'
              ]
            },
            //{
            //  title: 'データモデリング',
            //  collapsable: true,
            //  sidebarDepth: 2,
            //  children: [
            //    'datamodeling/data-modeling-basics',
            //    'datamodeling/data-modeling-using-griddb',
            //    'datamodeling/modeling-relationships',
            //    'datamodeling/data-model-variation'
            //  ]
            //},
            //{
            //  title: 'クエリ言語',
            //  collapsable: true,
            //  sidebarDepth: 2,
            //  children: [
            //    'querying/TQL-Reference',
            //    'querying/SQL-Reference'
            //  ]
            //},
            {
              title: 'SQL リファレンス',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                'sqlreference/introduction',
                'sqlreference/sql-description-format',
                'sqlreference/sql-commands-supported',
                'sqlreference/metatables',
                'sqlreference/reserved-words'
              ]
            },
            {
              title: 'TQL リファレンス',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                'tqlreference/introduction',
                'tqlreference/type',
                'tqlreference/tql-syntax-and-calculation-functions',
                'tqlreference/annex'
              ]
            },
            {
              title: 'チュートリアル',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'tutorial/ingesting'
              ]
            },
            {
              title: 'JDBC ドライバ',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'jdbcdriver/introduction',
                'jdbcdriver/overview',
                'jdbcdriver/specifications',
                'jdbcdriver/sample'
              ]
            },
            {
              title: 'リファレンス',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'references/API-References'
                //    'references/JDBC-driver'
              ]
            }
          ]
        }
      }
    }
  }
}
