<template>
  <div id="app">
    <div id="topBar">
      <nav>
        <router-link to="/" class="routerLink">Home</router-link> |
        <router-link to="/aboutUs" class="routerLink">Contact Us!</router-link> |
        <router-link to="/orderingOptions" class="routerLink">Ordering Options</router-link> |
        <router-link to="/featuredItem" class="routerLink">Featured Item</router-link>
      </nav>
    </div>
    <br>
    <div class="welcomeBar">
      Generico's Magic Items!
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 1000px;
  background-color: #d3d3d3;
}

@media screen and (max-width: 960px) {
  #app {
    height: 1100px;
  }
}
@media screen and (max-width: 640px) {
#app {
  height: 1200px;
}
}

.welcomeBar {
  background-color: #002b5c;
  color: #ffd700;
  padding: 20px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  width: 95%;
  margin: auto;
  box-shadow: inset 0 0 0 5px #ffd700;
  border: 15px solid #002b5c;
}

#routerLink {
  color: #FFD700;
}

#topBar {
  background-color: #002b5c;
  color: #FFD700;
  font-family: 'Shadows Into Light', cursive;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #FFD700;
}
</style>
