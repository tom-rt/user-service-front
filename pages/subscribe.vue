<template>
  <div class="container">
    <h1>Subscribe</h1>

    <form @submit.prevent="subscribe">
      <p v-if="formError" class="error">{{ formError }}</p>
      <p>
        Username:
        <input v-model="username" type="text" name="username" />
      </p>
      <p>
        Password:
        <input v-model="password" type="password" name="password" />
      </p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      formError: null,
      username: '',
      password: ''
    }
  },
  methods: {
    async subscribe() {
      try {
        const ret = await this.$axios.post('http://localhost:8081/v1/user', {
          name: this.username,
          password: this.password
        })

        if (ret.status == 201) {
          const tmp = await this.$axios.post(
            'http://localhost:8081/v1/user/login',
            {
              name: this.username,
              password: this.password
            }
          )
          this.$store.commit('setConnection', { token: 'ayyyyy', userId: 1 })
          this.$router.push('/home')
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style>
</style>