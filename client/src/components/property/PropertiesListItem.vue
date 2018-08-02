<template>
  <router-link :to="{name: 'property', params: { id: property.id } }"
               class="property-list-item"
               :class="{
                 'saving-property-list-item': property.id.includes('temp'),
                 'property-list-item-selected': property.id === $route.params.id
                }">
    <div class="property-list-item-price">{{ formattedPrice }}</div>
    <div class="property-list-item-type">{{ property.propertyType }}</div>
    <div class="property-list-item-short-description">{{ property.shortDescription | truncate(80) }}</div>
  </router-link>
</template>

<script>
import accounting from 'accounting'

export default {
  name: 'property',
  props: {
    property: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedPrice: function() {
      return accounting.formatMoney(this.property.price, {
        symbol: this.property.currency,
        format: '%v %s',
        precision: 0
      })
    }
  }
}
</script>

<style scoped>
.property-list-item {
  transition: background-color 300ms linear;
  border: 1px solid #999;
  text-decoration: none;
  color: inherit;
  padding: 20px;
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: auto;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'type price'
    'description description';
}

.property-list-item-selected {
  background-color: #eee;
}

.property-list-item:hover {
  background-color: #bbb;
}

.property-list-item-price {
  grid-area: price;
  text-align: right;
}

.property-list-item-type {
  grid-area: type;
}

.property-list-item-short-description {
  grid-area: description;
}

.saving-property-list-item {
  color: grey;
}
</style>
