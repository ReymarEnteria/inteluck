<template>
  <base-section id="order-trips">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="Create Trip Orders"
    />

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
				<div>
					<base-title
						title="Origin"
						space="1"
						tag="h2"
					/>
					<v-row>
						<v-col 
							cols="12"
							md="9"
						>
							<gmap-autocomplete
								class="input-field"
								@place_changed="setOrigin"
							>
							</gmap-autocomplete>
						</v-col>
						<v-col
							cols="12"
							md="2"
						>
							<base-btn class="input-btn" @click="addMarker">Add Marker</base-btn>
						</v-col>
					</v-row>
				</div>

					<div style="margin-top: 2rem">
						<base-title
							title="Destination"
							space="1"
							tag="h2"
						/>
						<v-row>
							<v-col 
								cols="12"
								md="9"
							>
								<gmap-autocomplete
									class="input-field"
									@place_changed="setDestination"
								>
								</gmap-autocomplete>
							</v-col>
							<v-col
								cols="12"
								md="2"
							>
								<base-btn class="input-btn" @click="addMarker">Add Marker</base-btn>
							</v-col>
						</v-row>
					</div>

					<div v-if="tripDetails">
						<v-row>
							<v-col
								class="cards"
								cols="12"
								md="3"
							>
								<base-title
									title="Distance"
									space="1"
									tag="h3"
								/>
								<base-heading :title="tripDetails.distance.text" />
							</v-col>
							<v-col
								class="cards"
								cols="12"
								md="3"
							>
								<base-title
									title="Duration"
									space="1"
									tag="h3"
								/>
								<base-heading :title="tripDetails.duration.text" />
							</v-col>
							<v-col
								class="cards"
								cols="12"
								md="4"
							>
								<base-title
									title="Pricing"
									space="1"
									tag="h3"
								/>
								<base-heading :title="pricing" />
							</v-col>
						</v-row>
							<v-col
								cols="12"
								md="12"
							>
								<base-btn class="create-trip-btn" @click="createTripOrder">Save Trip Order</base-btn>
							</v-col>
					</div>
				</v-col>
				<v-col
					cols="12"
					md="6"
				>
					<gmap-map
					:center="center"
					:zoom="12"
					style="width: 100%; height: 50vh"
				>
					<template v-show="origin && destination">
						<DirectionsRenderer 
							travelMode="DRIVING" 
							:origin="origin" 
							:destination="destination"
							@travelData="travelDetails"
						/>
					</template>
					<template v-if="!origin || !destination">
						<gmap-marker
							v-for="(m, index) in markers"
							:key="index"
							:position="m.position"
							@click="center=m.position"
						></gmap-marker>
					</template>
				</gmap-map>
				</v-col>
      </v-row>

			<template v-if="tripOrders.length">
				<ExistingTripOrder :orders="tripOrders" />
			</template>
    </v-container>
  </base-section>
</template>

<script>
import DirectionsRenderer from "@/components/MapDirection";
import ExistingTripOrder from "@/views/sections/ExistingOrders";

export default {
  name: "SectionMap",
  components: {
		DirectionsRenderer,
		ExistingTripOrder
  },

  data() {
    return {
      center: { lat: 0, lng: 0 },
      markers: [],
			places: [],
			currentPlace: null,
			pricing: "₱13.00 /km",
			origin: null,
			destination: null,
			tripDetails: null,
			tripOrders: []
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    setOrigin(place) {
			this.currentPlace = place
      this.origin = {
				query: place.formatted_address
			};
		},

    setDestination(place) {
			this.currentPlace = place
      this.destination = {
				query: place.formatted_address
			};
		},

		createTripOrder() {
			const order = {
				origin: this.origin.query,
				destination: this.destination.query,
				additionalDetails: {
					Distance: this.tripDetails.distance.text,
					Duration: this.tripDetails.duration.text,
					Pricing: `₱ ${this.tripDetails.distance.value}`
				}
			}
			
			this.tripOrders.push(order)
		},

    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
		},

    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
		},

    travelDetails(data) {
        this.tripDetails = data[0].legs[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.input-field {
	border: 1px solid rgba(137, 137, 137, 0.5);
	width: 100%;
	height: 3rem;
	line-height: 2;
	border-radius: 10px;
	padding: 1rem;
	box-shadow: 0 0 26px -6px rgba(137, 137, 137, 0.5);
}

.input-btn {
	color: white;
	border-radius: 10px;
	width: 100%;
}

.cards {
	border: 1px solid rgba(137, 137, 137, 0.5);
	padding: 1rem;
	box-shadow: 0 0 26px -6px rgba(137, 137, 137, 0.5);
	margin: 1rem;
	border-radius: 10px;
	text-align: center;

	.display-2{
		color: #ff7e00;
	}
}

.create-trip-btn {
	margin-left: -1rem;
	color: white;
	border-radius: 10px;
	width: 100%;
}
</style>