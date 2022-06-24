import colors from 'vuetify/es5/util/colors';

import AnalyticsIcon from '@/components/Admin/Icons/AnalyticsIcon.vue';
import OffersIcon from '@/components/Admin/Icons/OffersIcon.vue';
import LoyaltyIcon from '@/components/Admin/Icons/LoyaltyIcon.vue';
import CurrenciesIcon from '@/components/Admin/Icons/CurrenciesIcon.vue';
import DispatchIcon from '@/components/Admin/Icons/DispatchIcon.vue';
import ConfigurationsIcon from '@/components/Admin/Icons/ConfigurationsIcon.vue';

export default {
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: colors.blue.darken2,
                accent: colors.grey.darken3,
                secondary: colors.amber.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3,
            },
        },
    },
    icons: {
        values: {
            analytics: {
                component: AnalyticsIcon,
            },
        },
    }, 
}