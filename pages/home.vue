<template>
  <div>
    <h1>HOME</h1>
    <div v-if="$auth.loggedIn">LOGGED IN {{$auth.user}}</div>
    <div v-else>NOT LOGGED IN</div>
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
  middleware: 'auth',
  // middleware: 'authenticated',
  fetch() {
    console.log('Fetch', this.$store.state.token)
  },
  methods: {}
}
</script>

<style>
</style>