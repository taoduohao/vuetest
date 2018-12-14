<template>
	<div>
		<div class="prompt-box" v-if="isShow" @click="closePropmt"></div>
	    <transition name="fade-top">
	  		<div class="prompt-info" v-if="isShow">
		  		<span class="prompt-over"  @click="closePropmt">×</span>
		  		<slot></slot>
		  	</div>
	  	</transition>
  </div>
</template>

<script>
	export default {
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			closePropmt(){
				this.$emit('on-close')
			}
		}
	}
</script>

<style>
	.prompt-box {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.4);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	}
	.prompt-info {
		width: 40%;
		max-height: 50%;
		height: auto;
		background: #fff;
		border: 3px solid #ccc;
		position: absolute;
		padding: 35px;
		left: 50%;
		margin-left: -20%;
		top: 30%;
		z-index: 15;
	}
	.prompt-over {
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 20px;
		cursor: pointer;
	}
	.prompt-over:hover {
		color: #4fc08d;
	}
	.fade-top {
		position: absolute;
		top:0;
		bottom: 0;
	}
	.fade-top-enter-active {
		transition: all 1.2s ease;
	}
	.fade-top-leave-active {
		transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
	}
	.fade-top-enter, .fade-top-leave-to {
		top:0;
		bottom: 0;
		transform: translateY(50px);
		opacity: 0;
	}
</style>