<template>
  <v-text-field
    v-bind="$attrs"
    outlined 
    dense
    solo
    flat
    @input="$emit('input', $event)"
    color="orange"
  ></v-text-field>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style lang="sass">

</style>