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
        'https://koldsleep.netlify.app/img/gif1.bc7a8485.gif',
        'https://koldsleep.netlify.app/img/gif2.0b16fefa.gif',
        'https://koldsleep.netlify.app/img/gif3.c1ca218a.gif',
        'https://koldsleep.netlify.app/img/gif4.3e217952.gif',
        'https://koldsleep.netlify.app/img/gif5.660cf6d8.gif',
        'https://koldsleep.netlify.app/img/gif6.43e68267.gif',
        'https://koldsleep.netlify.app/img/gif7.32f201d1.gif',
        'https://koldsleep.netlify.app/img/gif8.3a878cae.gif',
        'https://koldsleep.netlify.app/img/gif9.489d82ab.gif',
        'https://koldsleep.netlify.app/img/gif10.a25f35f3.gif',
        'https://koldsleep.netlify.app/img/gif11.c7d61d59.gif',
        'https://koldsleep.netlify.app/img/gif12.c72dedbc.gif',
        'https://koldsleep.netlify.app/img/gif13.0df2e347.gif',
        'https://koldsleep.netlify.app/img/gif14.32f6b119.gif',
        'https://koldsleep.netlify.app/img/gif15.b1dd1cfc.gif',
        'https://koldsleep.netlify.app/img/gif16.c57fb743.gif',
        'https://koldsleep.netlify.app/img/gif17.7c97d515.gif',
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
  url('@/assets/img/bg/gif3.gif'),
  url('@/assets/img/bg/gif4.gif'),
  url('@/assets/img/bg/gif5.gif'),
  url('@/assets/img/bg/gif6.gif'),
  url('@/assets/img/bg/gif7.gif'),
  url('@/assets/img/bg/gif8.gif'),
  url('@/assets/img/bg/gif9.gif'),
  url('@/assets/img/bg/gif10.gif'),
  url('@/assets/img/bg/gif11.gif'),
  url('@/assets/img/bg/gif12.gif'),
  url('@/assets/img/bg/gif13.gif'),
  url('@/assets/img/bg/gif14.gif'),
  url('@/assets/img/bg/gif15.gif'),
  url('@/assets/img/bg/gif16.gif'),
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
