<template>
  <v-text-field
    v-bind="$attrs"
    :value="value"
    outlined 
    dense
    solo
    flat
  ></v-text-field>
</template>

<script>
export default {
  name: 'Input'
}
</script>