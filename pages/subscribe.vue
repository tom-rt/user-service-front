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
import axios from 'axios'

export default {
  data() {
    return {
      formError: null,
      username: '',
      password: ''
    }
  },
  methods: {
    async subscribe() {
      try {
        const ret = await axios.post('http://localhost:8081/v1/user', {
          name: this.username,
          password: this.password
        })

        if (ret.status == 201) {
          await this.$auth.loginWith('local', {
            data: {
              name: this.username,
              password: this.password
            }
          })
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