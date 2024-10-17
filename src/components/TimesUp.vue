<template>
  <div class="popup">
    <div class="popup-content">
      <h2>Temps écoulé !</h2>
      <p>Votre score final est de : <b>{{ score }}</b></p>


      <button @click="goToHome">Retour à la page d'accueil</button>
      <button @click="restartGame">Recommencer</button>

      <hr>
      <score-board ref="scoreBoard"/>
      <input type="text" v-model="name">
      <button @click="registerScore">sauvegarder mon score</button>
    </div>
  </div>
</template>

<script>
import ScoreBoard from "@/components/ScoreBoard.vue";

export default {
  components: {ScoreBoard},
  props: {
    score: {
      type: Number,
      default: 0
    }
  },
  methods: {
    restartGame() {
      this.$emit('restart');
    },
    registerScore() {
      if (this.name === '') {
        alert('Veuillez entrer un nom');
        return;
      }

      const scores = JSON.parse(localStorage.getItem('scores')) || [];
      scores.push({ name: this.name, score: this.score });
      localStorage.setItem('scores', JSON.stringify(scores));

      // Use this.$nextTick() to ensure the component is updated before accessing the ref
      this.$nextTick(() => {
        this.$refs.scoreBoard.getScore();  // Update the score list
      });
    },
    goToHome() {
      this.$emit('goToHome');
    }
  },
  data() {
    return {
      name: ''
    };
  }

};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

hr {
  width: 100%;
  margin: 20px 0;
}

.popup-content {
  width: fit-content;
  height: fit-content;
  background-color: white;
  padding: 32px 64px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #1A78FF;
}

input {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
