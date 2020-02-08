<style scoped>
aside {
    position: fixed;
    top: 0;
    right: 0;
}
pre {
    background-color: aliceblue;
    padding: .5em 1em;
}
</style>

<template>
    <div>
        <aside>
            <a href="https://github.com/macrat/nuxt-now.sh"><img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"></a>
        </aside>

        <main>
            <h1>nuxt-now.sh</h1>
            <p>
                my test of deployment <a href="http://nuxtjs.org/">nuxt.js</a> and <a href="https://github.com/zeit/micro">micro</a> to <a href="https://zeit.co/home">now.sh</a>.
            </p>
            <p>
                secret env:
                <pre>{{ secret }}</pre>
            </p>
            <p>
                API Response:
                <pre>{{ apiData }}</pre>
            </p>
        </main>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data: () => ({
        apiData: null,
    }),
    computed: {
        secret() {
            return process.env.SECRET_ENV;
        },
    },
    async mounted() {
        this.apiData = (await axios.get('/api')).data;
    },
};
</script>
