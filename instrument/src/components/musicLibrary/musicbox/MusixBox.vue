<template>
    <div id="instrument_button">
        <div class="contents">
            <table>
                <tr>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                </tr>
                <tr>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                </tr>
                <tr>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                </tr>
                <tr>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                </tr>
                <tr>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                </tr>
                <tr>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                </tr>
                <tr>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                </tr>
                <tr>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="sound"></td>
                    <td class="nonsound"></td>
                    <td class="play"><v-img class="playbtn" src="@/assets/img/playButton.png"></v-img></td>
                    <td class="stop"><v-img class="stopbtn" src="@/assets/img/stopButton.png"></v-img></td>
                </tr>
            </table>

        </div>

    </div>
</template>
<script>

export default {
  name: 'musicBox',

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

  background: rgba(26, 26, 26, 0.9);
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
