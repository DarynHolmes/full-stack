<template>
  <div v-if="property" class="property">
    <div class="property-price">{{ formattedPrice }}</div>
    <div class="property-type">{{ property.propertyType }}</div>
    <div class="property-short-description">
      <div class="property-title">Short Description</div>
      <div>{{ property.shortDescription }}</div>
    </div>
    <div class="property-long-description">
      <div class="property-title">Logn Description</div>
      <div>{{ property.longDescription }}</div>
    </div>
    <div class="property-viewings">
      <div class="property-title">Viewings</div>
      <property-viewings :viewings="property.viewings"></property-viewings>
    </div>
  </div>
</template>

<script>
import accounting from 'accounting'
import GET_PROPERTY_QUERY from '@/graphQL/queries/getProperty'
import PropertyViewings from '@/components/property/PropertyViewings.vue'

export default {
  name: 'property',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    PropertyViewings
  },
  computed: {
    formattedPrice: function() {
      return accounting.formatMoney(this.property.price, {
        symbol: this.property.currency,
        format: '%v %s',
        precision: 0
      })
    }
  },
  apollo: {
    property: {
      query: GET_PROPERTY_QUERY,
      variables() {
        return { id: this.id }
      },
      error(error) {
        console.error('Error ', error)
      }
    }
  }
}
</script>

<style scoped>
.property {
  padding: 50px;
  display: grid;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'type price'
    'short-description short-description'
    'long-description long-description'
    'property-viewings property-viewings';
}

.property-title {
  font-size: 20px;
  color: #999;
  margin-bottom: 15px;
}

.property-price {
  grid-area: price;
  text-align: right;
  font-size: 20px;
}

.property-type {
  grid-area: type;
  font-size: 20px;
}

.property-short-description {
  grid-area: short-description;
}

.property-long-description {
  grid-area: long-description;
}

.saving-property {
  color: grey;
}

.property-viewings {
  grid-area: property-viewings;
}
</style>
