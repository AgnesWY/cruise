
<template>
  <div class="agent">
    <!-- 卡片信息栏 -->
    <el-row class="cards-wrap">
      <el-col :span="8">
        <view-card 
        :left-words="cardInfo[0].left" 
        :right-wrods="cardInfo[0].right" 
        :icon-name="cardInfo[0].className" 
        :backColor="'background:#FF9A2A'">
          
        </view-card>
      </el-col>
      <el-col :span="8">
         <view-card 
         :left-words="cardInfo[1].left" 
         :right-wrods="cardInfo[1].right" 
         :icon-name="cardInfo[1].className" 
         :backColor="'background:#7FBC39'">
         </view-card>
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
    <db-info 
      v-for="(item,index) in agentsList" :key="index" 
      :agents-item="item" 
      @updateData ="searchAllList()" 
      @addResources= "addResourcesInter(item,arguments)">
    </db-info>

    <!-- add dialog -->
    <div class="add-dialog" id="details" v-show="isShowDialog" :style="{ top: addTop+ 'px', left: addLeft + 'px' }">
      <div class="nav nav-border"></div>
      <div class="nav nav-background"></div>
      <el-row>
        <el-col :span="2" :offset="22">
          <i class="icon-close" @click="closeDialog()"></i>
        </el-col>
      </el-row>
      <el-row>Separate multiple resource name with commas</el-row>
      <el-row>
        <input type="text " v-model="addSources" placeholder="e.g.Chrome,Firefox" class="add-input">
      </el-row>
      
      <el-row>
        <span @click="clickAddBtn()" class="my-btn blue-btn">Add resource</span>
        <span @click="closeDialog()" class="my-btn dark-btn">cancel</span>
      </el-row>
    </div> 
    <div class="dailyMasklayer " @click="closeDialog" v-show="isShowDialog"></div>

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
      agentsList:[],
      // 要添加的数据
      addSources:"",
      isShowDialog:false,
      addTop:"",
      addLeft:"",
      // 此时点击的item
      addNowItem:""
       

      
    }
  },
  methods: {
    /*******https******/
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
    // 添加多个resource
    addResources(agentInfo,addResourceStr){
      var agentId = agentInfo.id;
      var reqData = JSON.parse(JSON.stringify(agentInfo));
      var mySet = new Set(agentInfo.resources);
      // 添加新增元素
      var addArr= addResourceStr.split(",");
        for(var i=0; i<addArr.length; i++){
          if(addArr[i]){
            mySet.add(addArr[i]);
          }

        }
      reqData.resources = Array.from(mySet)
      var that = this;
      this.$http.put('http://localhost:3001/agents/'+agentId,reqData).then( ({data,ok,statusText}) => {
        if(ok){
          if(data)
          {
            this.$message({
            type: 'success',
            message: '添加成功!',
            duration:1000
          });
            this.closeDialog()
            this.searchAllList()
          }
        }else { 
           this.$message({
            type: 'fail',
            message: '添加失败!',
            duration:1000
          });
        }
      })

    },
    /*******交互******/
    //添加资源
    addResourcesInter(agentInfo,arg){
      this.addTop = arg[0].pageY-40; // 弹出框的上边位置   
      this.addLeft = arg[0].pageX-386;  // 弹出框的左边位置   
      // 显示弹框
      this.isShowDialog = true;
      this.addNowItem = agentInfo;


    },
    // 点击添加
    clickAddBtn(){
      this.addResources(this.addNowItem,this.addSources);

    },
    // 关闭弹窗
    closeDialog(){
      this.isShowDialog = false;
      this.addSources =""
    }
    
  },
  created:function(){
    this.searchAllList();
    
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
        border-right:solid #F3F3F3 1px;
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
        background-color: #F3F3F3;
        padding-left: 30px;
      }
      .active{
        color:#00B4CF;
      }

    }
  }


  .add-dialog {
    position: absolute;
    width: 570px;
    height: 150px;
    padding: 5px;
    background: #fff;
    line-height:20px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
    border: 1px solid #00b4cf;
    z-index:400;
      i{
        font-size: 20px;
        color: #00b4cf;
        cursor:pointer;

      }
      .el-row{
        margin-bottom: 10px;
      }
      .add-input{
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        width:100%;
        height: 40px;
        line-height: 40px;
        outline: 0;
        padding: 0 15px;
        border: solid #ccc 2px;
        border-color: #ccc #ccc transparent #ccc;
      }
      .nav {
        position:absolute;
        left:30px;
        width:0;
        height:0;
        overflow:hidden;

        border-width:10px;
        border-style:solid dashed dashed dashed;
       }
      .nav-border {
        top:-20px;
        border-color:transparent transparent #00b4cf transparent;
        }
      .nav-background {
        top:-19px;
        border-color:transparent transparent #fff transparent;
      } 
      .my-btn{
        height: 50px;
        padding: 5px 10px;
        color: #fff;
        margin-right:10px;
        cursor:pointer;

      }
      .blue-btn{
        background-color: #00B4Cf;
      }
      .dark-btn{
        background-color: #2D4054;
      }
  }
 

}
.dailyMasklayer {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: #000000;
  filter: alpha(opacity=0);
  opacity: 0;
  z-index:200;
}
</style>
