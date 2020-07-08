export default ({ $axios, store, redirect }) => {
   $axios.onRequest(config => {
   })

   $axios.onResponse(async ret => {
      return ret
   })

   $axios.onResponseError(async err => {
      if (err.response.status == 401 && err.response.data.message == "Token expired.") {
         const refresh = await $axios.post('http://localhost:8081/v1/refresh/token')
         if (refresh.status == 200) {
            $axios.setToken(refresh.data.token, 'Bearer')
         } else {
            store.state.token = null;
            store.state.id = null;
            redirect("/login")
         }
         // set token
         return err
      } else {
         return err
      }

   })
}
