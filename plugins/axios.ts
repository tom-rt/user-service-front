import axios from 'axios';

axios.interceptors.request.use((config) => {
    // Do something before request is sent
    console.log("SEND", config)

    return config;
}, function (error) {
    console.log("ERROR SEND", error)
});

axios.interceptors.response.use((config) => {
    // Do something before request is sent
    console.log("RESPONSE", config)

    return config;
}, function (error) {
    console.log("ERROR RES", error)
});

// export default function ({ $axios, redirect }) {

//     $axios.onRequest(config => {
//         console.log("HERE")
//         console.log('Making request to ' + config.url)
//     })

//     $axios.onError(error => {
//         if (error.response.status === 500) {
//             redirect('/sorry')
//         }
//     })
// }
