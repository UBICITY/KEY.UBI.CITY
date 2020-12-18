<template>
  <div id="app">
    <div class="header">
      <ul class="header-content">
        <li id="main" class="header-item" @click="jump">主页</li>
        <li id="person" class="header-item" @click="jump">个人</li>
        <li id="team" class="header-item" @click="jump">组织</li>
        <li id="water" class="header-item" @click="jump">水龙头</li>
      </ul>
    </div>
    <img class="logo" src="../src/assets/logo.png">
    <Seed />
  </div>
</template>

<script>
import Seed from './components/Seed.vue'

export default {
  name: 'App',
  components: {
    Seed
  },
  methods: {
    jump(e) {
      console.log('e=',e.target.id);
      //在原有窗口打开
      //window.location.href = "http://www.baidu.com";
      //打开新的窗口
      if(e.target.id === 'person') {
        window.open("https://www.baidu.com");
      } else if (e.target.id === 'team') {
        window.open("https://www.sina.com");
      } else if (e.target.id === 'main') {
        window.open("https://www.ubi.city");
      } else if (e.target.id === 'water') {
        window.open("https://www.ubi.city/water");
      }
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style: none;
}

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3rem;
  background-color: #1abc9c;
}

.header-content {
  display:inline-block;
  *display:inline;
  zoom:1;
}

.header-item {
  float:left;
  color: #f0f0f0;
  font-size: 1rem;
  margin-right: 1.5rem;
  line-height: 3rem;
}

.logo {
  max-width: 80px;
  margin-top: 4rem;
}
</style>
