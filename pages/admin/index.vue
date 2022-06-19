<template>
  <!-- <v-row>
    <v-col md="9"> -->
  <div class="currencies-container">
    <div class="top">
      <div class="top-left-div">
        <h1>Currencies</h1>
      </div>
      <div class="top-right-div">
        <Button
          class="btn-add-currency"
          type="button"    
          nuxt to="/admin"         
        > &#10010; Add Currency </Button>
      </div>
    </div>

    <div class="search-wrapper">
      <Input
        type="text"
        label="Search"
        prepend-inner-icon="mdi-magnify"
      />
    </div>

    <div>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
    </div>
  </div>

    <!-- </v-col>
  </v-row> -->
</template>

<script>
import Button from '@/components/UI/Button.vue';
import Input from '@/components/UI/Input.vue';

export default {
  layout: 'admin',
  name: 'AdminPage',
  components: {
    Button,
    Input
  },
  data() {
    return {
      headers:[],

    }
  }
}
</script>

<style lang="sass" scoped>
.currencies-container
  width: 80%
  height: 100%

.top
  position: relative
  padding: 30px 25px
  display: flex

.btn-add-currency  
  float: right

.top-left-div
  width: 50%
  float: left  

.top-right-div
  width: 50%
  float: right

h1
  font-weight: 700
  font-size: 28px
  line-height: 32px

.search-wrapper
  width: 300px
  height: 34px
  padding: 0px 25px    

</style>