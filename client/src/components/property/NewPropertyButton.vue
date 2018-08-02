<template>
  <div>
    <router-link v-if="$route.name !== 'new-property'" class="btn-new-property shadow" :to="{ name: 'new-property'}">+</router-link>
  </div>
</template>

<style scoped>
.btn-new-property {
  position: fixed;
  right: 50px;
  bottom: 20px;
  background-color: #2d9ca4;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 50px;
  padding: 0px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 100;
}

.btn-new-property:hover {
  background-color: #268389;
}
</style>
