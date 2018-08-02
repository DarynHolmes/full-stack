<template>
  <div class="properties-wrapper">
    <new-property-button></new-property-button>
    <div class="properties-container">
        <div class="sidebar shadow">
          <properties-list></properties-list>
        </div>
        <div class="main shadow">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import PropertiesList from '@/components/property/PropertiesList.vue'
import NewPropertyButton from '@/components/property/NewPropertyButton.vue'
export default {
  name: 'properties',
  components: {
    PropertiesList,
    NewPropertyButton
  }
}
</script>

<style scoped>
.properties-wrapper {
  height: 100%;
  position: relative;
}
.properties-container {
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 10px;
  grid-template-rows: auto;
  grid-template-columns: 280px auto;
  grid-template-areas: 'sidebar main';
  align-content: stretch;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 30px;
  left: 0;
}

.sidebar {
  grid-area: sidebar;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  overflow-y: scroll;
}

.main {
  grid-area: main;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
