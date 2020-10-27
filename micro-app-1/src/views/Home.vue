<template>
  <div class="home">
    <header class="home-header">
      <h1 class="title">子应用 - 1</h1>
    </header>
    <br />

    <section class="home-section top-message">
      <h2 class="title">来自父应用的Message：</h2>
      <div class="message">{{ topMessage }}</div>
    </section>

    <section class="home-section top-state">
      <h2 class="title">来自父应用的状态：</h2>
      <div class="state" v-if="topState">{{ topState }}</div>
      <div class="empty-state" v-else>- Empty -</div>
      <button class="btn" @click.stop="handleClick">执行父应用的方法</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      topMessage: '',
      topState: ''
    }
  },
  mounted () {
    // 获取父应该传递的message
    this.topMessage = this.$topData.message;
    // 事件监听
    this.$topOnGlobalStateChange((state, prevState) => {
      this.topState = state.topState;
    })
  },
  methods: {
    handleClick () {
      const message = this.topMessage;
      this.$topMethods.showMsg(message); // 执行父应用传递过来的方法
    }
  }
}
</script>

<style scoped>
.home {
  flex: 1;
  padding: 0 20px;
  text-align: left;
}

.home-section .message,
.home-section .state,
.home-section .empty-state {
  padding: 10px;
}

.top-state .btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
</style>