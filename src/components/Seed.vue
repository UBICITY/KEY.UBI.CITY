<template>
  <div class="seed">
    <div class="eventBox">
      <div class="seedPhraseBox">
        <SeedField class="seedPhrase"
                   ref="seedField" />
        <button type="button"
                @click="toPrivateKey"
                class="seedButton">生成秘钥</button>
      </div>
      <div class="seedPhraseBox">
        <div class="private">{{ privateKey }}</div>
        <button type="button"
                class="seedButton"
                :disabled="isAble"
                :data-clipboard-text="privateKey"
                @click="copy"
                id="copy_text">复制秘钥</button>
      </div>
    </div>
    <div class="descBox">
      <div class="title">助记词使用明细</div>
      <div class="sep"></div>
      <div class="desc">
        <p>{{ descInfo }}</p>
        <br>
        <p>{{ descInfo2 }}</p>
      </div>
    </div>
    <!-- <h3>助记词页面使用明细</h3>
    <p>
      这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，这里展示固定文案 一堆文案，
    </p>
    <h3>输入助记词</h3>
    <div class="buttonContainer">
      <button class="onButton"  type="button" @click="toPrivateKey">生成秘钥</button>
      <button class="onButton"  :data-clipboard-text="privateKey" type="button" @click="copy" id="copy_text">复制秘钥</button>
    </div>
    <h3>秘钥</h3>
      <p>{{ privateKey }}</p> -->
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
      privateKey: '此处生成秘钥',
      descInfo: "百度翻译 依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。",
      descInfo2: '支持全球200多个语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语和阿拉伯语等，覆盖4万多个翻译方向，通过开放平台支持超过40万企业和个人开发者，是国内市场份额第一的翻译类产品。'
    }
  },
  computed: {
    isAble() {
      if (this.privateKey === '此处生成秘钥') {
        return true
      }
      return false
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
        this.privateKey = '此处生成秘钥'
        alert('请输入助记词')
        return
      }
      if (this.labelarr.length !== 24) {
        this.privateKey = '此处生成秘钥'
        alert('助记词应为24个英文单词，请输入正确的格式')
        return
      }
      var SeedPhrase = this.labelarr.join(' ')
      try {
        this.privateKey = fromSeedPhrase(SeedPhrase)
        alert(`生成私钥成功`)
      } catch (error) {
        this.privateKey = '此处生成秘钥'
        console.log(error.message)
        alert(`生成私钥失败,${error.message},请检查助记词输入是否正确`)
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@media screen and (min-width: 751px) {
  .seed {
    width: 1080px;
    margin: 145px auto 91px;
    display: flex;
    display: -webkit-flex;
    .eventBox {
      width: 584px;
      height: auto;
      display: flex;
      display: -webkit-flex;
      padding-left: 56px;
      .seedPhraseBox {
        position: relative;
        width: 281px;
        height: 371px;
        margin-right: 11px;
        background: #ffffff;
        border-radius: 9px;
        .seedPhrase {
          margin: 26px 23px 70px 23px;
          width: auto;
          height: auto;
        }
        .private {
          margin: 61px 25px 70px 25px;
          color: #000000;
          font-size: 12px;
          opacity: 0.28;
          width: auto;
          height: auto;
        }
        .seedButton {
          position: absolute;
          width: 135px;
          height: 34px;
          background: #00d1b2;
          border-radius: 5px;
          border: 1px solid transparent;
          outline-width: 0;
          bottom: 26px;
          left: 50%;
          transform: translateX(-50%);
          color: #ffffff;
          font-size: 11px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
        }
        .seedButton:disabled {
          opacity: 0.46;
        }
      }
    }
    .descBox {
      margin: 24px 70px 0 57px;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      .title {
        height: 23px;
        font-size: 16px;
        line-height: 23px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        margin-bottom: 23px;
      }
      .sep {
        width: 56;
        height: 2px;
        background-color: #ffd85a;
        margin-bottom: 34px;
      }
      .desc {
        opacity: 0.68;
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
}

@media only screen and (min-width: 40px) and (max-width: 750px) {
  .seed {
    max-width: 1080px;
    margin: 11.7rem 2rem 5rem 2rem;
    display: flex;
    display: -webkit-flex;
    flex-direction: column-reverse;
    .eventBox {
      width: 33.5rem;
      height: auto;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      .seedPhraseBox {
        position: relative;
        width: 33.5rem;
        height: 38rem;
        background: #ffffff;
        border-radius: 1.4rem;
        margin-bottom: 1.8rem;
        .seedPhrase {
          margin: 3.2rem 2.6rem 9rem 2.6rem;
          width: auto;
          height: auto;
        }
        .private {
          margin: 4.2rem 4.2rem 9rem 4.2rem;
          color: #000000;
          font-size: 1.4rem;
          line-height: 2.4rem;
          opacity: 0.28;
          width: auto;
          height: auto;
        }
        .seedButton {
          position: absolute;
          width: 21.7rem;
          height: 5.4rem;
          background: #00d1b2;
          border-radius: 0.7rem;
          border: 0.1rem solid transparent;
          outline-width: 0;
          bottom: 3.3rem;
          left: 50%;
          transform: translateX(-50%);
          color: #ffffff;
          font-size: 1.8rem;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
        }
        .seedButton:disabled {
          opacity: 0.46;
        }
      }
    }
    .descBox {
      margin: 0;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 4rem;
      .title {
        height: 3rem;
        font-size: 2.2rem;
        line-height: 3rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        margin-bottom: 2.7rem;
      }
      .sep {
        width: 7.2rem;
        height: 0.04rem;
        background-color: #ffd85a;
        margin: 0 auto 3.6rem;
      }
      .desc {
        opacity: 0.68;
        font-size: 1.6rem;
        line-height: 3.3rem;
      }
    }
  }
}
</style>
