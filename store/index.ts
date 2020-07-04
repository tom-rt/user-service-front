export const state = () => ({
    token: null,
    userId: null
})

export const mutations = {
    setConnection(state, payload) {
        state.userId = payload.userId
        state.token = payload.token
    }
}

export const getters = {
    getToken(state) {
        return state.token
    }
}