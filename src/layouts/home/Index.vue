<template>
  <v-app>
    <home-app-bar />
    <home-view />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',

    components: {
      HomeAppBar: () => import('@/layouts/home/AppBar'),
      HomeView: () => import('@/layouts/home/View')
    },
  }
</script>
