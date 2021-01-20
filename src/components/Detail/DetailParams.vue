<template>
  <div v-if="Object.keys(itemParams).length !== 0">
    <table class="params_table" v-for="(item,index) in itemParams.rule.tables" :key="index">
      <tr class="params_tr" v-for="(item1,indey) in item" :key="indey">
        <td class="params_td" v-for="(item2,indez) in item1" :key="indez">{{item2}}</td>
      </tr>
    </table>
    <table class="params">
      <tr class="params_set" v-for="(item,index) in itemParams.info.set" :key="index">
        <td class="set_key">{{item.key}}</td>
        <td class="set_name">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
 export default {
  name: '',
  props: {
    itemParams: {
      type: Object
    }
  },
  data () {
   return {

   }
  },
 }
</script>

<style lang="less" scoped>
  .params_table {
    margin-left: 15px;
    margin-right : 15px;
    font-size: 12px;
    text-align: center;
    border-collapse: collapse;
    padding-bottom: 20px;
    border-bottom: solid 2px rgba(0,0,0,.2);
  }
  .params_tr {
    border-bottom: solid 1px rgba(0,0,0,.2);
  }
  .params_td {
    height: 30px;
    width: 100px;
    vertical-align: bottom;
  }
  .params {
    margin-left: 15px;
    margin-top: 30px;
    border-collapse: collapse;
  }
  .params_set {
    margin: 20px 15px;
    font-size: 12px;
    border-bottom: solid 1px rgba(0,0,0,.2);
    height: 30px;
    line-height: 40px;
     vertical-align: middle;
  }
  .set_key {
    display: inline-block;
    margin-right: 30px;
    width: 50px;
    text-align: center;
  }
  .set_name {
    display: inline-block;
    color: hotpink;
    width: 250px;
    word-wrap: break-word;
  }
</style>
