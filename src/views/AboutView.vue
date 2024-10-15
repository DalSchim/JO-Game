<template>
  <div class="containe">
    <hr>
    <jo-component
        phryge="https://data.over-blog-kiwi.com/6/42/48/22/20231012/ob_614ed7_natation-marathon-mascotte-oly-2d-rvb.webp"
        sport="Athlétisme"
        date="15 octobre 2024"
        video="dQw4w9WgXcQ"
    ></jo-component>
  </div>
</template>
<script setup>
import JoComponent from "@/components/JoHistory/JoComponent.vue";
</script>
<style scoped lang="scss">
.containe {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  height: 100vh;
  padding:0 120px ;
  hr {
    z-index: -1;
    position: absolute;
    top: 0;
    height: 100%;
    width: 1px;
  }
}
</style>
