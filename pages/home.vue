<template>
  <div>
    <h1>HOME</h1>
    {{ $store.state.counter }}
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
  middleware: 'authenticated',
  fetch() {
    console.log('Fetch', this.$store.state.token)
  },
  methods: {}
}
</script>

<style>
</style>