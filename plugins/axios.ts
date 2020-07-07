export default ({ $axios, store }) => {
   $axios.onRequest(config => {
   })

   $axios.onResponse(config => {
      console.log(config)
      if (config.status == 401 && config.statusText == "Token expired.") {
         // refresh token
         // set token
      }
   })
}
