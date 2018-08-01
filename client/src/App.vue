<template>
  <div id="app">
    <div class="main-area row">
      <router-view/>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
html,
body {
  height: 94%;
}

body {
  margin: 40px;
}

#app {
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  letter-spacing: 0.8px;
  height: 100%;
  width: 100%;
  display: table;
}

.row {
  display: table-row;
  width: 100%;
}

.main-area {
  margin: 0 30px;
  height: 100%;
}

h1 {
  margin-top: 0px;
  margin-bottom: 30px;
}

.btn-standard {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-standard:hover {
  background-color: #47a34b;
}

.header,
.sub-header {
  color: #2d9ca4;
}

.sub-header {
  text-align: center;
}

.shadow {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px 0px;
}
</style>
