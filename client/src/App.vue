<template>
  <div id="app" class="container mx-auto">
    <div id="nav" class="bg-blue-lighter">
      <router-link to="/">Home</router-link> |
      <router-link to="/affiliates">Affiliates</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
