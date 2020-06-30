export default {
    axios: {
        baseURL: 'http://localhost:8081/v1'
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    build: {
        additionalExtensions: ['ts', 'tsx'],
    },
    auth: {
        strategies: {
            local: {
                scheme: 'refresh',
                token: {
                    property: 'token',
                    maxAge: 1800,
                    type: 'Bearer'
                },
                user: {
                    property: 'user',
                    // autoFetch: true
                },
                endpoints: {
                    login: { url: '/user/login', method: 'post', propertyName: 'token' },
                    refresh: { url: '/refresh/tokeen', method: 'post' },
                    user: false,
                    logout: { url: '/user/:id/logout', method: 'post' },
                },
                // autoLogout: false
            }
        }
    }
}