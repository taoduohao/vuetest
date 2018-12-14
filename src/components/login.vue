<template>
	<div>
		<div>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="手机" prop="name">
			    <el-input v-model="ruleForm.name" placeholder="请输入手机号"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name:'',
          pass: ''
        },
        rules: {
          name: [
	        { required: true, message: '请输入账号', trigger: 'blur' },
	        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
	      ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
	        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功!');
            this.$emit('on-close');
          } else {
            console.log('登录失败！');
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