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
        'https://koldsleep.netlify.app/img/gif1.9424436f.gif',
        'https://koldsleep.netlify.app/img/gif2.5534c96b.gif',
        'https://koldsleep.netlify.app/img/gif4.b01128d4.gif',
        'https://koldsleep.netlify.app/img/gif5.f74d3d3c.gif',
        'https://koldsleep.netlify.app/img/gif8.9ea53f37.gif',
        'https://koldsleep.netlify.app/img/gif9.01f8808b.gif',
        'https://koldsleep.netlify.app/img/gif10.72ce4097.gif',
        'https://koldsleep.netlify.app/img/gif13.80d64358.gif',
        'https://koldsleep.netlify.app/img/gif15.be40608b.gif',
        'https://koldsleep.netlify.app/img/gif17.002cc416.gif',
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
  url('@/assets/img/bg/gif1.gif'),
  url('@/assets/img/bg/gif2.gif'),
  url('@/assets/img/bg/gif4.gif'),
  url('@/assets/img/bg/gif5.gif'),
  url('@/assets/img/bg/gif8.gif'),
  url('@/assets/img/bg/gif9.gif'),
  url('@/assets/img/bg/gif10.gif'),
  url('@/assets/img/bg/gif13.gif'),
  url('@/assets/img/bg/gif15.gif'),
  url('@/assets/img/bg/gif17.gif');

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
