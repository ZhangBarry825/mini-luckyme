<template>
    <view class="container" :style="'background-image:url('+poster+')'">
        <view class="player-box">
            <view class="player-box1">
                <view class="player-box2" :animation="animationData">
                    <view class="player" :style="'background-image:url('+poster+')'">
                        {{name}}
                    </view>
                </view>
            </view>
        </view>
        <view class="nowPlay">
            <view class="text">第1集郭女侠怒砸同福店，佟掌柜妙点迷路人</view>
        </view>
        <view class="controller">
            <view class="progress-box">
                <view class="free-MusicProgress">
                    <view class="time1">{{currentTime|timeFormat}}</view>
                    <view class="progress" :style="'width:'+progress+'%;'"></view>
                    <view class="time2">{{duration|timeFormat}}</view>
                </view>
            </view>
            <view class="controller-buttons">
                <view class="order" @click="audioLoop">
                    <img src="../../static/images/order.png" v-if="!loop">
                    <img src="../../static/images/loop.png" v-if="loop">
                </view>
                <view class="last" @click="audioLast">
                    <img src="../../static/images/left.png">
                </view>
                <view class="play"  @click="togglePlay">
                    <img src="../../static/images/play.png" v-if="!playStatus">
                    <img src="../../static/images/pause.png" v-if="playStatus">
                </view>
                <view class="next" @click="audioNext">
                    <img src="../../static/images/right.png">
                </view>
                <view class="list">
                    <img src="../../static/images/list.png">
                </view>
            </view>
        </view>
        <view class="buttons">
            <button type="primary" @click="audioPlay">播放</button>
            <button type="primary" @click="audioPause">暂停</button>
            <button type="primary" @click="audioJump">跳过</button>
            <button type="primary" @click="audioStart">开头</button>
            <button type="primary" @click="audioEnd">结尾</button>
            <button type="primary" @click="audioNext">切曲</button>
        </view>

    </view>
</template>

<script>
    export default {
        name: 'MusicPlayer',
        data() {
            return {
                poster: 'https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/logo.jpg',
                name: '武林外传',
                author: '第一回',
                src: '',
                nowPlay: 1,
                progress: 0,
                playStatus:0,
                loop:0,
                animationData:{},//旋转动画
                currentTime:0,
                duration:0,
            }
        },
        filters:{
            timeFormat(time){
                let minutes=parseInt(time/60);
                let seconds=parseInt(time%60);
                return minutes+':'+seconds
            }
        },
        methods: {
            /*旋转*/
            animationPlay(){
                let animation = uni.createAnimation({
                    duration: 10000,
                    timingFunction: 'linear',
                })
                this.animation = animation
                animation.rotate(360).step()
                this.animationData = animation.export()
            },
            togglePlay(){
                if(!this.playStatus){
                    this.audioCtx.play()
                    console.log('播放')
                    this.animationPlay()
                }else {
                    this.audioCtx.pause()
                    console.log('暂停')
                }
                this.playStatus=!this.playStatus
            },
            /*播放*/
            audioPlay() {
                this.audioCtx.play()
            },
            /*上一曲*/
            audioLast() {
                if(this.nowPlay>1){
                    this.audioSelect(this.nowPlay - 1)
                    console.log(this.nowPlay)
                }
            },
            /*下一曲*/
            audioNext() {
                this.audioSelect(this.nowPlay + 1)
                console.log(this.nowPlay)

            },
            /*选曲*/
            audioSelect(num) {
                this.nowPlay=num
                this.audioCtx.src='https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/' + num + '.m4a';
                this.audioCtx.onCanplay(() => {
                    console.log('准备就绪')
                    this.audioPlay()
                    this.playStatus=1
                    this.currentTime=this.audioCtx.currentTime
                    this.duration=this.audioCtx.duration
                })
            },
            /*暂停*/
            audioPause() {
                this.audioCtx.pause()
            },
            /*跳过开头*/
            audioJump() {
                this.audioCtx.seek(105)
                this.audioPlay()
            },
            /*重播*/
            audioStart() {
                this.audioCtx.seek(0)
            },
            /*跳到结尾*/
            audioEnd() {
                this.audioCtx.seek(2855)
            },
            /*time更新触发*/
            audioTimeupdate() {
                this.progress=(this.audioCtx.currentTime / this.audioCtx.duration) * 100
                this.currentTime=this.audioCtx.currentTime
            },
            /*结束*/
            audioEnded() {
                console.log('结束~')
            },
            /*出错*/
            audioErr(err) {
                console.log(err)
            },

            /*循环*/
            audioLoop(){
                this.loop=!this.loop
                let tip='循环播放';
                if(!this.loop){
                    tip='顺序播放'
                }
                uni.showToast({
                    title: tip,
                    duration: 2000,
                    icon:'none',
                    position:'bottom'
                });
            }
        },
        mounted() {
            this.audioCtx = uni.createInnerAudioContext('myAudio');
            this.audioCtx.autoplay = false;

            this.audioCtx.src = 'https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/' + this.nowPlay + '.m4a';
            this.audioCtx.onTimeUpdate((e)=>{
                this.audioTimeupdate()
            })

            this.audioCtx.onPlay(() => {
                this.duration=this.audioCtx.duration
                console.log('开始播放');
            });
            this.audioCtx.onError((res) => {
                console.log(res.errMsg);
                console.log(res.errCode);
            });
            // this.audioCtx.play();


            console.log(this.$store.state.MusicPlayStatus)
        }
    }
</script>

<style lang="scss">
    .container:after{

        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top:0;
        background: inherit;
        filter: blur(20px);
        z-index: 3;

    }
    .nowPlay{
        color: white;
        z-index: 5;
        .text{
            text-align: center;
            font-size: 30rpx;
        }
    }
    .container {
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        z-index: 5;
        background-color: gold;
        position: fixed;
        height: 100%;
        width: 100%;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;

        .buttons{
            position: absolute;
            z-index: 10;
            width: 100%;
            display: flex;
            flex-direction: row;
        }
        .player-box{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            padding: 220rpx 0;
            .player-box1{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(201,197,200,0.3);
                border-radius: 100%;
                width: 420rpx;
                height: 420rpx;
                .player-box2{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(48,43,47,0.3);
                    border-radius: 100%;
                    width: 400rpx;
                    height: 400rpx;
                    background-image: linear-gradient(to bottom right, black,grey);


                    .player{
                        background-color: grey;
                        border-radius: 100%;
                        width: 300rpx;
                        height: 300rpx;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color:white;

                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }
            }

        }

        .controller{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10;
            .progress-box{
                width: 100%;
                padding: 50rpx 30rpx;
                box-sizing: border-box;

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .free-MusicProgress {
                    width: 80%;
                    background: #C3C3C3;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    position: relative;
                    .time1,.time2{
                        color: white;
                        font-size: 23rpx;
                        font-weight: lighter;
                    }
                    .time1{
                        position: absolute;
                        left: -70rpx;
                    }
                    .time2{
                        position: absolute;
                        right: -70rpx;
                    }
                    .progress {
                        background: #1296db;
                        height: 6rpx;
                    }
                }
            }
            .controller-buttons{
                box-sizing: border-box;
                width: 100%;
                display: flex;
                padding: 50rpx 50rpx;
                align-items: center;
                justify-content: space-between;
                .order img,.last img,.play img,.next img,.list img{
                    width: 50rpx;
                    height: 50rpx;
                }
                .play img{
                    width: 100rpx;
                    height: 100rpx;
                }
            }
        }

    }
</style>
