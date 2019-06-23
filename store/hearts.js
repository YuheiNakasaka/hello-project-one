export const state = () => ({
  hearts: []
})

export const mutations = {
  ADD_HEARTS(payload, item) {
    payload.hearts.push(item.id)
  },
  REMOVE_HEARTS(payload, item) {
    payload.hearts.splice(payload.hearts.indexOf(item.id), 1)
  }
}

export const actions = {
  add: ({ commit }, item) => {
    commit('ADD_HEARTS', item)
  },
  remove: ({ commit }, item) => {
    commit('REMOVE_HEARTS', item)
  },
  include: ({ state }, itemId) => {
    return state.hearts.filter(heartId => heartId === itemId).length
  }
}

export const getters = {
  allHearts(state) {
    return state.hearts
  }
}
