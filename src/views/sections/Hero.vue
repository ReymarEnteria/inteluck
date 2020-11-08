<template>
  <section id="hero">
    <v-img
      height="100vh"
      src="https://www.inteluck.com/wp-content/uploads/2020/04/Inteluck-Website-Banner-2.jpg"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .6), rgba(5, 11, 31, .2)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="Build the most efficient logistics world" />

          <base-body>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima, expedita dicta quis placeat ex, fugiat laudantium similique, odio tenetur quas excepturi voluptatibus! Ullam, deserunt. Pariatur excepturi dolor ducimus rem.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
              Discover More
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Get Started Now
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero'
  }
</script>
