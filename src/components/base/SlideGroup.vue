<template>
  <v-sheet
    class="mx-auto"
    max-width="100%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="(order, index) in orders "
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? '#ff7e00' : 'white'"
          class="ma-4"
          height="500"
          width="500"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
                <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                ></v-icon>
                <v-container>
                    <v-row style="padding-left: 1rem">
                        <v-col cols="12" md="12" >
                            <div>
                                <base-subtitle title="Origin" />
                                <base-title
                                    :title="order.origin"
                                    :text="text"
                                    class="text-uppercase"
                                />
                            </div>

                            <base-divider :color="color" />
                            <div>
                                <base-subtitle title="Destination" />
                                <base-title
                                    :title="order.destination"
                                    :text="text"
                                    class="text-uppercase"
                                />
                            </div>
                        </v-col>
                    </v-row>
                    <v-row style="padding-left: 1.5rem">
                        <v-col
                            v-for="(item, index) in  order.additionalDetails"
                            :key="index"
                            class="cards"
                            cols="12"
                            md="3"
                        >
                            <base-subtitle :title="index" />
                            <base-title
                                :title="item"
                                tag="h3"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseSlidegroup',

    mixins: [Heading],

    props: {
      orders: Array,
      imgURL: String,
      color: {
        type: String,
        default: 'primary',
      },
      subtitle: String,
      text: String,
      title: String
    },
  }
</script>

<style lang="scss" scoped>
    .cards {
        border: 1px solid rgba(137, 137, 137, 0.5);
        box-shadow: 0 0 26px -6px rgba(137, 137, 137, 0.5);
        margin: 1rem;
        border-radius: 10px;

        .title{
            color: #ff7e00;
        }

        .v-application .mb-4{
            margin-bottom: 0;
        }
    }
</style>