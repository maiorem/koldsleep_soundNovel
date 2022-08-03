<template>
    <div id="instrument_button">
        <div class="contents">
            <table>
                <tr>
                    <td @click="play(1)" :class="{'sound' : classStates[1] === 'disabled', sound_active : classStates[1] === 'active', sound_pause : classStates[1] === 'stop' }"></td>
                    <td @click="play(2)" :class="{'sound' : classStates[2] === 'disabled', sound_active : classStates[2] === 'active', sound_pause : classStates[2] === 'stop' }"></td>
                    <td @click="play(3)" :class="{'sound' : classStates[3] === 'disabled', sound_active : classStates[3] === 'active', sound_pause : classStates[3] === 'stop' }"></td>
                    <td @click="play(4)" :class="{'sound' : classStates[4] === 'disabled', sound_active : classStates[4] === 'active', sound_pause : classStates[4] === 'stop' }"></td>
                    <td @click="play(5)" :class="{'sound' : classStates[5] === 'disabled', sound_active : classStates[5] === 'active', sound_pause : classStates[5] === 'stop' }"></td>
                    <td @click="play(6)" :class="{'sound' : classStates[6] === 'disabled', sound_active : classStates[6] === 'active', sound_pause : classStates[6] === 'stop' }"></td>
                    <td @click="play(7)" :class="{'sound' : classStates[7] === 'disabled', sound_active : classStates[7] === 'active', sound_pause : classStates[7] === 'stop' }"></td>
                </tr>
                <tr>
                    <td @click="play(8)" :class="{'sound' : classStates[8] === 'disabled', sound_active : classStates[8] === 'active', sound_pause : classStates[8] === 'stop' }"></td>
                    <td @click="play(9)" :class="{'sound' : classStates[9] === 'disabled', sound_active : classStates[9] === 'active', sound_pause : classStates[9] === 'stop' }"></td>
                    <td @click="play(10)" :class="{'sound' : classStates[10] === 'disabled', sound_active : classStates[10] === 'active', sound_pause : classStates[10] === 'stop' }"></td>
                    <td @click="play(11)" :class="{'sound' : classStates[11] === 'disabled', sound_active : classStates[11] === 'active', sound_pause : classStates[11] === 'stop' }"></td>
                    <td @click="play(12)" :class="{'sound' : classStates[12] === 'disabled', sound_active : classStates[12] === 'active', sound_pause : classStates[12] === 'stop' }"></td>
                    <td @click="play(13)" :class="{'sound' : classStates[13] === 'disabled', sound_active : classStates[13] === 'active', sound_pause : classStates[13] === 'stop' }"></td>
                    <td @click="play(14)" :class="{'sound' : classStates[14] === 'disabled', sound_active : classStates[14] === 'active', sound_pause : classStates[14] === 'stop' }"></td>
                </tr>
                <tr>
                    <td @click="play(15)" :class="{'sound' : classStates[15] === 'disabled', sound_active : classStates[15] === 'active', sound_pause : classStates[15] === 'stop' }"></td>
                    <td @click="play(16)" :class="{'sound' : classStates[16] === 'disabled', sound_active : classStates[16] === 'active', sound_pause : classStates[16] === 'stop' }"></td>
                    <td @click="play(17)" :class="{'sound' : classStates[17] === 'disabled', sound_active : classStates[17] === 'active', sound_pause : classStates[17] === 'stop' }"></td>
                    <td @click="play(18)" :class="{'sound' : classStates[18] === 'disabled', sound_active : classStates[18] === 'active', sound_pause : classStates[18] === 'stop' }"></td>
                    <td @click="play(19)" :class="{'sound' : classStates[19] === 'disabled', sound_active : classStates[19] === 'active', sound_pause : classStates[19] === 'stop' }"></td>
                    <td @click="play(20)" :class="{'sound' : classStates[20] === 'disabled', sound_active : classStates[20] === 'active', sound_pause : classStates[20] === 'stop' }"></td>
                    <td @click="play(21)" :class="{'sound' : classStates[21] === 'disabled', sound_active : classStates[21] === 'active', sound_pause : classStates[21] === 'stop' }"></td>
                </tr>
                <tr>
                    <td @click="play(22)" :class="{'sound' : classStates[22] === 'disabled', sound_active : classStates[22] === 'active', sound_pause : classStates[22] === 'stop' }"></td>
                    <td @click="play(23)" :class="{'sound' : classStates[23] === 'disabled', sound_active : classStates[23] === 'active', sound_pause : classStates[23] === 'stop' }"></td>
                    <td @click="play(24)" :class="{'sound' : classStates[24] === 'disabled', sound_active : classStates[24] === 'active', sound_pause : classStates[24] === 'stop' }"></td>
                    <td @click="play(25)" :class="{'sound' : classStates[25] === 'disabled', sound_active : classStates[25] === 'active', sound_pause : classStates[25] === 'stop' }"></td>
                    <td @click="play(26)" :class="{'sound' : classStates[26] === 'disabled', sound_active : classStates[26] === 'active', sound_pause : classStates[26] === 'stop' }"></td>
                    <td @click="play(27)" :class="{'sound' : classStates[27] === 'disabled', sound_active : classStates[27] === 'active', sound_pause : classStates[27] === 'stop' }"></td>
                    <td @click="play(28)" :class="{'sound' : classStates[28] === 'disabled', sound_active : classStates[28] === 'active', sound_pause : classStates[28] === 'stop' }"></td>
                </tr>
                <tr>
                    <td @click="play(29)" :class="{'sound' : classStates[29] === 'disabled', sound_active : classStates[29] === 'active', sound_pause : classStates[29] === 'stop' }"></td>
                    <td @click="play(30)" :class="{'sound' : classStates[30] === 'disabled', sound_active : classStates[30] === 'active', sound_pause : classStates[30] === 'stop' }"></td>
                    <td @click="play(31)" :class="{'sound' : classStates[31] === 'disabled', sound_active : classStates[31] === 'active', sound_pause : classStates[31] === 'stop' }"></td>
                    <td @click="play(32)" :class="{'sound' : classStates[32] === 'disabled', sound_active : classStates[32] === 'active', sound_pause : classStates[32] === 'stop' }"></td>
                    <td @click="play(33)" :class="{'sound' : classStates[33] === 'disabled', sound_active : classStates[33] === 'active', sound_pause : classStates[33] === 'stop' }"></td>
                    <td @click="play(34)" :class="{'sound' : classStates[34] === 'disabled', sound_active : classStates[34] === 'active', sound_pause : classStates[34] === 'stop' }"></td>
                    <td @click="play(35)" :class="{'sound' : classStates[35] === 'disabled', sound_active : classStates[35] === 'active', sound_pause : classStates[35] === 'stop' }"></td>
                </tr>
                <tr>
                    <td @click="play(36)" :class="{'sound' : classStates[36] === 'disabled', sound_active : classStates[36] === 'active', sound_pause : classStates[36] === 'stop' }"></td>
                    <td @click="play(37)" :class="{'sound' : classStates[37] === 'disabled', sound_active : classStates[37] === 'active', sound_pause : classStates[37] === 'stop' }"></td>
                    <td @click="play(38)" :class="{'sound' : classStates[38] === 'disabled', sound_active : classStates[38] === 'active', sound_pause : classStates[38] === 'stop' }"></td>
                    <td @click="play(39)" :class="{'sound' : classStates[39] === 'disabled', sound_active : classStates[39] === 'active', sound_pause : classStates[39] === 'stop' }"></td>
                    <td @click="play(40)" :class="{'sound' : classStates[40] === 'disabled', sound_active : classStates[40] === 'active', sound_pause : classStates[40] === 'stop' }"></td>
                    <td @click="play(41)" :class="{'sound' : classStates[41] === 'disabled', sound_active : classStates[41] === 'active', sound_pause : classStates[41] === 'stop' }"></td>
                    <td @click="play(42)" :class="{'sound' : classStates[42] === 'disabled', sound_active : classStates[42] === 'active', sound_pause : classStates[42] === 'stop' }"></td>
                </tr>
                <tr>
                    <td @click="play(43)" :class="{'sound' : classStates[43] === 'disabled', sound_active : classStates[43] === 'active', sound_pause : classStates[43] === 'stop' }"></td>
                    <td @click="play(44)" :class="{'sound' : classStates[44] === 'disabled', sound_active : classStates[44] === 'active', sound_pause : classStates[44] === 'stop' }"></td>
                    <td @click="play(45)" :class="{'sound' : classStates[45] === 'disabled', sound_active : classStates[45] === 'active', sound_pause : classStates[45] === 'stop' }"></td>
                    <td @click="play(46)" :class="{'sound' : classStates[46] === 'disabled', sound_active : classStates[46] === 'active', sound_pause : classStates[46] === 'stop' }"></td>
                    <td @click="play(47)" :class="{'sound' : classStates[47] === 'disabled', sound_active : classStates[47] === 'active', sound_pause : classStates[47] === 'stop' }"></td>
                    <td @click="play(48)" :class="{'sound' : classStates[48] === 'disabled', sound_active : classStates[48] === 'active', sound_pause : classStates[48] === 'stop' }"></td>
                    <td @click="play(49)" :class="{'sound' : classStates[49] === 'disabled', sound_active : classStates[49] === 'active', sound_pause : classStates[49] === 'stop' }"></td>
                </tr>
                <tr>
                    <td @click="play(50)" :class="{'sound' : classStates[50] === 'disabled', sound_active : classStates[50] === 'active', sound_pause : classStates[50] === 'stop' }"></td>
                    <td @click="play(51)" :class="{'sound' : classStates[51] === 'disabled', sound_active : classStates[51] === 'active', sound_pause : classStates[51] === 'stop' }"></td>
                    <td @click="play(52)" :class="{'sound' : classStates[52] === 'disabled', sound_active : classStates[52] === 'active', sound_pause : classStates[52] === 'stop' }"></td>
                    <td @click="play(53)" :class="{'sound' : classStates[53] === 'disabled', sound_active : classStates[53] === 'active', sound_pause : classStates[53] === 'stop' }"></td>
                    <td @click="play(54)" :class="{'sound' : classStates[54] === 'disabled', sound_active : classStates[54] === 'active', sound_pause : classStates[54] === 'stop' }"></td>
                    <td @click="allPlay" class="play"><v-img class="playbtn" src="@/assets/img/playButton.png"></v-img></td>
                    <td @click="allStop" class="stop"><v-img class="stopbtn" src="@/assets/img/stopButton.png"></v-img></td>
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
            2 : store.getters['getMusicIconUsable'](2),
            3 : store.getters['getMusicIconUsable'](3),
            4 : store.getters['getMusicIconUsable'](4),
            5 : store.getters['getMusicIconUsable'](5),
            6 : store.getters['getMusicIconUsable'](6),
            7 : store.getters['getMusicIconUsable'](7),
            8 : store.getters['getMusicIconUsable'](8),
            9 : store.getters['getMusicIconUsable'](9),
            10 : store.getters['getMusicIconUsable'](10),
            11 : store.getters['getMusicIconUsable'](11),
            12 : store.getters['getMusicIconUsable'](12),
            13 : store.getters['getMusicIconUsable'](13),
            14 : store.getters['getMusicIconUsable'](14),
            15 : store.getters['getMusicIconUsable'](15),
            16 : store.getters['getMusicIconUsable'](16),
            17 : store.getters['getMusicIconUsable'](17),
            18 : store.getters['getMusicIconUsable'](18),
            19 : store.getters['getMusicIconUsable'](19),
            20 : store.getters['getMusicIconUsable'](20),
            21 : store.getters['getMusicIconUsable'](21),
            22 : store.getters['getMusicIconUsable'](22),
            23 : store.getters['getMusicIconUsable'](23),
            24 : store.getters['getMusicIconUsable'](24),
            25 : store.getters['getMusicIconUsable'](25),
            26 : store.getters['getMusicIconUsable'](26),
            27 : store.getters['getMusicIconUsable'](27),
            28 : store.getters['getMusicIconUsable'](28),
            29 : store.getters['getMusicIconUsable'](29),
            30 : store.getters['getMusicIconUsable'](30),
            31 : store.getters['getMusicIconUsable'](31),
            32 : store.getters['getMusicIconUsable'](32),
            33 : store.getters['getMusicIconUsable'](33),
            34 : store.getters['getMusicIconUsable'](34),
            35 : store.getters['getMusicIconUsable'](35),
            36 : store.getters['getMusicIconUsable'](36),
            37 : store.getters['getMusicIconUsable'](37),
            38 : store.getters['getMusicIconUsable'](38),
            39 : store.getters['getMusicIconUsable'](39),
            40 : store.getters['getMusicIconUsable'](40),
            41 : store.getters['getMusicIconUsable'](41),
            42 : store.getters['getMusicIconUsable'](42),
            43 : store.getters['getMusicIconUsable'](43),
            44 : store.getters['getMusicIconUsable'](44),
            45 : store.getters['getMusicIconUsable'](45),
            46 : store.getters['getMusicIconUsable'](46),
            47 : store.getters['getMusicIconUsable'](47),
            48 : store.getters['getMusicIconUsable'](48),
            49 : store.getters['getMusicIconUsable'](49),
            50 : store.getters['getMusicIconUsable'](50),
            51 : store.getters['getMusicIconUsable'](51),
            52 : store.getters['getMusicIconUsable'](52),
            53 : store.getters['getMusicIconUsable'](53),
            54 : store.getters['getMusicIconUsable'](54),
            55 : store.getters['getMusicIconUsable'](55),


        }
    }
  },
  created() {
    eventBus.$on('iconUsable', this.receive);
  },
  methods : {

    play(num) {
        //비활성 버튼을 클릭한 경우
        if (store.getters['getMusicIconUsable'](num) == 'disabled') {
            this.empty()
        }
        store.commit("toggleIcon", num);
        this.classStates[num] = store.getters['getMusicIconUsable'](num);
    },
    receive(num) {
        console.log("receive : " + num);
        this.classStates[num] = store.getters['getMusicIconUsable'](num);
    },
    //비활성 버튼을 클릭한 경우
    empty() {
        console.log("empty Button!!!");
        this.$emit("emptyEvent");
    },
    allPlay() {
        store.commit("allPlay");
    },
    allStop() {
        store.commit("allStop");
    },
    reset() {
        store.commit("allReset");
    },
}
  

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
