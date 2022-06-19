<template>
  <v-app>
    <v-main class="overflow-hidden">
      <!-- <v-container> -->
        <Header />
        <Sidebar class="left" />

        <Nuxt class="left" />


      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Admin/Header.vue';
import Sidebar from '@/components/Admin/Sidebar.vue';

export default {
  name: 'AdminLayout',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="sass" scoped>
.left
  float: left
</style>