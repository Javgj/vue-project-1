import Vue from 'vue'

export const details = {
  state: {
    characters: null,
    pagination: {
      currentPage: 1,
      count: 0
    }
  },
  actions: {
    // fecth
    fetchGetCharacters: ({ commit }, { id }) => {
      try {
        return new Promise((resolve) => {
          Vue.prototype.$request.Send(`character?page=${id}`, 'get').then(({ data, success, status, error }) => {
            if (!success && !data && status !== 200) {
              return resolve({
                success: false,
                data: null,
                error
              })
            }
            commit('SET_CHARACTERS', data.results)
            details.state.pagination.count = data.info.count
            resolve({
              success,
              data
            })
          })
        })
      } catch (error) {
        console.error(`This is an error: ${error}`)
      }
    },
    fetchGetCharacter: ({ commit }, { id }) => {
      try {
        return new Promise((resolve) => {
          Vue.prototype.$request.Send(`character/${id}`, 'get').then(({ data, success, status, error }) => {
            if (!success && !data && status !== 200) {
              return resolve({
                success: false,
                data: null,
                error
              })
            }
            resolve({
              success,
              data
            })
          })
        })
      } catch (error) {
        console.error(`This is an error: ${error}`)
      }
    }
  },
  mutations: {
    SET_CHARACTERS: (state, characters) => {
      state.characters = characters
    },
    SET_PAGINATION: (state, pagination) => {
      state.pagination = pagination
    }
  },
  getters: {
    characters: (state) => {
      return state.characters
    },
    pagination: (state) => {
      return state.pagination
    }
  }
}
