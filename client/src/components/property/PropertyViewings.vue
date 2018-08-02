<template>
  <div>
    <table v-if="viewings.length" class="viewings-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="viewing in viewings" :key="viewing.id">
          <td>{{ viewing.customer.firstName }}</td>
          <td>{{ viewing.customer.lastName }}</td>
          <td>{{ viewing.dateTime }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>There are no viewings for this property.</div>
  </div>
</template>

<script>
export default {
  name: 'property-viewings',
  props: ['viewings']
}
</script>

<style scoped>
table {
  /* background-color: darkcyan; */
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
}

th {
  color: #5d5d5d;
}

tr {
  transition: background-color 300ms linear;
}

tbody > tr:nth-child(odd) {
  background-color: #eee;
}

tbody > tr:hover {
  background-color: #bbb;
}
</style>
