<template>
  <div class="header">
      <div class="logo">logo</div>
      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/product">Product/Service</router-link>
        <router-link to="/opportunity">Opportunity</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/about">About</router-link>
      </div>
  </div>
  <router-view/>
</template>

<style>
    * {
        padding: 0;
        margin: 0;
        color: #333;
        font-size: 14px;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.35);
    }
    li {
        list-style: none;
    }
</style>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
    position: relative;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  width: 150px;
  text-align: center;
}
.logo {
    position: absolute;
    left: 0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
