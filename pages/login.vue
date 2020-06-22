<template>
  <div class="container">
    <h1>Login</h1>

    <form @submit.prevent="login">
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
    <div>
      No account yet ?
      <nuxt-link to="/subscribe" :prefetch="true">Create an account</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data() {
    return {
      formError: null,
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const ret = await axios.post(`${process.env.baseUrl}/v1/user/connect`, {
          name: this.username,
          password: this.password
        })

        if (ret.status == 200) {
          const token = ret.data.token
          this.$store.commit('setToken', token) // mutating to store for client rendering
          Cookie.set('token', token) // saving token in cookie for server rendering
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