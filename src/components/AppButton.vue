
<script setup lang="ts">

</script>

<template>
  <div class="app-button relative overflow-hidden cursor-pointer max-w-[300px] font-body shadow-sm shadow-amber-400 antialiased">
    <div class="app-button__inner relative bg-black/30 p-5  border-amber-500 relatve border border-l-4 bg-gradient-to-l hover:from-amber-500 hover:shadow-inner text-xl text-center font-medium uppercase text-white"><slot /></div>
  </div>
</template>

<style scoped>
.app-button {
  clip-path: polygon(100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%, 0 0);
}

.app-button__inner {
  box-shadow: inset 0px 0px 0px 2px #333;
  text-shadow: #000 2px 2px;
}

.app-button__inner:hover::after {
  background: #ccc;
}

.app-button__inner::after {
  position: absolute;
  content: "";
  left: calc(50% - 75px);
  bottom: 0;
  width: 150px;
  height: 5px;
  background: rgb(245 158 11);
  transform: perspective(50px) rotateX(30deg);
}

.app-button::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 35px;
  background-color: #333;
  transform-origin: 0 0;
  transform: translate3d(-1px, 43px, 0) rotate(45deg);
  z-index: 1;
}

.app-button::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 38px;
  background-color: rgb(245 158 11);
  transform: translate3d(-12px, 38px, 0) rotate(45deg);
  z-index: 2;
}
</style>