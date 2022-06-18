<template>
  <v-row>
    <v-col class="sidebar">
      <Sidebar />
      <!-- <h1>Hmmmmmmmm</h1> -->
    </v-col>
  </v-row>
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar.vue';

export default {
  layout: 'admin',
  name: 'AdminPage',
  components: {
    Sidebar
  }
}
</script>

<style lang="sass" scoped>
.sidebar
  width: 300px

</style>