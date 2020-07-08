export const state = () => ({
    token: null,
    userId: null,
    isConnected: false
})

export const mutations = {
    login(state, payload) {
        state.userId = payload.userId;
        state.token = payload.token;
        state.isConnected = true;
    },
    logout(state, payload) {
        state.userId = null;
        state.token = null;
        state.isConnected = false;
    }

}

export const getters = {
    getToken(state) {
        return state.token
    }
}