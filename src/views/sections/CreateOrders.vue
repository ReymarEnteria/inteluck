<template>
  <base-section id="create-order-trips">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="Transport Services Offered"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionOrderTrip',

    data: () => ({
      cards: [
        {
          title: 'Via Land Transportation',
          subtitle: 'Best Offer!',
          imgURL: 'https://www.inteluck.com/wp-content/uploads/2020/04/icon-needs-01-1-280x241.png',
          show: true,
          isDisabled: false
        },
        {
          title: 'Via Sea Transportation',
          subtitle: 'Unavailable',
          imgURL: 'https://cdn1.iconfinder.com/data/icons/logistic-delivery-1-8/130/37-512.png',
          show: true,
          isDisabled: true
        },
        {
          title: 'Via Air Transportation',
          subtitle: 'Unavailable',
          imgURL: 'https://previews.123rf.com/images/vectorlab/vectorlab1706/vectorlab170600218/80927342-isometric-delivery-concept-air-cargo-plane-freight-transportation-vector-flat-3d-illustration.jpg',
          show: true,
          isDisabled: true
        },
      ],
    }),
  }
</script>
