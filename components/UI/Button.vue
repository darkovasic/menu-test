<template>
    <v-btn 
        depressed 
        color="#FF6600" 
        class="white--text"
        v-bind="$attrs"
        height="40px"><slot /></v-btn>
</template>

<script>
export default {
  name: 'Button'
}
</script>