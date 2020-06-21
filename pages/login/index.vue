<template>
  <div class="container">
  
    <h1>Login</h1>

    <form @submit.prevent="login">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <p>Username: <input v-model="username" type="text" name="username"></p>
      <p>Password: <input v-model="password" type="password" name="password"></p>
      <button type="submit">
        Login
      </button>
    </form>

  </div>  
</template>

<script>
import axios from 'axios'

export default {
data () {
    return {
      formError: null,
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        console.log(this.username)
        console.log(this.password)

        // axios.defaults.headers.post['Content-Type'] ="application/json";
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";

        const data = { name: this.username, password: this.password };
        
        const ret = await axios.post('http://localhost:8081/v1/user', data)

        console.log("ret", ret)

      } catch (e) {
        this.formError = e.message
      }
    },
  }
}
</script>

<style>
</style>