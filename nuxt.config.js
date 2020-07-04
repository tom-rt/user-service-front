export default {
    axios: {
        baseURL: 'http://localhost:8081/v1'
    },
    modules: [
        '@nuxtjs/axios',
    ],
    build: {
        additionalExtensions: ['ts', 'tsx'],
    },
}