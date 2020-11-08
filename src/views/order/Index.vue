<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Orders',

    metaInfo: { title: 'Trip Orders' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'create-orders',
        'map'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'order',
      },
    },
  }
</script>
