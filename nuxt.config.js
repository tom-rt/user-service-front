export default {
    axios: {
        baseURL: 'http://localhost:8081/v1'
    },
    modules: [
        '@nuxtjs/axios',
    ],
    plugins: [
        '~/plugins/axios.ts'
    ],
    build: {
        additionalExtensions: ['ts', 'tsx'],
    }
}