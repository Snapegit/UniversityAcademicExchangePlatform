<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"border":"0px solid #eee","padding":"30px 0","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="论文名称" prop="lunwenmingcheng">
            <el-input v-model="ruleForm.lunwenmingcheng" 
                placeholder="论文名称" clearable :disabled=" false  ||ro.lunwenmingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}'  label="学术主题类型" prop="xueshuzhutileixing">
            <el-select v-model="ruleForm.xueshuzhutileixing" placeholder="请选择学术主题类型" :disabled=" false  ||ro.xueshuzhutileixing" >
              <el-option
                  v-for="(item,index) in xueshuzhutileixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="图片" v-if="type!='cross' || (type=='cross' && !ro.tupian)" prop="tupian">
            <file-upload
            tip="点击上传图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.tupian?ruleForm.tupian:''"
            @change="tupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' class="upload" v-else label="图片" prop="tupian">
                <img v-if="ruleForm.tupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.tupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="关键词" prop="guanjianci">
            <el-input v-model="ruleForm.guanjianci" 
                placeholder="关键词" clearable :disabled=" false  ||ro.guanjianci"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="作者信息" prop="zuozhexinxi">
            <el-input v-model="ruleForm.zuozhexinxi" 
                placeholder="作者信息" clearable :disabled=" false  ||ro.zuozhexinxi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="发布时间" prop="fabushijian">
              <el-date-picker
				  :disabled=" false  ||ro.fabushijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.fabushijian" 
                  type="datetime"
                  placeholder="发布时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学术内容" prop="xueshuneirong">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="学术内容"
              v-model="ruleForm.xueshuneirong">
            </el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="论文摘要" prop="lunwenzhaiyao">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="论文摘要"
              v-model="ruleForm.lunwenzhaiyao">
            </el-input>
          </el-form-item>

      <el-form-item :style='{"width":"100%","padding":"0","margin":"0","textAlign":"center"}'>
        <el-button :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0","margin":"0 20px 0 0","color":"#fff","borderRadius":"20px","background":"#0062a5","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #ccc","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#666","borderRadius":"20px","background":"none","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				lunwenmingcheng : false,
				xueshuzhutileixing : false,
				xueshuneirong : false,
				lunwenzhaiyao : false,
				tupian : false,
				guanjianci : false,
				zuozhexinxi : false,
				fabushijian : false,
				discussnum : false,
				storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          lunwenmingcheng: '',
          xueshuzhutileixing: '',
          xueshuneirong: '',
          lunwenzhaiyao: '',
          tupian: '',
          guanjianci: '',
          zuozhexinxi: '',
          fabushijian: '',
          discussnum: '',
          storeupnum: '',
        },
        xueshuzhutileixingOptions: [],


        rules: {
          lunwenmingcheng: [
          ],
          xueshuzhutileixing: [
          ],
          xueshuneirong: [
          ],
          lunwenzhaiyao: [
          ],
          tupian: [
          ],
          guanjianci: [
          ],
          zuozhexinxi: [
          ],
          fabushijian: [
          ],
          discussnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.fabushijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='lunwenmingcheng'){
              this.ruleForm.lunwenmingcheng = obj[o];
              this.ro.lunwenmingcheng = true;
              continue;
            }
            if(o=='xueshuzhutileixing'){
              this.ruleForm.xueshuzhutileixing = obj[o];
              this.ro.xueshuzhutileixing = true;
              continue;
            }
            if(o=='xueshuneirong'){
              this.ruleForm.xueshuneirong = obj[o];
              this.ro.xueshuneirong = true;
              continue;
            }
            if(o=='lunwenzhaiyao'){
              this.ruleForm.lunwenzhaiyao = obj[o];
              this.ro.lunwenzhaiyao = true;
              continue;
            }
            if(o=='tupian'){
              this.ruleForm.tupian = obj[o].split(",")[0];
              this.ro.tupian = true;
              continue;
            }
            if(o=='guanjianci'){
              this.ruleForm.guanjianci = obj[o];
              this.ro.guanjianci = true;
              continue;
            }
            if(o=='zuozhexinxi'){
              this.ruleForm.zuozhexinxi = obj[o];
              this.ro.zuozhexinxi = true;
              continue;
            }
            if(o=='fabushijian'){
              this.ruleForm.fabushijian = obj[o];
              this.ro.fabushijian = true;
              continue;
            }
            if(o=='discussnum'){
              this.ruleForm.discussnum = obj[o];
              this.ro.discussnum = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.$http.get('option/xueshuzhutileixing/xueshuzhutileixing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.xueshuzhutileixingOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`lunwen/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('lunwen/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`lunwen/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`lunwen/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      tupianUploadChange(fileUrls) {
          this.ruleForm.tupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 120px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input ::v-deep .el-input__inner {
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 300px;
	  height: 36px;
	}
	.add-update-preview .el-input-number ::v-deep .el-input__inner {
		text-align: left;
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 300px;
	  height: 36px;
	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select ::v-deep .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #ddd;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 350px;
	  height: 36px;
	}
	
	.add-update-preview .el-date-editor ::v-deep .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #ddd;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 250px;
	  height: 36px;
	}
	
	.add-update-preview ::v-deep .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview ::v-deep .upload .upload-img {
	  cursor: pointer;
	  border-radius: 2px;
	  color: #999;
	  background: none;
	  width: 80px;
	  font-size: 24px;
	  border-color: #ddd;
	  border-width: 1px;
	  line-height: 80px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview ::v-deep .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  border-radius: 2px;
	  color: #999;
	  background: none;
	  width: 80px;
	  font-size: 24px;
	  border-color: #ddd;
	  border-width: 1px;
	  line-height: 80px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview ::v-deep .el-upload .el-icon-plus {
	  cursor: pointer;
	  border-radius: 2px;
	  color: #999;
	  background: none;
	  width: 80px;
	  font-size: 24px;
	  border-color: #ddd;
	  border-width: 1px;
	  line-height: 80px;
	  border-style: solid;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview .el-textarea ::v-deep .el-textarea__inner {
	  border: 1px solid #ddd;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  color: #666;
	  background: none;
	  width: 40%;
	  font-size: 14px;
	  height: 120px;
	}
</style>
