<template>
  <div id="js-container">
    <header class="page-header" :style="{ backgroundColor: appColor }">
      <div class="logo">QIANKUN - 微应用解决方案</div>
      <div id="nav">
        <ul class="list">
          <li class="item">
            <router-link to="/">主应用</router-link>
          </li>
          <li class="item">
            <router-link to="/micro-app-1">微应用1</router-link>
          </li>
          <li class="item">
            <router-link to="/micro-app-2">微应用2</router-link>
          </li>
        </ul>
      </div>
    </header>
    <div class="state-control">
      <h2>全局状态管理</h2>
      <div class="row" :style="{ borderColor: appColor }">
        <input type="text" v-model="state">
        <button
          type="submit"
          @click="changeGlobalState"
          :style="{ backgroundColor: appColor }"
        >修改</button>
      </div>
    </div>
    <router-view/>
    <!-- 子应用展示区域的容器 -->
    <div id="js-micro-container"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      state: '', // 全局状态
    }
  },
  computed: {
    ...mapState(['appColor'])
  },
  methods: {
    // 修改全局状态
    changeGlobalState () {
      let state = this.state;

      this.$topActions.setGlobalState({
        topState: state
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  transition: all .3s ease-in;
}
#js-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#js-container .page-header {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #42b983;
}

#js-container .logo {
  padding: 0 10px;
  font-weight: 700px;
  font-size: 22px;
  color: #fff;
}

#js-container #nav {
  margin-left: 20px;
}

#js-container #nav .list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

#js-container #nav .item {
  padding: 0 10px;
}

#js-container #nav a {
  font-weight: normal;
  color: #fff;
  text-decoration: none;
}

#js-container #nav a.router-link-exact-active,
#js-container #nav a.router-link-active[href^="/micro"] {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
}

#js-container .state-control {
  display: flex;
  align-items: center;
  padding: 10px;
}

#js-container .state-control h2 {
  font-size: 16px;
  font-weight: 700;
}

#js-container .state-control .row {
  position: relative;
  margin-left: 20px;
  border: 2px solid #42b983;
  border-radius: 4px;
}

#js-container .state-control .row input {
  width: 300px;
  height: 36px;
  padding: 0 80px 0 10px;
  line-height: 36px;
  border: none;
  background: transparent;
  outline: none;
}

#js-container .state-control .row button {
  position: absolute;
  right: 0;
  top: 0;
  width: 80px;
  height: 36px;
  line-height: 16px;
  padding: 10px 20px;
  background-color: #42b983;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
