<template>
  <v-text-field
    v-bind="$attrs"
    :value="value"
    outlined 
    dense
    solo
    flat
    @input="$emit('input', $event.target.value)
  ></v-text-field>
</template>

<script>
export default {
  name: 'Input'
}
</script>