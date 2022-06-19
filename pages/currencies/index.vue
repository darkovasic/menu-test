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
          @click.stop="drawer = !drawer"       
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

    <div class="table-wrapper">
        <v-data-table
          :headers="headers"
          :items="desserts"
          item-key="name"
          :items-per-page="5"
          class="elevation-0"
          hide-default-footer
          no-data-text="There are no currencies added"
        ></v-data-table>

    </div>
    <v-navigation-drawer
      absolute
      permanent
      right
      width="440px"
      v-model="drawer"
    >
      <div class="add-currency-header">
        <div class="add-currency-title">
          <p>Add Currency</p>
        </div>
        <div class="add-currency-buttons text-right">
          <Button
            type="button"
            @click.stop="drawer = !drawer"       
          >Cancel</Button>
          <Button
            type="button"    
            @click.stop="drawer = !drawer"       
          >Add</Button>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="add-currency-form">
        <p>Currency name</p>
        <Input
          type="text"
          label="Add name"
        />
        <p>Currency code</p>
        <Input
          type="text"
          label="e.g. USD"
        />
        <p>Currency symbol</p>
        <Input
          type="text"
          label="Add symbol"
        />
      </div>

    </v-navigation-drawer>
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
      headers:[
        { text: 'Currency Name'.toUpperCase(), value: 'curr-name' },
        { text: 'Currency Code'.toUpperCase(), value: 'curr-code' },
        { text: 'Currency Symbol'.toUpperCase(), value: 'curr-symbol' },
      ],
      drawer: true
    }
  }
}
</script>

<style lang="sass" scoped>
.currencies-container
  position: relative
  width: 80%
  height: 100%

.top
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

top-left-div h1
  font-weight: 700
  font-size: 28px
  line-height: 32px

.search-wrapper
  width: 300px
  height: 34px
  padding: 0px 25px

.table-wrapper
  padding: 30px 25px

.add-currency-header
  padding: 15px 25px
  position: relative
  display: flex
  align-items: center

.add-currency-header p
  font-weight: 700
  font-size: 17px
  line-height: 22px
  margin-bottom: 0px

.add-currency-title
  width: 50%
  float: left

.add-currency-buttons
  width: 50%

.add-currency-form
  padding: 15px 25px

.add-currency-form p
  margin-bottom: 3px
  font-weight: 600
  font-size: 14px
  line-height: 22px

</style>