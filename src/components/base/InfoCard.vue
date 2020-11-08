<template>
  <v-theme-provider :dark="dark">
    <v-container class="pa-0">
      <v-row
        :justify="justify"
        no-gutters
      >
        <v-col
          v-if="icon"
          :class="`text-${align}`"
          cols="12"
          class="mb-4"
        >
          <base-icon :color="color">
            {{ icon }}
          </base-icon>
        </v-col>

        <v-col
          v-if="title || subtitle"
          :cols="imgURL ? 7 : 12"
        >
          <base-subtitle
            v-if="subtitle"
            :title="subtitle"
            space="1"
          />

          <base-title
            :title="title"
            :text="text"
            class="text-uppercase"
            space="1"
          />

          <base-divider :color="color" />
          <base-btn
            v-if="show" 
            outlined 
            :disabled="isDisabled"
          > 
            {{ !isDisabled ? 'BOOK NOW!' : 'UNAVAILABLE' }}
          </base-btn>
          <base-body
            v-if="text || $slots.default"
            :text="text"
            space="6"
          >
            <slot />
          </base-body>
        </v-col>

        <v-col
          v-if="imgURL"
          cols="3"
        >
          <base-img
            :src="imgURL"
            width="100%"
            contain
          />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseInfoCard',

    mixins: [Heading],

    props: {
      dark: Boolean,
      imgURL: String,
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      subtitle: String,
      text: String,
      title: String,
      show: Boolean,
      isDisabled: Boolean,
    },
  }
</script>
