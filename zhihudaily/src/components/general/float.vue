<template>
	<div class="float">
	    <div class="top" id="gotop">
	        <div class="arrow"></div>
	        <div class="stick"></div>
	    </div>
	    <div v-if="$route.path!=='/list'" class="home" v-link="{ path: '/list' }">
	    	<div class="arrow"></div>
	    	<div class="stick"></div>
	    </div>
	</div>
</template>
<script>
	export default {
		ready() {
			var backTop = function (btnId){
				var btn = document.getElementById(btnId);
				var d = document.documentElement;
				var b = document.body;
				window.onscroll = btnDisplay;
				btn.onclick = function (){
					btn.style.display = "none";
					window.onscroll = null;
					this.timer = setInterval(function(){
						d.scrollTop -= Math.ceil((d.scrollTop+b.scrollTop)*0.1);
						b.scrollTop -= Math.ceil((d.scrollTop+b.scrollTop)*0.1);
						if((d.scrollTop + b.scrollTop) == 0)
							clearInterval(btn.timer,window.onscroll = btnDisplay);
					},10);
				};
				function btnDisplay(){
					btn.style.display=(d.scrollTop+b.scrollTop>200)?'block':"none";
				}
			};
			backTop('gotop');//返回顶部调用
		}
	}
</script>
<style lang='scss'>
	.float {
		position: fixed;
		right: 20em;
		bottom: 10%;
		
		$color-light: #F9F9F9;
		$color-topicon: #AAA;
		$width-top: 38px;

		@mixin float-div {
			width: $width-top;
			height: $width-top;
			background-color: $color-light;
			border-radius: 3px;
			position: relative;
			cursor: pointer;
			margin: 5px 0;
		}

		@mixin arrow($width,$top,$left) {
			border: $width solid transparent;
			border-bottom-color: $color-topicon;
			position: absolute;
			top: $top;
			left: $left;
		}

		.top {
			@include float-div;

			.arrow {
				@include arrow(9px,0,10px);
			}
			.stick {
				width: 9px;
				height: 15px;
				background-color: $color-topicon;
				position: absolute;
				top: 16px;
				left: 15px;
			}

			&:hover {
				opacity: .7;
			}
		}

		.home {
			@include float-div;

			.arrow {
				@include arrow(12px,-7px,8px);
			}

			.stick {
				width: 4px;
				height: 12px;
				border-left: 7px solid $color-topicon;
				border-right: 7px solid $color-topicon;
				/* background-color: $color-topicon; */
				position: absolute;
				top: 16px;
				left: 11px;
			}

			&:hover {
				opacity: .7;
			}
		}
	}
</style>