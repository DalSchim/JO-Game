<script>
export default {
  name: "ScoreBoard",
  mounted() {
    this.getScore();
  },
  data() {
    return {
      scores: [],
    }
  },

  methods: {
    //on recupere le score et le temps et le ranger par ordre de score decroissant du plus grand au plus petit
    getScore() {

      const scores = JSON.parse(localStorage.getItem('scores')) || [];
      this.scores = scores.sort((a, b) => b.score - a.score);
    }

  }
}
</script>

<template>
  <div class="scord-board-container">
    <h3>Tableau de score</h3>
    <div class="scord-board">

      <ul v-for="(score, index) in scores" :key="index">
        <li>{{ score.name }} : {{ score.score }}</li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
.scord-board-container {
  padding: 16px;
  margin-top: 16px;
  font-family: Rubik;
}
h3 {
  text-align: center;
  font-size: 24px;
  font-family: Rubik;

}
.scord-board {
  margin-top: 16px;
  max-height: 300px;
  overflow: scroll;




  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: Rubik;
    font-size: 18px;
  }

  li {
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
}


</style>
