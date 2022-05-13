<template>
  <div class="header">
      <div class="logo"></div>
      <div class="nav">
        <router-link to="/" :class="{active: $route.name === 'Home'}">
            Home
        </router-link>
        <router-link to="/product" :class="{active: $route.name === 'Product'}">
            Product/Service
        </router-link>
        <router-link to="/opportunity" :class="{active: $route.name === 'Opportunity'}">
            Opportunity
        </router-link>
        <router-link to="/community" :class="{active: $route.name === 'Community'}">
            Community
        </router-link>
        <router-link to="/about" :class="{active: $route.name === 'About'}">
            About
        </router-link>
      </div>
  </div>
  <router-view/>
  <div class="footer">
      c Boxtile       Contact   |   Term of Use.  |   Privacy Policy   |   Local Sitemap
  </div>
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
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 60px;
    line-height: 60px;
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
    left:0;
    width: 50px;
    height: 50px;
    background: url(./assets/images/logo.jpeg);
    background-size: cover;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
    width: 1200px;
    margin: 60px auto 30px;
    text-align: center;
}
.active {
    opacity: 0.6;
}
</style>
