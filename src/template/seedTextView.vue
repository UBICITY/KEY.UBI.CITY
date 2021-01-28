<template>
  <div>
    <!-- <label class="labelname">{{labelname}}</label> -->
    <div class="inputbox"
         @click.stop="clickInput">
      <div class="arrbox">
        <div v-for="(item,index) in labelarr"
             :key="index"
             class="spanbox">
          <span>{{item}}</span>
          <i class="spanclose"
             @click="removeitem(index,item)"></i>
        </div>
        <input id="seedInput"
               ref="upload"
               placeholder="每输入一个助记词后请回车确认"
               size="5"
               v-model="currentval"
               onClick="event.cancelBubble = true"
               @keyup.enter="addlabel"
               @keydown.delete="deletelabel"
               class="input"
               type="text" />
      </div>
    </div>

    <!-- 常用label展示 -->
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'seedField',
  props: {
    parentarr: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentval: '',
      labelarr: []
    }
  },
  watch: {
    labelarr(old, cur) {
      this.$emit('on-change', this.labelarr)
    },
    parentarr() {
      if (this.parentarr.length > 0) {
        this.labelarr = []
        for (let i = 0; i < this.parentarr.length; i++) {
          this.labelarr.push(this.parentarr[i])
        }
      } else {
        this.labelarr = []
      }
    }
  },
  methods: {
    clickInput() {
      this.$refs.upload.focus()
    },
    // 移除标签
    removeitem(index, item) {
      console.log('item =', item)
      this.labelarr.splice(index, 1)
    },
    // input回车加入labelarr中
    addlabel() {
      let count = this.labelarr.indexOf(this.currentval)
      if (count === -1 && this.currentval.replace(/\s+/g, "").length !== 0) {
        this.labelarr.push(this.currentval)
      }
      this.currentval = ''
    },
    deletelabel() {
      var inputValue = this.currentval
      var inputArray = this.labelarr
      // 当前无输入字段 且有已经输入的助记词字段 删除最后一个助记词
      if (inputValue.length === 0) {
        if (inputArray.length !== 0) {
          this.labelarr.pop()
        }
      }
    }
  }
}
</script>

<style>
@media screen and (min-width: 751px) {
  .inputbox {
    background-color: white;
    font-size: 12px;
    height: 276px;
    overflow-y: scroll;
  }
  .input {
    display: block;
    border: none;
    box-shadow: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    flex-basis: 100%;
    color: #34495e;
    line-height: 30px;
    margin: 2px;
    font-size: 12px;
  }
  .arrbox {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    text-align: left;
  }
  .spanbox {
    line-height: 23px;
    margin: 2px;
    padding: 0 7px;
    background-color: #3c3ed6;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    transition: 0.25s linear;
  }
  .spanbox:hover {
    padding: 0px 12px 0 2px;
  }
  .spanclose {
    color: white;
    padding: 0 5px 0 0;
    cursor: pointer;
    font-size: 12px;
    position: absolute;
    right: -6px;
    text-align: right;
    text-decoration: none;
    top: -1px;
    width: 100%;
    z-index: 2;
    opacity: 0;
    filter: "alpha(opacity=0)";
    transition: opacity 0.25s linear;
    font-style: normal;
  }
  .spanbox:hover .spanclose {
    padding: 0 10px 10px 0;
    opacity: 1;
    -webkit-filter: none;
    filter: none;
  }
  .spanclose:after {
    content: "x";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 23px;
  }
}

@media only screen and (min-width: 40px) and (max-width: 750px) {
  .inputbox {
    background-color: white;
    font-size: 1.4rem;
    height: 24.2rem;
    overflow-y: scroll;
  }
  .input {
    display: block;
    border: none;
    box-shadow: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    flex-basis: 100%;
    color: #34495e;
    line-height: 2.4rem;
    margin: 0.02rem;
    font-size: 1.4rem;
  }
  .arrbox {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    text-align: left;
  }
  .spanbox {
    line-height: 2rem;
    margin: 0.2rem;
    padding: 0.5rem 0.7rem;
    background-color: #3c3ed6;
    border-radius: 0.4rem;
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    transition: 0.25s linear;
  }
  .spanbox:hover {
    padding: 0 1.2rem 0 0.2rem;
  }
  .spanclose {
    color: white;
    padding: 0 0.5rem 0 0;
    cursor: pointer;
    font-size: 1.2rem;
    position: absolute;
    right: -0.6rem;
    text-align: right;
    text-decoration: none;
    top: -0.1rem;
    width: 100%;
    z-index: 2;
    opacity: 0;
    filter: "alpha(opacity=0)";
    transition: opacity 0.25s linear;
    font-style: normal;
  }
  .spanbox:hover .spanclose {
    padding: 0 1rem 1rem 0;
    opacity: 1;
    -webkit-filter: none;
    filter: none;
  }
  .spanclose:after {
    content: "x";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 2.3rem;
  }
}
</style>