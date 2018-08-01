<template>
  <div class="properties-container">
    <div class="properties-list">
      <properties-list-item class="list-item" v-for="property in properties" :key="property.id" :property="property"></properties-list-item>
    </div>
  </div>
</template>

<script>
import PropertiesListItem from '@/components/property/PropertiesListItem.vue'
import GET_PROPERTIES_QUERY from '@/graphQL/queries/getProperties'

export default {
  name: 'properties-list',
  components: {
    PropertiesListItem
  },
  apollo: {
    properties: {
      query: GET_PROPERTIES_QUERY,
      pollInterval: 5000,
      error(error) {
        console.error('Error ', error)
      }
    }
  }
}
</script>

<style scoped>
.list-item {
  border: solid 1px #2d9ca4;
}

.list-item {
  transition: background-color 300ms linear;
}

.list-item:hover {
  background-color: #63cdd4;
}
</style>
