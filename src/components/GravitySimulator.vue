<template>
  <div class="container">
    <TimerSystem :duration="120" @time-up="endSimulation" @timer-tick="adjustGravity()" />
    <ScoreSystem :score="score" />
    <div ref="app"></div>
  </div>
</template>

<script>
import Matter from "matter-js";
import ScoreSystem from "./ScoreSystem.vue";
import TimerSystem from "./TimerSystem.vue";

export default {
  name: "GravitySimulator",
  components: {
    ScoreSystem,
    TimerSystem,
  },
  data() {
    return {
      score: 0,
      engine: null,
      ground: null,
      matterObjects: [],
      groundSpeed: 10, // Vitesse de déplacement de la plateforme
      spriteImages: [
        require("@/assets/argent.png"),
        require("@/assets/or.png"),
        require("@/assets/bronze.png"),
      ],
    };
  },
  mounted() {
    this.initMatter();
    this.addKeyboardControls();
    this.addTouchControls();
  },
  methods: {
    initMatter() {
      const engine = Matter.Engine.create({
        gravity: {y: 1},
      });
      this.engine = engine;

      this.ground = Matter.Bodies.rectangle(400, 580, 810, 60, {
        isStatic: true,
        label: "ground",
        render: {fillStyle: "red"},
      });
      Matter.World.add(engine.world, [this.ground]);

      const render = Matter.Render.create({
        element: this.$refs.app,
        engine: engine,
        options: {
          width: window.innerWidth,
          height: window.innerHeight,
          background: "rgba(0, 255, 255, 0.5)",
          wireframes: false,
        },
      });

      Matter.Render.run(render);
      const runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);

      setInterval(() => {
        this.addRandomBodies(engine);
      }, 2000);

      Matter.Events.on(engine, "collisionStart", this.handleCollision);
    },

    addRandomBodies(engine) {
      const randomX = Math.random() * 800;
      const randomSize = 10;
      const randomImage = this.spriteImages[
          Math.floor(Math.random() * this.spriteImages.length)
          ];

      const newBody = Matter.Bodies.circle(randomX, 0 - randomSize, randomSize, {
        restitution: 0.8,
        frictionAir: 0.001,
        render: {fillStyle: "red"},
        label: "circle",

    });

      Matter.World.add(engine.world, [newBody]);

      this.matterObjects.push({
        body: newBody,
        size: randomSize,
        type: newBody.label,
        image: randomImage,
      });
    },

    handleCollision(event) {
      const pairs = event.pairs;
      pairs.forEach((pair) => {
        const ground = this.engine.world.bodies.find(
            (body) => body.label === "ground"
        );
        if (pair.bodyA === ground || pair.bodyB === ground) {
          const object = pair.bodyA === ground ? pair.bodyB : pair.bodyA;
          Matter.World.remove(this.engine.world, object);
          this.score += 10;
        }
      });
    },

    moveGround(direction) {
      if (!this.ground) return;

      const displacement = direction === "left" ? -this.groundSpeed : this.groundSpeed;
      Matter.Body.translate(this.ground, {x: displacement, y: 0});
    },

    addKeyboardControls() {
      window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          this.moveGround("left");
        } else if (event.key === "ArrowRight") {
          this.moveGround("right");
        }
      });
    },

    addTouchControls() {
      let touchStartX = 0;

      window.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
      });

      window.addEventListener("touchmove", (event) => {
        const touchCurrentX = event.touches[0].clientX;

        if (touchCurrentX < touchStartX) {
          this.moveGround("left");
        } else if (touchCurrentX > touchStartX) {
          this.moveGround("right");
        }

        touchStartX = touchCurrentX;
      });
    },
    adjustGravity(remainingTime) {
      const initialGravity = 5; // Gravité de départ élevée
      const minGravity = 0.1; // Gravité minimale vers la fin du temps

      const timeRatio = remainingTime / this.$props.duration;

      const newGravity = minGravity + timeRatio * (initialGravity - minGravity);

      // Appliquer la nouvelle gravité
      this.engine.world.gravity.y = newGravity;

      console.log("Gravité ajustée à :", newGravity);
    },
  },
};
</script>

<style scoped>
.container {
    overflow:  hidden;
    height: 100vh;
}
</style>
