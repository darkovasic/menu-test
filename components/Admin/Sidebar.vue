<template>
    <v-navigation-drawer 
      permanent 
      width="256" 
      color="#F2F2F2" 
      class="sidenav"
    >
      <v-list
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          nuxt :to="item.link"
        >
          <v-list-item-icon class="mr-3">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
// import AnalyticsIcon from '@/components/Admin/Icons/AnalyticsIcon.vue';
// import OffersIcon from '@/components/Admin/Icons/OffersIcon.vue';
// import LoyaltyIcon from '@/components/Admin/Icons/LoyaltyIcon.vue';
// import CurrenciesIcon from '@/components/Admin/Icons/CurrenciesIcon.vue';
// import DispatchIcon from '@/components/Admin/Icons/DispatchIcon.vue';
// import ConfigurationsIcon from '@/components/Admin/Icons/ConfigurationsIcon.vue';

export default {
  components: {
    // AnalyticsIcon,
    // OffersIcon,
    // LoyaltyIcon,
    // CurrenciesIcon,
    // DispatchIcon,
    // ConfigurationsIcon
  },
  name: "Sidebar",
  data () {
    return {
      items: [
        // { title: 'Analytics', icon: this.$vuetify.icons.analytics, link: '/analytics' },
        { title: 'Analytics', icon: 'mdi-finance', link: '/analytics' },
        { title: 'Offers', icon: 'mdi-offer', link: '/offers' },
        { title: 'Loyalty', icon: 'mdi-account-star', link: '/loyalty' },
        { title: 'Currencies', icon: 'mdi-cash-multiple', link: '/currencies' },
        { title: 'Dispatch', icon: 'mdi-bike', link: '/dispatch' },
        { title: 'Configurations', icon: 'mdi-cog', link: '/configurations' },
      ],
      right: null,
    }
  },  
};
</script>


<style lang="sass" scoped>
.v-list .v-list-item--active
  color: #FF6600

.v-list-item--active 
  
  & > .v-list-item__content > div
    font-weight: 600
    color: #FF6600

  & > .v-list-item__icon
    color: #FF6600    

.v-list-item__title
  font-size: 14px

.sidenav
  padding: 15px 15px
</style>
