
<template>
  <div class="agent">
    <!-- 卡片信息栏 -->
    <el-row class="cards-wrap">
      <el-col :span="8">
        <view-card :left-words="cardInfo[0].left" :right-wrods="cardInfo[0].right" :icon-name="cardInfo[0].className" :backColor="'background:#FF9A2A'"></view-card>
      </el-col>
      <el-col :span="8">
         <view-card :left-words="cardInfo[1].left" :right-wrods="cardInfo[1].right" :icon-name="cardInfo[1].className" :backColor="'background:#7FBC39'"></view-card>
      </el-col>
      <el-col :span="8">
        <div class="info-card">
          <el-row class="info-title">
            <el-col :span="8">ALL</el-col>
            <el-col :span="8">PHYSICAL</el-col>
            <el-col :span="8">VIRTUAL</el-col>
          </el-row>
          <el-row class="info-num">
            <el-col :span="8">8</el-col>
            <el-col :span="8">4</el-col>
            <el-col :span="8">4</el-col>
          </el-row>
          
        </div>
        
      </el-col>
    </el-row>
    <!-- 搜索框栏 -->
    <el-row class="search-wrap">
      <!-- tab标签 -->
      <el-col :span="8" class="tabs">
        <div class="tab-active">All</div>
        <div>Physical</div>
        <div>Virtual</div>    
      </el-col>
      <!-- 搜索框 -->
      <el-col :span="14">
        <div class= "search-btn">
          <span class="icon-wrap"><i class= "icon-search"></i></span>
          <input type="text" name=""  v-model= "searchKey" />
        </div>
        
      </el-col>
      <!-- 按钮1 -->
      <el-col :span="1">
        <div class= "search-btn">
          <i class= "icon-th-card"></i>
        </div>
      </el-col>
      <!-- 按钮2 -->
      <el-col :span="1">
        <div class= "search-btn">
          <i class= "icon-navicon active"></i>
        </div>
      </el-col>
    </el-row>
    <!-- 循环的主体对象  db-info -->
    <div v-for="item in agentsList">
      <db-info :agents-item="item"></db-info>
    </div>
    
   

  </div>
</template>

<script>
import viewCard from '@/components/common/viewCard.vue';
import dbInfo from '@/components/common/dbInfo.vue';
export default {
  name: 'agent',
  components: {
      viewCard,
      dbInfo
  },
  data () {
    return {
      cardInfo:[{
        "left":"building",
        "right":"3",
        "className":"icon-cog"
      },
      {
        "left":"idle",
        "right":"5",
        "className":"icon-coffee"
      }],
      searchKey:"",
      // 列表数据
      agentsList:[]

      
    }
  },
  methods: {
    // 查询所有列表数据
    searchAllList(){
      var that = this;
      this.$http.get('http://localhost:3001/agents').then(({data,ok,statusText}) => {
        if(data || ok) {
          that.agentsList = data;
        }else {
          that.$message.error('请求失败，请稍后再试');
        }
      });

    },
    // 添加一个resource
    addOneResource(agentInfo,addResource){
      var theId = agentInfo.id;
      var that = this;
      // 将addResource的值添加到 agentInfo的 resources里
      // 转化到req
      var reqData = JSON.parse(agentInfo)

      this.$http.put('http://localhost:3001/agents'+theId,reqData, {emulateJSON:true}).then( ({data,ok,statusText}) => {
            if(ok){
              if(data)
              {
                that.$message.success("ok ");
              }
            }else { 
               that.$message.error('fail');
            }
        })

    }
    
  },
  created:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.agent {

  .cards-wrap {
    margin: 20px 0;
    .info-card{
      width: 260px;
      height: 144px;
      float: right;
      background: #fff;
      color: #000;
      .el-row{
        height: 72px;
        line-height: 72px;
        text-align: center;
      }
      .info-title{
        font-size:12px;
      }
      .info-num{
        font-size:20px;
        font-weight: bold;
      }

    }
  }
  .search-wrap{
    margin: 10px 0;
    background:#fff;
    width:100%;
    .tabs{
      div{
        width:85px;
        height:50px;
        line-height:50px;
        text-align:center;
        display:inline-block;
        border-right:solid #ececec 1px;
      }
      .tab-active{
        color:#00B4CF;
        border-bottom:solid #00B4CF 3px;

      } 
    }
    .search-btn{
      position:relative;
      height:50px;
      line-height:50px;
      font-size: 20px;
      .icon-wrap{
        position: absolute;
        top: 16px;
        left: 8px;
        
      }
      input{
        height: 25px;
        line-height: 25px;
        background-color: #ececec;
        padding-left: 30px;
      }
      .active{
        color:#00B4CF;
      }

    }
  }
 

}
</style>
