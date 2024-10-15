<template>
  <main>
    <header>
      <BugeurMenu/>
      <section class="header">
        <div class="text">
          <h1>Redécouvrez l'univers captivant des JO de Paris 2024</h1>
          <p>Bienvenue sur notre plateforme dédiée aux Jeux Olympiques de Paris 2024. Revivez l'émotion, les moments
            forts et l'esprit inoubliable de cet événement exceptionnel.</p>
          <div>
            <ButtonComponent link="/game" text="Jouer"/>
          </div>
        </div>
        <img src="@/assets/phryge.png" alt="">


        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>


      </section>
    </header>


    <section class="section-1">
      <div class="text-container">
        <span>Émotion</span>
        <h2>Revivez Paris 2024</h2>
        <p>Redécouvrez l'excitation des Jeux Olympiques de Paris 2024, un événement qui a uni le monde.</p>
        <div class="container-button">
          <a href="#" class="link classic">En savoir plus</a>
          <a href="#" class="link stroke">Inscription</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import BugeurMenu from "@/components/BugeurMenu.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";


export default {
  name: 'HomeView',
  components: {ButtonComponent, BugeurMenu},

}
</script>

<style scoped lang="scss">

main {
  margin-top: 100px;
}

header {
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;

  .header {
    position: relative;
    padding: 0px 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    background: white;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      gap: 32px;
      padding: 0px 20px;
    }

    img {
      width: 50%;
      object-fit: cover;
      @media screen and (max-width: 900px) {
        height: 50%;
        width: 100%;
      }
    }


    .scroll-downs {
      position: absolute;
      bottom: 120px;
      margin: auto;
      width :34px;
      height: 55px;
    }
    .mousey {
      width: 3px;
      padding: 10px 15px;
      height: 35px;
      border: 2px solid black;
      border-radius: 25px;
      opacity: 0.75;
      box-sizing: content-box;
    }
    .scroller {
      width: 3px;
      height: 10px;
      border-radius: 25%;
      background-color: black;
      animation-name: scroll;
      animation-duration: 2.2s;
      animation-timing-function: cubic-bezier(.15,.41,.69,.94);
      animation-iteration-count: infinite;
    }
    @keyframes scroll {
      0% { opacity: 0; }
      10% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(15px); opacity: 0;}
    }

    .text {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 32px;
      @media screen and (max-width: 900px) {
        height: 50%;
        width: 100%;
      }

      h1 {
        font-size: 40px;
        font-weight: bold;
        color: #2c3e50;
        @media screen and (max-width: 900px) {
          font-size: 30px;
        }
      }

      p {
        font-size: 20px;
        color: #2c3e50;
        @media screen and (max-width: 900px) {
          font-size: 15px;
        }
      }
    }
  }
}

.section-1 {
  height: 60vh;
  width: 100%;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;

  .text-container {
    padding: 0px 120px;
    @media screen and (max-width: 900px){
      padding: 0px 16px;
    }
  }

  span {
    display: block;
    font-size: 15px;
    padding-top: 10px;
    text-align: left;
    color: white;
    font-weight: bold;
  }

  h2 {
    font-weight: bolder;
    padding: 10px 0px 10px 0px;
    font-size: 50px;
    color: white;
  }
}

.container-button{
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: center;
  @media screen and (max-width: 400px){
    flex-direction: column;
    align-items: stretch;
  }
}

.link {
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;
  border: 1px white solid;
}

.link.stroke{
  color: white;
  text-wrap: nowrap;
}

.link.classic{
  background-color: white;
  color: black;
  text-wrap: nowrap;
}

p {
  color: white;
  padding-bottom: 20px;
}
</style>
