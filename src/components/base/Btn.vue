<template>
  <v-btn
    :color="color"
    :depressed="depressed"
    :disabled="disabled"
    :min-width="minWidth"
    :tile="tile"
    class="font-weight-bold"
    min-height="3rem"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',

    props: {
      color: {
        type: String,
        default: '#ff7e00',
      },
      depressed: {
        type: Boolean,
        default: true,
      },
      minWidth: {
        type: [Number, String],
        default: 164,
      },
      tile: {
        type: Boolean,
        default: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>
