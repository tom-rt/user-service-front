<template>
  <div>
    <h1>HOME</h1>
    <form @submit.prevent="getUserData">
      <p v-if="formError" class="error">{{ formError }}</p>
      <button type="submit">Get user data</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData() {
    return {
      formError: null
    }
  },
  methods: {
    async getUserData() {
      console.log('GETTTOKEN', this.$store.getters['getToken'])
      const ret = await this.$axios.get(
        `http://localhost:8081/v1/user/${this.$store.state.userId}`
      )
    }
  }
}
</script>

<style>
</style>