export const state = () => ({
  items: [
    {
      name: '譜久村聖',
      group: 'morningmusume',
      yomi: 'ふくむらみずき',
      color: '#e5007f',
      profile: 'http://www.helloproject.com/morningmusume/profile/mizuki_fukumura/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/morningmusume-9ki/theme-10059757620.html'
        },
        {
          name: 'Instagram',
          class: 'instagram',
          link: 'https://www.instagram.com/mizuki_fukumura.official/'
        }
      ]
    },
    {
      name: '生田衣梨奈',
      group: 'morningmusume',
      yomi: 'いくたえりな',
      color: '#adff2f',
      profile: 'http://www.helloproject.com/morningmusume/profile/erina_ikuta/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/morningmusume-9ki/theme-10059751724.html'
        },
        {
          name: '-',
          class: 'instagram',
          link: 'javascript:void(0);'
        }
      ]
    },
    {
      name: '石田亜佑美',
      group: 'morningmusume',
      yomi: 'いしだあゆみ',
      color: '#0233CB',
      profile: 'http://www.helloproject.com/morningmusume/profile/ayumi_ishida/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/morningmusume-10ki/theme-10059753284.html'
        },
        {
          name: 'Instagram',
          class: 'instagram',
          link: 'https://www.instagram.com/ayumi_ishida.official/'
        }
      ]
    },
    {
      name: '佐藤優樹',
      group: 'morningmusume',
      yomi: 'さとうまさき',
      color: '#00b379',
      profile: 'hhttp://www.helloproject.com/morningmusume/profile/masaki_satou/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/morningmusume-10ki/theme-10059753314.html'
        },
        {
          name: '-',
          class: 'instagram',
          link: 'javascript:void(0)'
        }
      ]
    },
    {
      name: '小田さくら',
      group: 'morningmusume',
      yomi: 'おださくら',
      color: '#dda0dd',
      profile: 'http://www.helloproject.com/morningmusume/profile/sakura_oda/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/morningmusume-10ki/theme-10068520081.html'
        },
        {
          name: '-',
          class: 'instagram',
          link: 'javascript:void(0)'
        }
      ]
    },
    {
      name: '野中美希',
      group: 'morningmusume',
      yomi: 'のなかみき',
      color: '#800080',
      profile: 'http://www.helloproject.com/morningmusume/profile/miki_nonaka/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/mm-12ki/theme-10086725506.html'
        },
        {
          name: 'Instagram',
          class: 'instagram',
          link: 'https://www.instagram.com/miki_nonaka.official/'
        }
      ]
    },
    {
      name: '牧野真莉愛',
      group: 'morningmusume',
      yomi: 'まきのまりあ',
      color: '#f1d1d4',
      profile: 'http://www.helloproject.com/morningmusume/profile/maria_makino/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/mm-12ki/theme-10086725508.html'
        },
        {
          name: '-',
          class: 'instagram',
          link: 'javascript:void(0)'
        }
      ]
    },
    {
      name: '羽賀朱音',
      group: 'morningmusume',
      yomi: 'はがあかね',
      color: '#ffa500',
      profile: 'http://www.helloproject.com/morningmusume/profile/akane_haga/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/mm-12ki/theme-10086725549.html'
        },
        {
          name: '-',
          class: 'instagram',
          link: 'javascript:void(0)'
        }
      ]
    },
    {
      name: '加賀楓',
      group: 'morningmusume',
      yomi: 'かがかえで',
      color: '#F31C3B',
      profile: 'http://www.helloproject.com/morningmusume/profile/kaede_kaga/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/morningm-13ki/theme-10101156746.html'
        },
        {
          name: '-',
          class: 'instagram',
          link: 'javascript:void(0)'
        }
      ]
    },
    {
      name: '横山玲奈',
      group: 'morningmusume',
      yomi: 'よこやまれいな',
      color: '#FFDF00',
      profile: 'http://www.helloproject.com/morningmusume/profile/reina_yokoyama/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/morningm-13ki/theme-10101009109.html'
        },
        {
          name: '-',
          class: 'instagram',
          link: 'javascript:void(0)'
        }
      ]
    },
    {
      name: '森戸知沙希',
      group: 'morningmusume',
      yomi: 'もりとちさき',
      color: '#FFFFFF',
      profile: 'http://www.helloproject.com/morningmusume/profile/chisaki_morito_m/',
      sns: [
        {
          name: 'Ameba',
          class: 'ameba',
          link: 'https://ameblo.jp/morningm-13ki/theme-10103247869.html'
        },
        {
          name: '-',
          class: 'instagram',
          link: 'javascript:void(0)'
        }
      ]
    }
  ]
})

export const getters = {
  morningMusume(state) {
    return state.items.filter(item => {
      return item.group === 'morningmusume'
    })
  }
}
