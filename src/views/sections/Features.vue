<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-truck-check',
          title: 'Land Transportation services',
          text: 'Our expertise in land transportation includes Full Truck Load, Less than Truck Load and Inter-island Transportation.',
        },
        {
          icon: 'mdi-warehouse',
          title: 'Warehouse & Storage Services',
          text: 'You will be freed by the simultaneous tasks if you still handle your own storage needs and supply chain duties. We provide a full-featured warehousing and storage for smooth transaction and movement of your cargoes.',
        },
        {
          icon: 'mdi-airplane',
          title: 'Air & Ocean Freight Services',
          text: 'Customized solutions for your specific Air & Ocean Freight requirement are provided. We are also experienced in handling Customs Clearance.',
        },
        {
          icon: 'mdi-transit-connection-variant',
          title: 'Logistic Optimization Services',
          text: 'Flexible solution that provides Inbound & Outbound Process Analyzation, In-transit Delivery Trip Analyzation that leads to Efficiency & Cost Saving.',
        },
      ],
    }),
  }
</script>
