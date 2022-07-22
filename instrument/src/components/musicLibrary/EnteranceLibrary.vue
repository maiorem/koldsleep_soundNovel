<template>
  <div class="wrap">
    <dialog-drag id="index_list" :options="{x : 143, y : 300}">
      <div>가장 개인적인 악기</div>
      <ul>
        <li></li>
      </ul>
    </dialog-drag>
    <dialog-drag id="instrument_button" :options="{x : 419, y : 500}">
      <p> Test dialog</p>
    </dialog-drag>
    <dialog-drag id="personal_intru" :options="{x : 806, y : 100}">
      <p> Test dialog</p>
    </dialog-drag>
  </div>
</template>

<script>
import DialogDrag from 'vue-dialog-drag'

export default {
  name: 'enteranceLibrary',
  components:{
    DialogDrag,
  },
}

</script>
<style src='vue-dialog-drag/dist/vue-dialog-drag.css'></style>
<style scoled>
#index_list {
  box-sizing: border-box;

  position: absolute;
  height: 473px;
  width: 387px;
  left: 143px;
  top: 300px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  background: rgba(26, 26, 26, 0.9);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
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

}

#personal_intru {
  box-sizing: border-box;

  position: absolute;
  height: 649px;
  width: 500px;

  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  background: rgba(26, 26, 26, 0.9);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
}

.dialog-header {
  display: none;
}

</style>