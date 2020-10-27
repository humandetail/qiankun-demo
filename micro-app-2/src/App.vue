<template>
  <div id="app">
    <div id="nav">
      <h2>Micro-app-2</h2>
      <ul class="list">
        <li class="item">
          <router-link router-link to="/">Home</router-link>
        </li>
        <li class="item">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  padding: 30px 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  min-width: 200px;
  min-height: 100%;
  /* padding-bottom: 1000px;
  margin-bottom: -1000px; */
  border-right: 1px solid #e1e1e1;
}

#nav .list {
  padding: 30px 0;
  list-style: none;
}

#nav .item a {
  display: block;
  height: 36px;
  line-height: 36px;
  color: #2c3e50;
  text-align: center;
  text-decoration: none;
}

#nav .item a:hover {
  font-weight: 700;
}

#nav .item .router-link-exact-active {
  background-color: #3385ff;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}
</style>
