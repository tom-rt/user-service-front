export default {
    axios: {
        baseURL: 'http://localhost:8081/v1'
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:8081'
    },
    build: {
        additionalExtensions: ['ts', 'tsx'],
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/user/connect', method: 'post', propertyName: 'token' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/user', method: 'get', propertyName: 'user' }
                },
                // tokenRequired: true,
                tokenType: 'bearer',
                // globalToken: true,
                // autoFetchUser: true
            }
        }
    }
}