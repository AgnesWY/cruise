<template>
  <div>
    <footer>
      <p class="com-infor-num">
       隔壁仓库科技成都有限公司 All Rights Reserved©2016 蜀ICP备16012778号-1 
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'dl-footer'
  }
</script>

<style lang="less">
  footer {
    background: #fff;
    padding: 15px 0 15px 0;
    .com-infor-num {
      font-size: 12px;
      color: #444;
      text-align: center;
      a {
        color: #444;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>