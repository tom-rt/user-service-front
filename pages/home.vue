<template>
  <div>
    <h1>HOME</h1>
    <form @submit.prevent="getUserData">
      <p v-if="formError" class="error">{{ formError }}</p>
      <p v-if="userData">{{ userData }}</p>
      <button type="submit">Get user data</button>
    </form>
    <button v-on:click="disconnect">Disconnect</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData() {
    return {
      formError: null,
      userData: null
    }
  },
  middleware: 'authenticated',
  methods: {
    async getUserData() {
      const ret = await this.$axios.get(`/user/${this.$store.state.userId}`)
      this.userData = ret.data
    },
    async disconnect() {
      await this.$axios.post(`/user/${this.$store.state.userId}/logout`)
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>