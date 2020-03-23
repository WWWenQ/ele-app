<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt />
    </div>
    <!-- 手机号 -->
    <InputGroup
      v-model="phone"
      type="number"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <!-- 验证码 -->
    <InputGroup v-model="verifyCode" type="number" placeholder="验证码" :error="errors.code" />
    <!-- 用户协议 -->
    <div class="login_des">
      <p>
        新用户登录即自动注册，表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <button :disabled="isClick" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/InputGroup";
export default {
  name: "login",
  components: {
    InputGroup
  },
  data() {
    return {
      phone: "",
      verifyCode: "",
      disabled: false,
      errors: {},
      btnTitle: "获取验证码",
    };
  },
  computed:{
      isClick(){
          if(this.phone&&this.verifyCode){
              return false
          }else{
              return true
          }
      }
  },
  methods: {
    getVerifyCode() {
      if (this.validatePhone()) {
        // 发送网络请求
        this.$axios
          .post("/api/posts/sms_send", {
            sid: "b8e9731001a07a5924d66647ba6f4a94",
            token: "1b3060ee6149f7533b9d11cff4f7c32e",
            appid: "619c868728e4459da6cf9b75f1200537",
            templateid: "526732",
            phone: this.phone
          })
          .then(res => {
              console.log(res)
            this.validateBtn();
             this.validateBtn();
          });
        // 倒计时
       
      }
    },
    handleLogin(){
        // 取消错误提醒
        this.errors={};
        // 发送请求
        this.$axios.post('/api/posts/sms_back',{
            phone:this.phone,
            code:this.verifyCode
        }).then(res=>{
            console.log(res);
            localStorage.setItem('ele_login',true);
            this.$router.push('/')
        }).catch(err=>{
            console.log(err);
            this.errors={
                code:err.response.data.msg
            }
        })
    },
    validatePhone() {
      if (!this.phone) {
        this.errors = {
          phone: "手机号码不能为空"
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请填写正确的手机号码"
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    validateBtn() {
      let time = 60;
      const timer = setInterval(() => {
        if (time <= 0) {
          clearInterval(timer);
          this.btnTitle = "重新获取验证码";
          this.disabled = false;
        } else {
          this.btnTitle = time + "秒后重新获取";
          this.disabled = true;
          time--;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}
.logo {
  text-align: center;
}
img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>