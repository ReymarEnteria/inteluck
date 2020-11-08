<template>
  <v-fade-transition mode="out-in">
    <base-section id="existing-order-trips">
      <base-section-heading
        color="grey lighten-2"
        icon="mdi-vuetify"
        title="Active Trip Orders"
      />

      <v-container>
        <v-row>
          <base-slide-group :orders="orders" />
        </v-row>
      </v-container>
    </base-section>
  </v-fade-transition>
</template>

<script>
  export default {
    name: 'ExistingTripOrder',

    props: {
      orders: Array
    }
  }
</script>
