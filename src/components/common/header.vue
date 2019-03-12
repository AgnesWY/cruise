<template>
  <header>
    <el-row>
      <el-col :md="4" :sm="5" :xs="6">
        <router-link to="/" class="logo">
          <img src="../assets/logo.png" alt="">
        </router-link>
      </el-col>
      <el-col :md="18" :sm="17" :xs="16">
        <div class="profile">
          
          <el-badge
            v-if="this.$store.state.approvalManagement"
            :value="approve"
            :max="999"
            class="dl-approval"
            :hidden="approve == 0">
            <el-button
              @click="toApproveInit()"
              type="text"
              style="color: #48576a;">
              <span>审批管理</span>
            </el-button>
          </el-badge>

          <el-dropdown
            @command="handleCommand"
            trigger="click">
            <span class="el-dropdown-link">
              {{$user.userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="myAccount">我的资料</el-dropdown-item>
              <el-dropdown-item command="logout">安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>
      </el-col>
    </el-row>
  </header>
</template>
<script>
export default {
  name: 'dl-header',
  data() {
    return {
      approve: 0
    }
  },
  methods:{
    logout(){
      var that=this;
      $.get('/logout',function(data){ //去重后台自动退出的重复，用jquery
          if(!data.status&&data.data==true){
          location.href='/login'
        }else {
            that.$message.error('系统繁忙，请稍后再试！！');
        }
      });
    },
    handleCommand(command) {
      if (command === 'logout') {
        this.logout();
      }else{
        this.$router.push({name: command});
      }
    },
    toApproveInit() {
      this.$router.push({name: 'approveInit'});
    }
},
  created() {
    // const vm = this;
    // let getApproveNeedCount = function() {
    //   console.log(Boolean(vm.$user.userId))
    //   vm.$http.post('/dladmin/approve/approveNeedCount.html')
    //   .then(({data,ok,statusText}) => {
    //     if (ok && !data.status) {
    //       // successful
    //       vm.approve = data.data.approveNeedCount;
    //     }else{
    //       // warning
    //       vm.$message({
    //         message: data.msg,
    //         type: 'warning'
    //       });
    //     }
    //   }).catch(err => {
    //     // error
    //     vm.$message.error('哦，出现了一个错误，请联系管理员');
    //     console.error(err)
    //   });
    // }();
    // setInterval(getApproveNeedCount,30000);
  }
}
</script>
<style lang="less">
header {
  background: #fff;
  line-height: 40px;
  .logo {
    float: right;
    padding-right: 8px;
    img {
      vertical-align: middle;
      height: 25px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .profile {
    float: right;
    .dl-logout {
      color: #475669;
      text-decoration: none;
      outline: none;
      &:hover {
        color: #475669;
        text-decoration: none;
      }
    }
  }
  .dl-approval {
    margin-right: 40px;
    .el-badge__content {
      position: absolute;
      top: 2em;
    }
  }
}
</style>
