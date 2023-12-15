<template>
  <App />
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style>
@font-face {
  font-family: "GothamPro";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~static/fonts/gothampro.ttf") format("truetype");
}
@font-face {
  font-family: "NeutralFace";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("~static/fonts/NeutralFace-Bold.otf") format("truetype");
}
@font-face {
  font-family: "Radiotechnika";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~static/fonts/Radiotechnika.otf") format("truetype");
}

:root {
  --title-font: "NeutralFace", sans-serif;
  --subTitle-font: "Radiotechnika", sans-serif;
}
* {
  color: rgb(255, 255, 255);
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  background-color: rgb(0, 0, 0);
  color: white;
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: "GothamPro",sans-serif;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
	font-family: "GothamPro",sans-serif;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
</style>
