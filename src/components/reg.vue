<template>
	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	  <el-form-item label="手机" prop="phone" required>
	    <el-input v-model.number="ruleForm2.phone" placeholder="请输入手机号"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" prop="pass" required>
	    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
	  </el-form-item>
	  <el-form-item label="确认密码" prop="checkPass" required>
	    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
	    <el-button @click="resetForm('ruleForm2')">重置</el-button>
	  </el-form-item>
	</el-form>
</template>

<script>
  export default {
    data() {
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
              callback(new Error('必须输入手机号码'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          phone: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功!');
            this.$emit('on-close')
          } else {
            console.log('注册失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
	.el-button--primary {
		background-color: #4fc08d;
		border-color: #4fc08d;
	}
	.el-button:focus, .el-button:hover {
	    color: #4fc08d;
	    border-color: #c6e2ff;
	    background-color: #ecf5ff;
	}
	.el-input.is-active .el-input__inner, .el-input__inner:focus {
		border-color: #4fc08d;
	}
</style>