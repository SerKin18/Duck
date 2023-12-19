<!-- Please remove this file from your project -->
<template>
  <div class="wrapper">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./footer/Footer.vue";
import Header from "./header/Header.vue";
import Main from "./main/Main.vue";
export default {
  components: { Header, Main, Footer },
  name: "App",
};
</script>
<style >
.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 14px;
}
</style>
