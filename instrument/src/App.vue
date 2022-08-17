<template>
  <div id="app" :style="{ 'background-image' : randomImg() }">
    <HomeMain />
  </div>
</template>

<script>
import HomeMain from './components/HomeMain.vue'

export default {
  name: 'App',
  components: {
    HomeMain,
  },
  methods: {
    randomImg() {
      const rdIdx = Math.floor(Math.random() * this.src.length)
      return `url("${this.src[rdIdx]}")`

    }
  },
  data() {
    return {
      src : [
        'https://koldsleep.netlify.app/img/수면8.b66174ed.gif',
        'https://koldsleep.netlify.app/img/수면13.a0def2b0.gif',
        'https://koldsleep.netlify.app/img/수면9.0aa9e515.webp',
        'https://koldsleep.netlify.app/img/수면10.e3237dd2.webp',
      ]
    }
  }
}


</script>

<style>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");

#app {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-image: 
  url('@/assets/img/bg/수면8.gif'),
  url('@/assets/img/bg/수면9.webp'),
  url('@/assets/img/bg/수면10.webp'),
  url('@/assets/img/bg/수면13.gif');

  height: 100vh;
  margin:0; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
}
@media (max-height: 900px) {

  #app {
    height: 1000px;
  }

}


@media (max-width: 600px) {
  #app {
    width: 100vw;
    height: 1341px;
    position:absolute;
    text-align: center;
  }
}

</style>
