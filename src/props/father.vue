<!--
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2020-12-21 19:33:58
 * @LastEditors: houyan
 * @LastEditTime: 2020-12-21 20:18:33
-->
<template>
  <div>
    <button @click="handleClick">父按钮</button>
    <span>子元素传的值：{{ num }}</span>
    <Child :num="num" @handleNum="handleNum" />
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";
import Child from "./child.vue";
export default {
  components: {
    Child,
  },
  setup() {
    const num = ref(9);
    const handleClick = () => {
      num.value++;
    };
    const handleNum = (val) => {
      alert(val);
    };
    return {
      num,
      handleClick,
      handleNum,
    };
  },
};
</script>

<style></style>
