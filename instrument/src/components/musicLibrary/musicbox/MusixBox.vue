<template>
    <div id="instrument_button">
        <div class="contents">
            <table>
                <tr>
                    <td @click="play(1)" :class="{'sound' : classStates[1] === 'disabled', sound_active : classStates[1] === 'active', sound_pause : classStates[1] === 'stop' }"></td>
                    <td @click="play(2)" :class="{'sound' : classStates[2] === 'disabled', sound_active : classStates[2] === 'active', sound_pause : classStates[2] === 'stop' }"></td>
                    <td class="sound" @click="play(3)"></td>
                    <td class="sound" @click="play(4)"></td>
                    <td class="sound" @click="play(5)"></td>
                    <td class="sound" @click="play(6)"></td>
                    <td class="sound" @click="play(7)"></td>
                </tr>
                <tr>
                    <td class="sound" @click="play(8)"></td>
                    <td class="sound" @click="play(9)"></td>
                    <td class="sound" @click="play(10)"></td>
                    <td class="sound" @click="play(11)"></td>
                    <td class="sound" @click="play(12)"></td>
                    <td class="sound" @click="play(13)"></td>
                    <td class="sound" @click="play(14)"></td>
                </tr>
                <tr>
                    <td class="sound" @click="play(15)"></td>
                    <td class="sound" @click="play(16)"></td>
                    <td class="sound" @click="play(17)"></td>
                    <td class="sound" @click="play(18)"></td>
                    <td class="sound" @click="play(19)"></td>
                    <td class="sound" @click="play(20)"></td>
                    <td class="sound" @click="play(21)"></td>
                </tr>
                <tr>
                    <td class="sound" @click="play(22)"></td>
                    <td class="sound" @click="play(23)"></td>
                    <td class="sound" @click="play(24)"></td>
                    <td class="sound" @click="play(25)"></td>
                    <td class="sound" @click="play(26)"></td>
                    <td class="sound" @click="play(27)"></td>
                    <td class="sound" @click="play(28)"></td>
                </tr>
                <tr>
                    <td class="sound" @click="play(29)"></td>
                    <td class="sound" @click="play(30)"></td>
                    <td class="sound" @click="play(31)"></td>
                    <td class="sound" @click="play(32)"></td>
                    <td class="sound" @click="play(33)"></td>
                    <td class="sound" @click="play(34)"></td>
                    <td class="sound" @click="play(35)"></td>
                </tr>
                <tr>
                    <td class="sound" @click="play(36)"></td>
                    <td class="sound" @click="play(37)"></td>
                    <td class="sound" @click="play(38)"></td>
                    <td class="sound" @click="play(39)"></td>
                    <td class="sound" @click="play(40)"></td>
                    <td class="sound" @click="play(41)"></td>
                    <td class="sound" @click="play(42)"></td>
                </tr>
                <tr>
                    <td class="sound" @click="play(43)"></td>
                    <td class="sound" @click="play(44)"></td>
                    <td class="sound" @click="play(45)"></td>
                    <td class="sound" @click="play(46)"></td>
                    <td class="sound" @click="play(47)"></td>
                    <td class="sound" @click="play(48)"></td>
                    <td class="sound" @click="play(49)"></td>
                </tr>
                <tr>
                    <td class="sound" @click="play(50)"></td>
                    <td class="sound" @click="play(51)"></td>
                    <td class="sound" @click="play(52)"></td>
                    <td class="sound" @click="play(53)"></td>
                    <td class="nonsound"></td>
                    <td class="play"><v-img class="playbtn" src="@/assets/img/playButton.png"></v-img></td>
                    <td class="stop"><v-img class="stopbtn" src="@/assets/img/stopButton.png"></v-img></td>
                </tr>
            </table>

        </div>

    </div>
</template>
<script>
import eventBus from '@/assets/eventbus.js'
import store from "@/store/index.js";


export default {
  name: 'musicBox',
  data() {
    return {
        classStates : {
            1 : store.getters['getMusicIconUsable'](1),
            2 : store.getters['getMusicIconUsable'](2)
        }

    }
  },
  created() {
    eventBus.$on('iconUsable', this.receive);
  },
  methods : {
    play(num) {
        store.commit("toggleIcon", num);
        this.classStates[num] = store.getters['getMusicIconUsable'](num);
    },
    receive(num) {
        console.log("receive : " + num);
        this.classStates[num] = store.getters['getMusicIconUsable'](num);
    }
  },

}
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}

#instrument_button {
  box-sizing: border-box;

  position: absolute;
  height: 374px;
  width: 336px;

  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  
  background:rgba(26, 26, 26, 0.9);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  left: 419px;
  top: 500px;

}

.contents {
    position: relative;
    top: 50px;
    left: 48px;
    width: 240px;
    height: 275px;
}

table {
    border-spacing: 5px;
    border-collapse: separate;
}

td {
    cursor: pointer;
    text-align: center;
}

td.sound {
    width: 30px;
    height: 30px;

    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
}

.sound_active {

    width: 30px;
    height: 30px;

    background: radial-gradient(83.33% 83.33% at 50% 50%, #156FA3 0%, rgba(234, 239, 242, 0.9) 100%);
    box-shadow: 0px 0px 8px #156FA3, 0px 0px 4px #EC743D;
    border-radius: 4px;
}

.sound_pause {
    width: 30px;
    height: 30px;

    background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #E9E9E9 100%);
    box-shadow: 0px 0px 8px #FFFFFF, 0px 0px 4px #FFFFFF;
    border-radius: 4px;

}


.playbtn {
    position: relative;
    width: 15px;
    height: 15px;

    top: 10px;
    left: 10px;

    border-radius: 1px;
}

.stopbtn {

    position: relative;

    top: 10px;
    left: 10px;

    width: 15px;
    height: 15px;
    cursor: pointer;
}


</style>
