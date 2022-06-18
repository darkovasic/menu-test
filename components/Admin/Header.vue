<template>
    <header>
        <div id="top-header" class="elevation-2">
            <!-- <div id="logo"> -->
                <div class="circle">A</div>
            <!-- </div>  -->

            <div class="header-left">
                <div class="brand">BRAND NAME</div>
                <div class="store">All Stores</div>
            </div>
            <div class="header-right">
                <NotificationIcon />
                <UserIcon />
            </div>


        </div>
    </header>
</template>

<script>
import NotificationIcon from '@/components/Admin/NotificationIcon.vue';
import UserIcon from '@/components/Admin/UserIcon.vue';

export default {
    components: {
        NotificationIcon,
        UserIcon
    }
}
</script>


<style lang="sass" scoped>
#top-header
    position: relative
    display: flex
    align-items: center
    padding: 15px
    z-index: 1000

.header-left
    width: 50%      

.header-right
    display: flex
    justify-content: flex-end
    width: 50%
    gap: 24px

.brand
    color: #666666
    font-weight: 600

.store
    font-weight: 700  

.circle
    background: #FF6600
    color: #fff
    padding: 9px 15px
    border-radius: 50%
    font-size: 17px
    font-weight: 600
    float: left
    margin-right: 15px
</style>