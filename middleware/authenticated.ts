export default async function ({ store, redirect }) {
    console.log('middleware', store.state.token)
    // console.log(await this.$store.commit('getToken'))
    // const token = store.getters.getToken
    // const tok2 = store.dispatch('getToken')
    // console.log("token", token);
    // console.log("tok2", tok2);
    // if (!!token) {
    //     return redirect('/login')
    // }
}