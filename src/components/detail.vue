<template>
	<div class="detail-box">
		<nav class="detail-sidebar">
			<img :src="detailIcon" class="detail-icon">
			<ul class="detail-list">
				<router-link tag="li" v-for="item in detailList"  :to="{ path: item.url }"  active-class="active">
					{{item.name}}
				</router-link>
			</ul>
		</nav>
		<article class="detail-info">
			<keep-alive>
				<transition name="fade-left">
					<router-view></router-view>
				</transition>
			</keep-alive>
		</article>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				detailList: [
					{
						name:'数据统计',
						url:'deone',
						active:false
					},
					{
						name:'数据预测',
						url:'detwo',
						active:false
					},
					{
						name:'流量分析',
						url:'dethree',
						active:false
					},
					{
						name:'公告发布',
						url:'defour',
						active:false
					}
				],
				imgMap: {
					'/detail/deone':require('../assets/images/1.png'),
					'/detail/detwo':require('../assets/images/2.png'),
					'/detail/dethree':require('../assets/images/3.png'),
					'/detail/defour':require('../assets/images/4.png')
				}
			}
		},
		computed:{
			detailIcon () {
				return this.imgMap[this.$route.path]
			}
		}
	}
</script>

<style>
.detail-box {
	width: 1200px;
	margin: 15px auto;
	overflow: hidden;
}
.detail-sidebar {
	float: left;
	width: 200px;
	margin-right: 15px;
	overflow: hidden;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	padding: 15px 0;
}
.detail-list {
	margin-bottom: 15px;
}
.detail-list li {
	width: 100%;
	height: 35px;
	line-height: 35px;
	padding: 0 15px;
	cursor: pointer;
}
.detail-list li.active,.detail-list li:hover {
	background: #4fc08d;
	color: #fff;
}
.detail-info {
	float: right;
	width: 955px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	min-height: 100px;
	padding: 15px;
}
.detail-icon {
	width: 100px;
	margin-left: 50px;
	padding-bottom: 15px;
}
</style>