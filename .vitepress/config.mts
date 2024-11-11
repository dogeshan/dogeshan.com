import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "dogeshan",
  description: "Outstanding contributor in the crypto industry, The soul of the Bellscoin community!",
  head: [
    ['link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ]
  ],
  vite:{
    server:{
      port: 5177,
    }
  },
  themeConfig: {
    logo: '/logo.png',
    darkModeSwitchLabel: 'auto',
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'WALLET', link: '/wallet' },
      {
        text: 'PLAY',
        items: [
          { text: 'BellsCoin', link: 'https://bellscoin.com/' },
          { text: 'TideCoin', link: 'https://tidecoin.org/' },
          { text: 'JunkCoin', link: 'https://junkcoin.meme/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/dogeshan' },
    ],
    footer: {
      message: 'dogeshan little fan created.a piece of cloth over his head. He is the richest of the blue stars',
      copyright: 'Copyright © 2024-present dogeshan.com'
    }
  }
})
