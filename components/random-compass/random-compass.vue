<template>
    <view class="container">
        <canvas class="myCanvas" :style="'transform:rotate('+rotate+'deg)'" style="width: 300rpx; height: 300rpx" canvas-id="firstCanvas"></canvas>
        <button type="default" @click="StartGame()">按钮1</button>
    </view>
</template>

<script>
    export default {
        name:'RandomCompass',
        data() {
            return {
                rotate:0
            }
        },
        methods: {
            StartGame(){
                this.rotate+=180
            }
        },
        mounted(){
            let lengthRate= uni.getSystemInfoSync().windowWidth/750;
            let ctx = uni.createCanvasContext('firstCanvas');
            ctx.setStrokeStyle("#00ff00");
            ctx.setLineWidth(5*lengthRate);
            ctx.rect(0, 0, 750*lengthRate, 300*lengthRate);
            ctx.stroke();
            ctx.draw();

            var num = 6;   // 奖品数量
            if (num % 2 !== 0){
                alert('请配置偶数奖项');
            }
            for (var i = 0; i < num; i++) {
                // 保存当前状态
                ctx.save();
                // 开始一条新路径
                ctx.beginPath();
                // 位移到圆心，下面需要围绕圆心旋转
                ctx.translate(150*lengthRate, 150*lengthRate);
                // 从(0, 0)坐标开始定义一条新的子路径
                ctx.moveTo(0, 0);
                // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
                ctx.rotate((360 / num * i + 360 / num / 2) * Math.PI/180);
                // 绘制圆弧
                ctx.arc(0, 0, 150*lengthRate, 0,  2 * Math.PI / num, false);
                if (i % 2 == 0) {
                    ctx.fillStyle = '#ffb820';
                }else{
                    ctx.fillStyle = '#ffcb3f';
                }
                // 填充扇形
                ctx.fill();
                // 绘制边框
                ctx.lineWidth = 0.5*lengthRate;
                ctx.strokeStyle = '#f48d24';
                ctx.stroke();

                // 文字
                ctx.fillStyle = '#fff';
                ctx.font="16px sans-serif";
                ctx.fillText(i + 1, 100*lengthRate, 60*lengthRate);

                // 恢复前一个状态
                ctx.restore();
            }
            ctx.draw()
        }
    }
</script>

<style lang="scss">
    .container {
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .myCanvas{
            -webkit-transform: all 6s ease;
            transition: all 6s ease;
        }
    }
</style>
