export default {
    plugins: [
        '~/plugins/axios.ts',
    ],
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:8081'
    },
    build: {
        additionalExtensions: ['ts', 'tsx'],
    },
}