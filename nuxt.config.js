export default {
    head: {
        title: 'nuxt-now.sh',
    },
    serverMiddleware: [
        {path: '/api', handler: '~/api'},
    ],
};
