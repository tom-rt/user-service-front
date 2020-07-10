export default ({ $axios, store, redirect }) => {
   $axios.onRequest(config => {
   })

   $axios.onResponse(async ret => {
      return ret
   })

   $axios.onResponseError(async err => {
      console.log(err);
      if (err.response.status == 401 && err.response.data.message == "Token expired.") {
         const refresh = await $axios.post('http://localhost:8081/v1/refresh/token')
         if (refresh.status == 200) {
            $axios.setToken(refresh.data.token, 'Bearer')
            let originalRequest = err.config;
            originalRequest.headers['Authorization'] = 'Bearer ' + refresh.data.token;
            return $axios(originalRequest);
         } else {
            store.state.token = null;
            store.state.id = null;
            redirect("/login")
         }
      } else {
         return err
      }
   })
}
