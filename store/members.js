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
