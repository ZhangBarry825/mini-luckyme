<template>
    <view class="list-container">
        <view class="buttons">

        </view>
        <view class="lists">
            <view class="list" @click="selectPlay(index)" v-for="(item,index) in playList">{{item}}</view>
        </view>
    </view>
</template>

<script>

    export default {
        name:'MusicList',
        data() {
            return {

            }
        },
        props:{
          playList:{
              type:Array,
              default:[]
          }
        },
        methods: {
            selectPlay(num){
                this.$emit('audioSelect',num+1)
            }
        },
        mounted(){

        }
    }
</script>

<style lang="scss">
    .list-container {
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        z-index: 555;
        position: fixed;
        height: 60%;
        width: 100%;
        padding: 0 30rpx;
        box-sizing: border-box;
        .buttons{
            width: 100%;
            padding: 0 30rpx;
            box-sizing: border-box;
        }
        .lists{
            overflow: scroll;
            /*background-color: rgba(255,255,255,0.92);*/
            background-color: #f3eff2;
            width: 100%;
            height: 100%;
            border-radius: 0 0 50rpx 50rpx ;
            padding: 30rpx 30rpx;
            box-sizing: border-box;
            .list{
                font-size: 32rpx;
                padding: 10rpx 0;
                box-sizing: border-box;
            }
        }
    }
</style>
