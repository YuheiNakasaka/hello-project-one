export const state = () => ({
  hearts: []
})

export const mutations = {
  ADD_HEARTS(payload, item) {
    payload.hearts.push(item)
  },
  REMOVE_HEARTS(payload, item) {
    payload.hearts.splice(payload.hearts.indexOf(item), 1)
  }
}

export const actions = {
  add: ({ commit }, item) => {
    commit('ADD_HEARTS', item)
  },
  remove: ({ commit }, item) => {
    commit('REMOVE_HEARTS', item)
  },
  include: ({ state }, item) => {
    return state.hearts.filter(heart => heart.name === item.name).length
  }
}

export const getters = {
  allHearts(state) {
    return state.hearts
  }
}
