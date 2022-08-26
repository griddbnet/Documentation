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
          {
            text: 'Docs',
            ariaLabel: 'docs',
            items: [
              { text: 'latest', link: '/latest/about/what-is-griddb' },
              { text: 'v4.5', link: '/v4.5/about/what-is-griddb' },
            ]
          },
          { text: 'Blogs', link: 'https://griddb.net/en/blog', ariaLabel: 'blogs' },
          { text: 'Community', link: 'https://griddb.net/en/community', ariaLabel: 'community' },
          { text: 'Resources', link: 'https://griddb.net/en/resources', ariaLabel: 'resources' },
        ],
        // english sidebar
        sidebar: {
          '/latest': [
            {
              title: 'GridDB (latest)',
              collapsable: false,
            },
            {
              title: 'About GridDB',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/latest/about/what-is-griddb',
                '/latest/about/what-is-time-series-database',
                //'about/benchmark-comparisons',
                '/latest/about/release-notes',
                '/latest/about/faq'
              ]
            },
            {
              title: 'Getting Started',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/latest/gettingstarted/webshell',
                '/latest/gettingstarted/using-apt',
                '/latest/gettingstarted/using-rpmyum',
                {
                  title: 'Build an App',
                  collapsable: false,
                  children: [
                    '/latest/gettingstarted/java',
                    '/latest/gettingstarted/python',
                    '/latest/gettingstarted/nodejs',
                    '/latest/gettingstarted/go',
                    '/latest/gettingstarted/php'
                  ]
                }
              ]
            },
            {
              title: 'Architecture',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/latest/architecture/introduction',
				'/latest/architecture/what-is-griddb',
                '/latest/architecture/structure-of-griddb',
                '/latest/architecture/data-model',
                '/latest/architecture/database-function',
                '/latest/architecture/operating-function',
                '/latest/architecture/parameter'
              ]
            },
            {
              title: 'SQL Reference',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/latest/sqlreference/introduction',
                '/latest/sqlreference/sql-description-format',
                '/latest/sqlreference/sql-commands-supported',
                '/latest/sqlreference/metatables',
                '/latest/sqlreference/reserved-words'
              ]
            },
            {
              title: 'TQL Reference',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/latest/tqlreference/introduction',
                '/latest/tqlreference/type',
                '/latest/tqlreference/tql-syntax-and-calculation-functions',
                '/latest/tqlreference/annex'
              ]
            },
            {
              title: 'Tutorial',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                '/latest/tutorial/wide-narrow',
                '/latest/tutorial/nifi',
                '/latest/tutorial/kafka',
                '/latest/tutorial/jupyter',
                '/latest/tutorial/pyspark',
                '/latest/tutorial/forecasting',
                '/latest/tutorial/timeseries-expiration',
                `/latest/tutorial/jms`
              ]
            },
            {
              title: 'JDBC Driver',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/latest/jdbcdriver/introduction',
                '/latest/jdbcdriver/overview',
                '/latest/jdbcdriver/specifications',
                '/latest/jdbcdriver/sample'
              ]
            },
            {
              title: 'References',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/latest/references/API-References'
                //     'references/JDBC-driver'
              ]
            }
          ],
          '/v4.5': [
            {
              title: 'GridDB (v4.5)',
              collapsable: false,
            },
            {
              title: 'About GridDB',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/v4.5/about/what-is-griddb',
                '/v4.5/about/what-is-time-series-database',
                //'about/benchmark-comparisons',
                '/v4.5/about/release-notes',
                '/v4.5/about/faq'
              ]
            },
            {
              title: 'Getting Started',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/v4.5/gettingstarted/introduction',
                '/v4.5/gettingstarted/using-source-code',
                '/v4.5/gettingstarted/using-rpmyum',
                {
                  title: 'Build an App',
                  collapsable: false,
                  children: [
                    '/v4.5/gettingstarted/java',
                    '/v4.5/gettingstarted/python',
                    '/v4.5/gettingstarted/nodejs',
                    '/v4.5/gettingstarted/go',
                    '/v4.5/gettingstarted/php'
                  ]
                }
              ]
            },
            {
              title: 'Architecture',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/v4.5/architecture/introduction',
                '/v4.5/architecture/structure-of-griddb',
                '/v4.5/architecture/data-model',
                '/v4.5/architecture/database-function',
                '/v4.5/architecture/operating-function',
                '/v4.5/architecture/parameter'
              ]
            },
            {
              title: 'SQL Reference',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/v4.5/sqlreference/introduction',
                '/v4.5/sqlreference/sql-description-format',
                '/v4.5/sqlreference/sql-commands-supported',
                '/v4.5/sqlreference/metatables',
                '/v4.5/sqlreference/reserved-words'
              ]
            },
            {
              title: 'TQL Reference',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/v4.5/tqlreference/introduction',
                '/v4.5/tqlreference/type',
                '/v4.5/tqlreference/tql-syntax-and-calculation-functions',
                '/v4.5/tqlreference/annex'
              ]
            },
            {
              title: 'Tutorial',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                '/v4.5/tutorial/wide-narrow',
                '/v4.5/tutorial/nifi',
                '/v4.5/tutorial/kafka',
                '/v4.5/tutorial/jupyter',
                '/v4.5/tutorial/pyspark',
                '/v4.5/tutorial/forecasting',
                '/v4.5/tutorial/timeseries-expiration',
                `/v4.5/tutorial/jms`
              ]
            },
            {
              title: 'JDBC Driver',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/v4.5/jdbcdriver/introduction',
                '/v4.5/jdbcdriver/overview',
                '/v4.5/jdbcdriver/specifications',
                '/v4.5/jdbcdriver/sample'
              ]
            },
            {
              title: 'References',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/v4.5/references/API-References'
                //     'references/JDBC-driver'
              ]
            }
          ],
          '/': [
            {
              title: 'GridDB (latest)',
              collapsable: false,
            },
            {
              title: 'About GridDB',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/latest/about/what-is-griddb',
                '/latest/about/what-is-time-series-database',
                //'about/benchmark-comparisons',
                '/latest/about/release-notes',
                '/latest/about/faq'
              ]
            },
            {
              title: 'Getting Started',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/latest/gettingstarted/webshell',
                '/latest/gettingstarted/using-apt',
                '/latest/gettingstarted/using-rpmyum',
                {
                  title: 'Build an App',
                  collapsable: false,
                  children: [
                    '/latest/gettingstarted/java',
                    '/latest/gettingstarted/python',
                    '/latest/gettingstarted/nodejs',
                    '/latest/gettingstarted/go',
                    '/latest/gettingstarted/php'
                  ]
                }
              ]
            },
            {
              title: 'Architecture',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/latest/architecture/introduction',
                '/latest/architecture/structure-of-griddb',
                '/latest/architecture/data-model',
                '/latest/architecture/database-function',
                '/latest/architecture/operating-function',
                '/latest/architecture/parameter'
              ]
            },
            {
              title: 'SQL Reference',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/latest/sqlreference/introduction',
                '/latest/sqlreference/sql-description-format',
                '/latest/sqlreference/sql-commands-supported',
                '/latest/sqlreference/metatables',
                '/latest/sqlreference/reserved-words'
              ]
            },
            {
              title: 'TQL Reference',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/latest/tqlreference/introduction',
                '/latest/tqlreference/type',
                '/latest/tqlreference/tql-syntax-and-calculation-functions',
                '/latest/tqlreference/annex'
              ]
            },
            {
              title: 'Tutorial',
              collapsable: true,
              sidebarDepth: 1,
              children: [
                '/latest/tutorial/wide-narrow',
                '/latest/tutorial/nifi',
                '/latest/tutorial/kafka',
                '/latest/tutorial/jupyter',
                '/latest/tutorial/pyspark',
                '/latest/tutorial/forecasting',
                '/latest/tutorial/timeseries-expiration',
                `/latest/tutorial/jms`
              ]
            },
            {
              title: 'JDBC Driver',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/latest/jdbcdriver/introduction',
                '/latest/jdbcdriver/overview',
                '/latest/jdbcdriver/specifications',
                '/latest/jdbcdriver/sample'
              ]
            },
            {
              title: 'References',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/latest/references/API-References'
                //     'references/JDBC-driver'
              ]
            }
          ],
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
          {
            text: 'ドキュメント',
            ariaLabel: 'ドキュメント',
            items: [
              { text: 'latest', link: '/ja/latest/about/what-is-griddb' },
              { text: 'v4.5', link: '/ja/v4.5/about/what-is-griddb' },
            ]
          },
          { text: 'ブログ', link: 'https://griddb.net/ja/blog', ariaLabel: 'ブログ' },
          { text: 'コミュニティ', link: 'https://griddb.net/ja/community', ariaLabel: 'コミュニティ' },
          { text: 'リソース', link: 'https://griddb.net/ja/resources', ariaLabel: 'リソース' },
        ],
        // japanese sidebar
        sidebar: {
          '/ja/latest': [
            {
              title: 'GridDB (latest)',
              collapsable: false,
            },
            {
              title: 'GridDBとは',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/about/what-is-griddb',
                '/ja/latest/about/what-is-time-series-database',
                //'about/benchmark-comparisons',
                '/ja/latest/about/release-notes',
                '/ja/latest/about/faq'
              ]
            },
            {
              title: 'はじめに',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/gettingstarted/webshell',
                '/ja/latest/gettingstarted/using-apt',
                '/ja/latest/gettingstarted/using-rpmyum',
                {
                  title: 'アプリ作成',
                  collapsable: false,
                  children: [
                    '/ja/latest/gettingstarted/java',
                    '/ja/latest/gettingstarted/python',
                    '/ja/latest/gettingstarted/nodejs',
                    '/ja/latest/gettingstarted/go',
                    '/ja/latest/gettingstarted/php'
                  ]
                }
              ]
            },
            {
              title: 'アーキテクチャ',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/latest/architecture/introduction',
				'/ja/latest/architecture/what-is-griddb',
                '/ja/latest/architecture/structure-of-griddb',
                '/ja/latest/architecture/data-model',
                '/ja/latest/architecture/database-function',
                '/ja/latest/architecture/operating-function',
                '/ja/latest/architecture/parameter'
              ]
            },
            {
              title: 'SQL リファレンス',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/latest/sqlreference/introduction',
                '/ja/latest/sqlreference/sql-description-format',
                '/ja/latest/sqlreference/sql-commands-supported',
                '/ja/latest/sqlreference/metatables',
                '/ja/latest/sqlreference/reserved-words'
              ]
            },
            {
              title: 'TQL リファレンス',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/latest/tqlreference/introduction',
                '/ja/latest/tqlreference/type',
                '/ja/latest/tqlreference/tql-syntax-and-calculation-functions',
                '/ja/latest/tqlreference/annex'
              ]
            },
            {
              title: 'チュートリアル',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/tutorial/ingesting'
              ]
            },
            {
              title: 'JDBC ドライバ',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/jdbcdriver/introduction',
                '/ja/latest/jdbcdriver/overview',
                '/ja/latest/jdbcdriver/specifications',
                '/ja/latest/jdbcdriver/sample'
              ]
            },
            {
              title: 'リファレンス',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/references/API-References'
                //    'references/JDBC-driver'
              ]
            }
          ],
          '/ja/v4.5': [
            {
              title: 'GridDBとは',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/v4.5/about/what-is-griddb',
                '/ja/v4.5/about/what-is-time-series-database',
                //'about/benchmark-comparisons',
                '/ja/v4.5/about/release-notes',
                '/ja/v4.5/about/faq'
              ]
            },
            {
              title: 'はじめに',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/v4.5/gettingstarted/introduction',
                '/ja/v4.5/gettingstarted/using-source-code',
                {
                  title: 'アプリ作成',
                  collapsable: false,
                  children: [
                    '/ja/v4.5/gettingstarted/java',
                    '/ja/v4.5/gettingstarted/python',
                    '/ja/v4.5/gettingstarted/nodejs',
                    '/ja/v4.5/gettingstarted/go',
                    '/ja/v4.5/gettingstarted/php'
                  ]
                }
              ]
            },
            {
              title: 'アーキテクチャ',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/v4.5/architecture/introduction',
                '/ja/v4.5/architecture/structure-of-griddb',
                '/ja/v4.5/architecture/data-model',
                '/ja/v4.5/architecture/database-function',
                '/ja/v4.5/architecture/operating-function',
                '/ja/v4.5/architecture/parameter'
              ]
            },
            {
              title: 'SQL リファレンス',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/v4.5/sqlreference/introduction',
                '/ja/v4.5/sqlreference/sql-description-format',
                '/ja/v4.5/sqlreference/sql-commands-supported',
                '/ja/v4.5/sqlreference/metatables',
                '/ja/v4.5/sqlreference/reserved-words'
              ]
            },
            {
              title: 'TQL リファレンス',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/v4.5/tqlreference/introduction',
                '/ja/v4.5/tqlreference/type',
                '/ja/v4.5/tqlreference/tql-syntax-and-calculation-functions',
                '/ja/v4.5/tqlreference/annex'
              ]
            },
            {
              title: 'チュートリアル',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/v4.5/tutorial/ingesting'
              ]
            },
            {
              title: 'JDBC ドライバ',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/v4.5/jdbcdriver/introduction',
                '/ja/v4.5/jdbcdriver/overview',
                '/ja/v4.5/jdbcdriver/specifications',
                '/ja/v4.5/jdbcdriver/sample'
              ]
            },
            {
              title: 'リファレンス',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/v4.5/references/API-References'
                //     'references/JDBC-driver'
              ]
            }
          ],
          '/ja/': [
            {
              title: 'GridDB (latest)',
              collapsable: false,
            },
            {
              title: 'GridDBとは',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/about/what-is-griddb',
                '/ja/latest/about/what-is-time-series-database',
                //'about/benchmark-comparisons',
                '/ja/latest/about/release-notes',
                '/ja/latest/about/faq'
              ]
            },
            {
              title: 'はじめに',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/gettingstarted/webshell',
                '/ja/latest/gettingstarted/using-apt',
                '/ja/latest/gettingstarted/using-rpmyum',
                {
                  title: 'アプリ作成',
                  collapsable: false,
                  children: [
                    '/ja/latest/gettingstarted/java',
                    '/ja/latest/gettingstarted/python',
                    '/ja/latest/gettingstarted/nodejs',
                    '/ja/latest/gettingstarted/go',
                    '/ja/latest/gettingstarted/php'
                  ]
                }
              ]
            },
            {
              title: 'アーキテクチャ',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/latest/architecture/introduction',
                '/ja/latest/architecture/structure-of-griddb',
                '/ja/latest/architecture/data-model',
                '/ja/latest/architecture/database-function',
                '/ja/latest/architecture/operating-function',
                '/ja/latest/architecture/parameter'
              ]
            },
            {
              title: 'SQL リファレンス',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/latest/sqlreference/introduction',
                '/ja/latest/sqlreference/sql-description-format',
                '/ja/latest/sqlreference/sql-commands-supported',
                '/ja/latest/sqlreference/metatables',
                '/ja/latest/sqlreference/reserved-words'
              ]
            },
            {
              title: 'TQL リファレンス',
              collapsable: true,
              sidebarDepth: 3,
              children: [
                '/ja/latest/tqlreference/introduction',
                '/ja/latest/tqlreference/type',
                '/ja/latest/tqlreference/tql-syntax-and-calculation-functions',
                '/ja/latest/tqlreference/annex'
              ]
            },
            {
              title: 'チュートリアル',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/tutorial/ingesting'
              ]
            },
            {
              title: 'JDBC ドライバ',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/jdbcdriver/introduction',
                '/ja/latest/jdbcdriver/overview',
                '/ja/latest/jdbcdriver/specifications',
                '/ja/latest/jdbcdriver/sample'
              ]
            },
            {
              title: 'リファレンス',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                '/ja/latest/references/API-References'
                //    'references/JDBC-driver'
              ]
            }
          ],
        }
      }
    }
  }
}