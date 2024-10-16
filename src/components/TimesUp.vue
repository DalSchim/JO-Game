<template>
  <div class="times-up">
    <h2>Time's Up!</h2>
    <button @click="restartGame">Restart</button>
  </div>
</template>

<script>
export default {
  name: "TimesUp",
  methods: {
    restartGame() {
      this.$emit('restart');
    },
  },
};
</script>

<style scoped>
.times-up {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}
button {
  margin-top: 10px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
