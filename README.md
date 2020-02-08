nuxt-now.sh
===========

My test deployment [nuxt.js](http://nuxtjs.org/) and [micro](https://github.com/zeit/micro) to [now.sh](https://zeit.co/home)

## how to deploy

Clone this repository,

``` shell
$ git clone https://github.com/macrat/nuxt-now.sh.git
$ cd nuxt-now.sh
```

And set secret value,

``` shell
$ now secrets add test-secret "hello world"
```

Finally, deploy.

``` shell
$ now
```
