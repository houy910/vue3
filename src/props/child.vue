<!--
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2020-12-21 19:34:06
 * @LastEditors: houyan
 * @LastEditTime: 2020-12-21 20:18:55
-->
<template>
  <div>
    <div>父元素传的值：{{ num }}</div>
    <button @click="handleNum">子按钮</button>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
  },
  setup(props, { emit }) {
    const handleNum = () => {
      emit("handleNum", `子组件传值到父组件${props.num}`);
    };

    return {
      handleNum,
    };
  },
};
</script>

<style></style>
