<template>
  <div>
    <section>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </section>
  </div>
</template>

<script>
export default {
  name: "meteorShower",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div {
  overflow: hidden;
}
section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(https://ss1.baidu.com/6ON1bjeh1BF3odCf/it/u=2128994740,3959693284&fm=27&gp=0.jpg)
    100% 100%;
  background-position-x: center;
  background-size: cover;
  animation: animateBg 50s linear infinite;
}

@keyframes animateBg {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 10%),
    0 0 0 7px rgba(255, 255, 255, 0), 0 0 0 10px rgba(255, 255, 255, 5%);
  animation: animate 3s linear infinite;
}
span::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: teanslateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}

@keyframes animate {
  0% {
    transform: rotate(315deg) translate(1000px);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translate(-1000px);
    opacity: 0;
  }
}
span:nth-child(1) {
  top: 0;
  right: 0;
  animation-delay: 0;
  animation-duration: 1s;
}
span:nth-child(2) {
  top: 520px;
  right: 80px;
  animation-delay: 0.2s;
  animation-duration: 1.5s;
}
span:nth-child(3) {
  top: 80px;
  right: 1000px;
  animation-delay: 0.4s;
  animation-duration: 2s;
}
span:nth-child(4) {
  top: 1314px;
  right: 180px;
  animation-delay: 0.6s;
  animation-duration: 2s;
}
span:nth-child(5) {
  top: 666px;
  right: 400px;
  left: infinite;
  animation-delay: 0.8s;
  animation-duration: 2.5s;
}
span:nth-child(6) {
  top: 440px;
  right: 600px;
  left: infinite;
  animation-delay: 1s;
  animation-duration: 3s;
}
span:nth-child(7) {
  top: 300px;
  right: 300px;
  left: infinite;
  animation-delay: 1.2s;
  animation-duration: 1.75ss;
}
span:nth-child(8) {
  top: 800px;
  right: 700px;
  left: infinite;
  animation-delay: 1.4s;
  animation-duration: 1.25s;
}
span:nth-child(9) {
  top: 200px;
  right: 1000px;
  left: infinite;
  animation-delay: 0.75s;
  animation-duration: 2.25s;
}
span:nth-child(10) {
  top: 1111px;
  right: 150px;
  left: infinite;
  animation-delay: 0.7s;
  animation-duration: 1.25s;
}
</style>
