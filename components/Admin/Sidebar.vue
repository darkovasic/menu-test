<template>

    <div
      class="sidenav">
      <div class="nav-list">
        <div class="nav-item">
          <AnalyticsIcon class="icon" />
          <nuxt-link to="#">Analytics</nuxt-link>
        </div>
        <div class="nav-item">
          <OffersIcon class="icon" />
          <nuxt-link to="#">Offers</nuxt-link>
        </div>
        <div class="nav-item">
          <LoyaltyIcon class="icon" />
          <nuxt-link to="#">Loyalty</nuxt-link>
        </div>
        <div class="nav-item active">
          <CurrenciesIcon class="icon" />
          <nuxt-link to="#">Currencies</nuxt-link>
        </div>
        <div class="nav-item">
          <DispatchIcon class="icon" />
          <nuxt-link to="#">Dispatch</nuxt-link>
        </div>
        <div class="nav-item">
          <ConfigurationsIcon class="icon" />
          <nuxt-link to="#">Configurations</nuxt-link>
        </div>
      </div>
    </div>

</template>

<script>
import AnalyticsIcon from '@/components/Admin/Icons/AnalyticsIcon.vue';
import OffersIcon from '@/components/Admin/Icons/OffersIcon.vue';
import LoyaltyIcon from '@/components/Admin/Icons/LoyaltyIcon.vue';
import CurrenciesIcon from '@/components/Admin/Icons/CurrenciesIcon.vue';
import DispatchIcon from '@/components/Admin/Icons/DispatchIcon.vue';
import ConfigurationsIcon from '@/components/Admin/Icons/ConfigurationsIcon.vue';

export default {
  components: {
    AnalyticsIcon,
    OffersIcon,
    LoyaltyIcon,
    CurrenciesIcon,
    DispatchIcon,
    ConfigurationsIcon
  },
  name: "Sidebar",
};
</script>


<style scoped>
.active {
  background-color: rgba(255, 102, 0, 0.07);
  color: #FF6600 !important;
}

.sidenav {
  height: 100%;
  width: 256px;
  background-color: #F2F2F2;

  position: fixed;

  box-sizing: border-box;
  padding: 30px;
}

.icon {

  margin-right: 20px;

  height: 22px;
  width: 22px;
}


.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: flex;
  padding: 15px 10px;
  align-items: center;

}

.nav-item a {
  text-decoration: none;
  color: #141414;
  font-size: 14px;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
</style>
