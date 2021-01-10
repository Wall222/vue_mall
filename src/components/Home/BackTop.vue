<template>
 <div class="backtop">
   <van-icon name="upgrade" size="40px" color="#FF89A5"/>
 </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}

</script>

<style lang="less" scoped>
.backtop {
  position: fixed;
  top: 80vh;
  right: 10px;
  width: 34px;
  height: 34px;
  border-radius: 20px;
  background-color: #fff;;
}
.van-icon {
  position: absolute;
  top: 17px;
  left: 17px;
  transform: translate(-50%,-50%);
}
 
</style>
