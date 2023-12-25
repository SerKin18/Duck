<!-- Please remove this file from your project -->
<template>
  <MediaQueryProvider ssr :queries="$options.queries">
    <div class="wrapper">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </MediaQueryProvider>
</template>

<script>
import { MediaQueryProvider } from "vue-component-media-queries";
import Footer from "./footer/Footer.vue";
import Header from "./header/Header.vue";
import Main from "./main/Main.vue";
const queries = {
  mobile: "(max-width: 760px)",
};

export default 
{
  components: { Header, Main, Footer, MediaQueryProvider },
  name: "App",
  queries,
  mounted() {
	console.log(this);
	
  }
};
</script>
<style>
.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

}
</style>
