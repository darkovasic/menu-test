<template>
  <v-app>
    <v-main class="background">
      <v-container fill-height>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="sass" scoped>
  .background
      background-image: url('~assets/images/background-login.svg')
      background-repeat: repeat-x
</style>