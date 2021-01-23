<template>
  <div id="app">
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
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  background-color: #3c3ed6;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow-y: auto;
  color: #ffffff;
  background-color: #3c3ed6;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  word-break: break-all;
}
</style>
