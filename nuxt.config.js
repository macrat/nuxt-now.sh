export default {
    head: {
        title: 'nuxt-now.sh',
    },
    serverMiddleware: [
        {path: '/api', handler: '~/api'},
    ],
    env: {
        SECRET_ENV: process.env.SECRET_ENV,
    },
};
