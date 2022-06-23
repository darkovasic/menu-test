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
        label="Search"
        prepend-inner-icon="mdi-magnify"
        v-model="search"
      ></v-text-field>
    </div>

    <div class="table-wrapper">
      <v-data-table
        :headers="headers"
        :items="loadedCurrencies"
        item-key="id"
        :items-per-page="15"
        class="elevation-0"
        hide-default-footer
        no-data-text="There are no currencies added"
      >
        <template slot="item" slot-scope="row">
          <tr @click="loadCurrency(row.item)">
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.code }}</td>
            <td>{{ row.item.symbol }}</td>
            <td align="right">
              <v-btn class="elevation-0" color="transparent" small @click.stop="deleteCurrency(row.item)"> 
                <v-icon color="#808080">mdi-trash-can-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>

    </div>
    <v-navigation-drawer
      absolute stateless right
      width="440px"
      v-model="drawer"
    >
      <v-form ref="currencyForm" @submit.prevent="submit">
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
          <v-text-field
            outlined dense solo flat
            label="Add name"
            :rules="validationRules"
            v-model="currencyName"
          ></v-text-field>
          <p>Currency code</p>
          <v-text-field
            outlined dense solo flat
            label="e.g. USD"
            :rules="validationRules"
            v-model="currencyCode"
          ></v-text-field>
          <p>Currency symbol</p>
          <v-text-field
            outlined dense solo flat
            label="Add symbol"
            :rules="validationRules"
            v-model="currencySymbol"
          ></v-text-field>
        </div>
      </v-form>
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
        { text: '', value: 'controls', sortable: false },
      ],
      validationRules: [
        v => !!v || 'Field is required',
      ],
    }
  },
  computed: {
    ...mapGetters([
        'currency',
        'loadedCurrencies'
    ]),    
    ...mapState({
      //
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
        this.$store.commit('updateSearch', value)
      }
    },
    currencyName: {
      get () {
        return this.$store.state.currency.name
      },
      set (value) {
        this.$store.commit('updateCurrencyName', value)
      }
    },
    currencyCode: {
      get () {
        return this.$store.state.currency.code
      },
      set (value) {
        this.$store.commit('updateCurrencyCode', value)
      }
    },
    currencySymbol: {
      get () {
        return this.$store.state.currency.symbol
      },
      set (value) {
        this.$store.commit('updateCurrencySymbol', value)
      }
    },

  },
  methods: {
    submit () {
      if (this.$refs.currencyForm.validate()){
        this.$store.commit('updateCurrencies', {
          id: this.currency.id ?? Math.floor(Math.random() * 10000) + 99999,
          name: this.currencyName,
          code: this.currencyCode,
          symbol: this.currencySymbol
        });
        this.$refs.currencyForm.resetValidation();
      }
    },
    toggleDrawer (v) {
      this.$store.commit('toggleDrawer', v)
    },  
    loadCurrency (event) {
      this.$store.commit('loadCurrency', event.id);
    },
    deleteCurrency (currency) {
      this.$store.commit('deleteCurrency', currency.id);
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