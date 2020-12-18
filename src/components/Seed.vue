<template>
  <div class="seed">
    <h3>助记词页面使用明细</h3>
    <p>
      这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，
    </p>
    <h3>输入助记词</h3>
    <SeedField class="seedField" ref="seedField" />
    <div class="buttonContainer">
      <button class="onButton"  type="button" @click="toPrivateKey">生成秘钥</button>
      <button class="onButton"  :data-clipboard-text="privateKey" type="button" @click="copy" id="copy_text">复制秘钥</button>
    </div>
    <h3>秘钥</h3>
      <p>{{ privateKey }}</p>
  </div>
</template>

<script>
import SeedField from '../template/seedTextView'
import Clipboard from 'clipboard';
// import { toSeedPhrase } from '../services/wallet'
import { fromSeedPhrase } from '../services/wallet'

export default {
  name: 'Seed',
  components: {
    SeedField
  },
  data() {
    return {
      labelarr: [],
      privateKey: '尚未生成',
    }
  },
  methods: {
    copy() {
      // var _this = this;
      console.log('zale ')
      var clipboard = new Clipboard('#copy_text');

      clipboard.on('success', () => {
        alert("复制成功")
        // 释放内存
        clipboard.destroy()
      })

      clipboard.on('error', () => {
        // 不支持复制
        alert('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
    },
    toPrivateKey() {
      this.labelarr = this.$refs.seedField.labelarr
      if (!this.labelarr || this.labelarr === 'undefined' || this.labelarr.length === 0) {
        this.privateKey = '尚未生成'
        alert('请输入助记词')
        return
      }
      if (this.labelarr.length !== 24) {
        this.privateKey = '尚未生成'
        alert('助记词应为24个英文单词，请输入正确的格式')
        return
      }
      var SeedPhrase = this.labelarr.join(' ')
      // var privateKey = '0x0da7e6c11f5353618ae3091451f1ade12e8dfae2fee75d6462a1010a91dbd593';
      // this.privateKey = toSeedPhrase(privateKey)
      // var SeedPhrase = 'asset dish raccoon dirt cry radio clog gentle begin moon hidden seat trip word message table frost cart portion acoustic poverty unknown film isolate'
      this.privateKey = fromSeedPhrase(SeedPhrase)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.seed {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 2rem;
}

.seedField {
  margin: 2rem 0;
}

h3 {
  margin: 2rem 0 1rem;
}

p {
  background-color: #b6b0b0;
  color: #fffefe;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 1rem 1rem;
  word-wrap: break-word;
}

.buttonContainer {
  display: flex;
  display: -webkit-flex;
  justify-content: space-around ;
}

button {
  height: 2.5em;
  font-size: 1.25rem;
  background-color: #00d1b2;
  color: #ffffff;
  cursor: pointer;
  padding: calc(0.375rem - 1px) 0.75em;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 6px;
  outline-width: 0;
}

</style>
