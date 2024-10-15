<template>
  <div class="timer">
    <p>{{ formattedTime }}</p>
  </div>
</template>

<script>
export default {
  name: "TimerSystem",
  props: {
    duration: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      remainingTime: this.duration,
      timerInterval: null,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.remainingTime / 60);
      const seconds = this.remainingTime % 60;
      return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    },
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          this.stopTimer();
          this.$emit('time-up');// Émettre un événement quand le temps est écoulé
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timerInterval);
    },
  },
  beforeUnmount() {
    this.stopTimer(); // Arrêter le timer si le composant est démonté
  },


};
</script>

<style scoped>
.timer {
  position: absolute;
  top:  0;
  left: 0 ;
  right: 0;
  font-size: 24px;
  color: #333;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}
</style>
