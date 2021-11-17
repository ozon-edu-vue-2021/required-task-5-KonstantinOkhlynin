<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.app {
  background-color: #fafafa;
  padding: 24px;
  display: flex;
  flex-direction: column;
}

html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
}

* {
  font-family: "Roboto Slab", serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  color: #2c3e50;
  outline: none;
}
</style>
