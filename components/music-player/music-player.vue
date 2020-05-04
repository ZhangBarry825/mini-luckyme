<template>
    <view class="container" :style="'background-image:url('+poster+')'">
        <MusicList v-if="isListShow" :playList="titles" @audioSelect="audioSelect"></MusicList>
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
            <view class="text">{{titles[nowPlay-1]}}</view>
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
                <view class="play" @click="togglePlay">
                    <img src="../../static/images/play.png" v-if="!playStatus">
                    <img src="../../static/images/pause.png" v-if="playStatus">
                </view>
                <view class="next" @click="audioNext">
                    <img src="../../static/images/right.png">
                </view>
                <view class="list" @click="listShow">
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
    import MusicList from 'components/music-player/music-list'
    export default {
        name: 'MusicPlayer',
        components:{
            MusicList:MusicList
        },
        data() {
            return {
                poster: 'https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/logo.jpg',
                name: '武林外传',
                author: '第一回',
                src: '',
                nowPlay: 1,
                progress: 0,
                playStatus: 0,
                loop: 0,
                animationData: {},//旋转动画
                currentTime: 0,
                duration: 0,
                isListShow:false,
                titles: [
                    "1、 郭女侠怒砸同福店，佟掌柜妙点迷路人",
                    "2、 掌柜的慰问装病者，跑堂人收拾寻衅女",
                    "3、 众夥计沦为小跟班，莫小贝建起八大派",
                    "4、 李厨子智斗瞎老娘，白盗圣惨遇赌大王",
                    "5、 展红纹千裏定扒手，郭芙蓉一心迷盗圣",
                    "6、 杨蕙兰比武招郎君，李大嘴施招毙煞神",
                    "7、 讨银钱秀才苦费心，泄私愤芙蓉恶作剧",
                    "8、 七侠古镇寡妇寻夫，尚儒客栈众人聚首",
                    "9、 佟湘玉煞费良苦心，莫小贝梦游影视城",
                    "10、壮怂胆捕头喝烈酒，施恩惠秀才偷剩菜",
                    "11、瘪十娘撒娇勾展堂，赛貂蝉耍赖讹湘玉",
                    "12、受委屈夥计装叛变，求生意老板充大方",
                    "13、争自尊大嘴充文豪，解危难湘玉设大局",
                    "14、邢捕头勇破杀鸡案，燕小六力推防贼法",
                    "15、雷老五潜入县衙门，佟掌柜钻进牛角尖",
                    "16、为骗财书商耍手段，欲销赃掌柜吓破胆",
                    "17、莫小贝初学衡山派，钱夫人再闹同福店",
                    "18、燕小六酒醉乱抓人，郭芙蓉心痴错定情",
                    "19、李大嘴苦练降龙掌，郭芙蓉难逃生死劫",
                    "20、泼皮侯三搅和客栈，女侠芙蓉操办过年",
                    "21、寻短见老五见魔女，赌怨气小郭教武功",
                    "22、佟掌柜喜获榴连果，江小道怒打无情郎",
                    "23、买私盐厨子遭盘查，换身份贼头变捕快",
                    "24、算命人作法被识破，郭芙蓉洗面遭毁容",
                    "25、佟老爹怒嫁不孝女，白展堂误娶无情人",
                    "26、求休书小郭盼断肠，思佳人秀才伤透心",
                    "27、入丐帮老邢丢公职，升捕头小六打官腔",
                    "28、钱夫人贪财生毒计，莫小贝雪耻怒报官",
                    "29、吕圣人智斗姬无命，佟掌柜火拼展红绫",
                    "30、佟石头离乡闯江湖，郭芙蓉回家探父母",
                    "31、痴秀才思念郭芙蓉，醋湘玉刁难祝无双",
                    "32、拼厨艺大嘴成碎催，遇良才诸葛传衣钵",
                    "33、西域客欲擒关中侠，涉奇险盗圣救人质",
                    "34、受邀请小贝赴衡山，为情困秀才抱错人",
                    "35、小魔女执意做红娘，佟湘玉一心修剑谱",
                    "36、遇追风盗圣吓破胆，见芙蓉秀才惊断魂",
                    "37、心不甘小郭拼才艺，情不愿无双走天涯",
                    "38、迎挑战小贝当掌柜，出狠招湘玉赢赌局",
                    "39、吕秀才得理不饶人，郭芙蓉自食苦月饼",
                    "40、庆中秋好梦一日游，历磨难客栈重聚首",
                    "41、痴情汉重逢梦中人，糊涂女初识菜刀门",
                    "42、燕小六大摆迷魂阵，千面人关底显真身",
                    "43、恶婆婆率众闹洞房，善媳妇受虐一身伤",
                    "44、吕秀才误收嗜血徒，白展堂临终吐心声",
                    "45、通缉犯转眼成病患，阶下囚洗心重做人",
                    "46、神秘客夜访七侠镇，莫掌门血战灯市街",
                    "47、小姐妹重逢暗叫劲，老夫妻患难见真情",
                    "48、败家女随口开条件，穷哥俩合伙办武馆",
                    "49、慕容嫣专访莫掌门，吕秀才定义真侠士",
                    "50、刑捕头变身小杂役，燕小六临别显真情",
                    "51、采花盗意外现真身，虎外甥作媒为报恩",
                    "52、佟石头初尝爱滋味，祝无双投身六扇门",
                    "53、燕捕头研发绝密令，包侍郎得理不饶人",
                    "54、苦刑犯逃离同福店，黑衣人解救倒霉蛋",
                    "55、佟掌柜沦为十六姨，包大仁欢渡洞房夜",
                    "56、展侍卫私放真刺客，祝无双泪别假卧底",
                    "57、李大嘴装疯孵鸡蛋，吕秀才变身四龄童",
                    "58、小师妹现身七侠镇，大师姐难解心头愤",
                    "59、佟掌柜魂归小西天，睡美人变身火凤凰",
                    "60、李大嘴入室成劫匪，佟湘玉狠心弃情郎",
                    "61、前女友盘查私房钱，局外人识错苦肉计",
                    "62、旧爱已成如烟往事，新欢直面惨淡人生",
                    "63、白展堂重回老地方，佟湘玉折磨新跑堂",
                    "64、白展堂受累入冤狱，王豆豆为爱跑断腿",
                    "65、小跑堂患上失忆症，老情人千里送相思",
                    "66、郭蔷薇信口传谣言，燕小六夜祭一二三",
                    "67、吕秀才练成点穴手，郭芙蓉含恨归故里",
                    "68、祝无双诚觅心上人，辛普森设计娶贤妻",
                    "69、佟掌柜收到诅咒信，神算子梦断同福店",
                    "70、赛貂婵沦为小丫环，佟湘玉卖店赎仇人",
                    "71、吕秀才流连吉庆街，金湘玉巧设惊魂计",
                    "72、佟掌柜假意改前非，白展堂答错选择题",
                    "73、柳星雨夜遇莽郎君，李大嘴情定美娇娘",
                    "74、柳月云夜投迷魂散，祝无双怒斥冷面人",
                    "75、李大嘴拒演凤求凰，燕小六假礼寄真情",
                    "76、莫小贝街头遭绑架，燕小六智擒假绑匪",
                    "77、谢捕头盘查店中人，钱夫人巧取同福店",
                    "78、杨蕙兰酒后诉衷肠，杜子俊夜访同福店",
                    "79、李大嘴遭遇老情敌，杨蕙兰展开新人生",
                    "80、燕小六接到调职令，凌腾云夜袭同福店",
                    "81、未命名",
                ]
            }
        },
        filters: {
            timeFormat(time) {
                let minutes = parseInt(time / 60);
                let seconds = parseInt(time % 60);
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                return minutes + ':' + seconds
            }
        },
        methods: {
            /*旋转*/
            animationPlay() {
                // let animation = uni.createAnimation({
                //     duration: 10000,
                //     timingFunction: 'linear',
                // })
                // this.animation = animation
                // animation.rotate(360).step()
                // this.animationData = animation.export()
            },
            /*列表*/
            listShow(){
                this.isListShow=!this.isListShow
            },
            togglePlay() {
                if (!this.playStatus) {
                    this.audioCtx.play()
                    console.log('播放')
                    this.animationPlay()
                } else {
                    this.audioCtx.pause()
                    console.log('暂停')
                }
                this.playStatus = !this.playStatus
            },
            /*播放*/
            audioPlay() {
                this.audioCtx.play()
            },
            /*上一曲*/
            audioLast() {
                if (this.nowPlay > 1) {
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
                this.isListShow=false
                this.nowPlay = num
                this.audioCtx.src = 'https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/' + num + '.m4a';
                this.audioCtx.onCanplay(() => {
                    console.log('准备就绪')
                    this.audioPlay()
                    this.playStatus = 1
                    this.currentTime = this.audioCtx.currentTime
                    this.duration = this.audioCtx.duration
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
                this.audioPlay()
            },
            /*跳到结尾*/
            audioEnd() {
                this.audioCtx.seek(this.duration - 5)
            },
            /*time更新触发*/
            audioTimeupdate() {
                this.progress = (this.audioCtx.currentTime / this.audioCtx.duration) * 100
                this.currentTime = this.audioCtx.currentTime
            },

            /*循环*/
            audioLoop() {
                this.loop = !this.loop
                let tip = '循环播放';
                if (!this.loop) {
                    tip = '顺序播放'
                }
                uni.showToast({
                    title: tip,
                    duration: 2000,
                    icon: 'none',
                    position: 'bottom'
                });
            }
        },
        mounted() {
            this.audioCtx = uni.createInnerAudioContext('myAudio');
            this.audioCtx.autoplay = false;

            this.audioCtx.src = 'https://zb.luckyme.com.cn/static/mp3/wulinwaizhuan/' + this.nowPlay + '.m4a';
            this.audioCtx.onTimeUpdate((e) => {
                this.audioTimeupdate()
            })
            this.audioCtx.onEnded((e) => {
                if (!this.loop) {
                    this.audioNext()
                } else {
                    this.audioStart()
                }
                console.log('结束啦')
            })

            this.audioCtx.onPlay(() => {
                this.duration = this.audioCtx.duration
                console.log(this.audioCtx);
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
    .container:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: inherit;
        filter: blur(10px);
        background-blend-mode: darken;
        z-index: 3;

    }



    .container {
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        z-index: 5;
        position: fixed;
        height: 100%;
        width: 100%;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;

        .buttons {
            position: absolute;
            z-index: 10;
            width: 100%;
            /*display: flex;*/
            display: none;
            flex-direction: row;
        }
        .nowPlay {
            color: white;
            z-index: 5;

            .text {
                text-align: center;
                font-size: 30rpx;
            }
        }
        .player-box {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            padding: 270rpx 0;

            .player-box1 {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(201, 197, 200, 0.3);
                border-radius: 100%;
                width: 420rpx;
                height: 420rpx;

                .player-box2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(48, 43, 47, 0.3);
                    border-radius: 100%;
                    width: 400rpx;
                    height: 400rpx;
                    background-image: linear-gradient(to bottom right, black, grey);


                    .player {
                        background-color: grey;
                        border-radius: 100%;
                        width: 300rpx;
                        height: 300rpx;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;

                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }
            }

        }

        .controller {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10;

            .progress-box {
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

                    .time1, .time2 {
                        color: white;
                        font-size: 23rpx;
                        font-weight: lighter;
                    }

                    .time1 {
                        position: absolute;
                        left: -70rpx;
                    }

                    .time2 {
                        position: absolute;
                        right: -70rpx;
                    }

                    .progress {
                        background: #1296db;
                        height: 6rpx;
                    }
                }
            }

            .controller-buttons {
                box-sizing: border-box;
                width: 100%;
                display: flex;
                padding: 50rpx 50rpx;
                align-items: center;
                justify-content: space-between;

                .order img, .last img, .play img, .next img, .list img {
                    width: 50rpx;
                    height: 50rpx;
                }

                .play img {
                    width: 100rpx;
                    height: 100rpx;
                }
            }
        }

    }
</style>
