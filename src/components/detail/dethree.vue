<template>
  <div>
    <div class="detail-main">
      <h2>流量分析</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="产品类型" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="适用区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="北京" value="beijing"></el-option>
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="广州" value="guangzhou"></el-option>
              <el-option label="深圳" value="shenzhen"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="有效时间"  prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="半年"></el-radio>
              <el-radio label="三年"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          region: '',
          resource: '',
          type: []
        },
        rules: {
          region: [
            { required: true, message: '请选择适用区域', trigger: 'change' }
          ],
           resource: [
            { required: true, message: '请选择有效时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个产品类型', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交成功!');
          } else {
            console.log('操作失败!!');
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
.detail-main h2 {
  font-weight: bold;
  font-size: 20px;
}
.detail-main p {
  padding: 30px 0;
  color: #aaa;
}

.el-checkbox__input.is-checked+.el-checkbox__label,
.el-select-dropdown__item.selected {
  color: #4fc08d;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  color: #4fc08d;
  background: #4fc08d;
  border-color: #4fc08d;
}
.el-select .el-input__inner:focus,
.el-select .el-input.is-focus .el-input__inner {
  border-color: #4fc08d;
}
.el-form-item.is-success .el-input__inner {
  border-color: #dcdfe6;
}
.el-radio__input.is-checked+.el-radio__label {
  color: #4fc08d;
}
.el-radio__input.is-checked .el-radio__inner,
.el-button--primary {
  background: #4fc08d;
  border-color: #4fc08d;
}
.el-button--primary:focus, .el-button--primary:hover {
  opacity: 0.8;
  background: #4fc08d;
  border-color: #4fc08d;
}
.el-checkbox__inner {
  outline: none;
}
.el-checkbox__inner:hover,
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #4fc08d;
}
</style>
