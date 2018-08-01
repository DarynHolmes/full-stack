<template>
  <div>
    <select :value="value"
            @input="event => { $emit('input', event.target.value) }">
      <option disabled value="">Please select one</option>
      <option v-for="cr in currencies" :key="cr" :value="cr">{{cr}}</option>
    </select>
  </div>
</template>

<script>
import ENUM_VALUES_QUERY from '@/graphQL/queries/enumValues'

export default {
  name: 'currencies',
  props: ['value'],
  data: function() {
    return {
      newProperty: {
        currency: ''
      }
    }
  },
  apollo: {
    currencies: {
      query: ENUM_VALUES_QUERY,
      variables: { enumName: 'Currency' },
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
