<template>
  <div>
    <select :value="value"
            @input="event => { $emit('input', event.target.value) }">
      <option disabled value="">Please select one</option>
      <option v-for="item in items" :key="item" :value="item">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectList',
  props: ['value', 'items']
}
</script>
