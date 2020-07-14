<template>
  <div>
    <h1>HOME</h1>
    <form @submit.prevent="getUserData">
      <p v-if="formError" class="error">{{ formError }}</p>
      <p v-if="userData">{{ userData }}</p>
      <button type="submit">Get user data</button>
    </form>
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
    }
  }
}
</script>

<style>
</style>