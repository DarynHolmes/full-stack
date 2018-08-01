<template>
  <div>
    <select :value="value"
            @input="event => { $emit('input', event.target.value) }">
      <option disabled value="">Please select one</option>
      <option v-for="type in propertyTypes" :key="type" :value="type">{{type}}</option>
    </select>
  </div>
</template>

<script>
import ENUM_VALUES_QUERY from '@/graphQL/queries/enumValues'

export default {
  name: 'propertyTypes',
  props: ['value'],
  data: function() {
    return {}
  },
  apollo: {
    propertyTypes: {
      query: ENUM_VALUES_QUERY,
      variables: { enumName: 'PropertyType' },
      update: ({ __type: { enumValues } }) =>
        enumValues.map(enumItem => enumItem.name)
    }
  },
  methods: {}
}
</script>

<style scoped>
.viewing {
  border: solid 2px grey;
  padding: 20px;
  background-color: lightgrey;
}
</style>
