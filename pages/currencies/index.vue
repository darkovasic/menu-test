<template>
  <div class="currencies-container">
    <div class="top">
      <div class="top-left-div">
        <h1>Currencies</h1>
      </div>
      <div class="top-right-div">

      <v-btn 
        depressed 
        color="#FF6600" 
        class="btn-add-currency white--text"
        type="button"    
        @click="toggleDrawer" 
        height="40px"> &#10010; Add Currency </v-btn>

      </div>
    </div>

    <div class="search-wrapper">
      <v-text-field
        outlined dense solo flat
        type="text"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        v-model="search"

        @keyup.enter="onSearch"
      ></v-text-field>
    </div>

    <div class="table-wrapper">
        <v-data-table
          :headers="headers"
          :items="currencies"
          item-key="id"
          :items-per-page="15"
          class="elevation-0"
          hide-default-footer
          no-data-text="There are no currencies added"
          @click:row="loadCurrency"
        ></v-data-table>

    </div>
    <v-navigation-drawer
      absolute
      stateless
      right
      width="440px"
      v-model="drawer"
    >
      <form @submit.prevent="submit">
        <div class="add-currency-header">
          <div class="add-currency-title">
            <p>{{ currency.id ? 'Edit' : 'Add' }} Currency</p>
          </div>
          <div class="add-currency-buttons text-right">
            <v-btn 
              depressed 
              outlined 
              type="button"    
              @click="toggleDrawer(false)" 
              height="40px">Cancel</v-btn>
            <Button
              type="submit"     
            >{{ currency.id ? 'Save' : 'Add' }}</Button>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="add-currency-form">
          <p>Currency name</p>
          <input
            type="text"
            placeholder="Add name"
            :value="currencyName"
            @input="updateCurrencyName"
          />
          <p>Currency code</p>
          <input
            type="text"
            placeholder="e.g. USD"
            :value="currencyCode"
            @input="updateCurrencyCode"
          />
          <p>Currency symbol</p>
          <input
            type="text"
            placeholder="Add symbol"
            :value="currencySymbol"
            @input="updateCurrencySymbol"
          />
        </div>
      </form>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';
import Input from '@/components/UI/Input.vue';
import {mapGetters, mapState} from 'vuex';

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
        { text: 'Currency Name'.toUpperCase(), value: 'name' },
        { text: 'Currency Code'.toUpperCase(), value: 'code' },
        { text: 'Currency Symbol'.toUpperCase(), value: 'symbol' },
      ],
    }
  },
  computed: {
    ...mapGetters([
        'currency',
        'currencies',
        // 'search'
    ]),    
    ...mapState({
      currencyName: state => state.currency.name,
      currencyCode: state => state.currency.code,
      currencySymbol: state => state.currency.symbol,
    }),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        return val;
      }
    },
    search: {
      get () {
        return this.$store.state.search
      },
      set (value) {
        console.log('set', value);
        this.$store.commit('updateSearch', value)
      }
    }
  },
  methods: {
    // updateSearch (e) {
    //   console.log(e);
    //   this.$store.commit('updateSearch', e.target.value)
    // },
    updateCurrencyName (e) {
      this.$store.commit('updateCurrencyName', e.target.value)
    },
    updateCurrencyCode (e) {
      this.$store.commit('updateCurrencyCode', e.target.value)
    },
    updateCurrencySymbol (e) {
      this.$store.commit('updateCurrencySymbol', e.target.value)
    },
    submit () {
      this.$store.commit('updateCurrencies', {
        id: this.currency.id ?? Math.floor(Math.random() * 10000) + 99999,
        name: this.currencyName,
        code: this.currencyCode,
        symbol: this.currencySymbol
      })
    },
    toggleDrawer (v) {
      this.$store.commit('toggleDrawer', v)
    },  
    loadCurrency (event) {
      this.$store.commit('loadCurrency', event.id);
    }
  },
  // watch: {
  //   '$store.state.drawer': function() {

  //   }
  // }
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

.add-currency-form input
  width: 100%
  min-height: 40px
  font-size: 14px
  padding: 0 12px
  border: 1px solid #ccc
  margin-bottom: 20px
  -webkit-border-radius: 2px
  -moz-border-radius: 2px
  border-radius: 4px
</style>