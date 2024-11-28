<template>
  <v-app id="app">
    <AppHeader />
    
    <!-- game image - banner -->
    <v-parallax src="/assets/Capture_2.png" scale="0.5"></v-parallax>

    <About />
    
    <v-container id="projects">
      <div class="title-container">
        <span class="title">Projects</span>
  
        <v-divider opacity="1"></v-divider>
      </div>
      
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </v-container>
    
    <Contact />

    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import About from "../components/About.vue";
import Project from "../components/Project.vue";
import Contact from "../components/Contact.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    About,
    Project,
    Contact,
    AppFooter
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          nameId: 'aForestAdventure',
          title: "A Forest Adventure (Unity C#)",
          description: 
            "A Forest Adventure is a 2D platformer game developed in Unity, set in an enchanting and mysterious forest. The player takes control of a brave character who can perform super jumps and destroy enemies by jumping on them. *Development of the game and level design using Unity. *Programming the game logic in C#: -Prototyping of the 3Cs (Camera / Controls / Character). -Implementation of character physics. -Design of interactions with the environment. -Programming of enemies and their respective interactions with the character and the environment. -Implementation of procedural generation techniques to create dynamic and unique levels, ensuring a new experience in each game. *Creation of intuitive and visually engaging user interfaces for the game's menus, enhancing the user experience by making navigation and access to game features smooth and enjoyable. *Video editing with ShotCut. *Sound effects editing with Audacity. *Repository: https://github.com/anabeatrizmartinez/AForestAdventure *Play free: https://anabeatrizmartinez.itch.io/a-forest-adventure",
          gameplayLink: 'https://www.youtube.com/embed/GhqSUtPUEpM',
          captures: [
            {
              id: 1,
              src: '/assets/Capture_1.png'
            },
            {
              id: 2,
              src: '/assets/Capture_2.png'
            },
            {
              id: 3,
              src: '/assets/Capture_3.png'
            },
            {
              id: 4,
              src: '/assets/Capture_4.png'
            },
            {
              id: 5,
              src: '/assets/Capture_5.png'
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
@media only screen and (min-width: 1200px) {
  .v-parallax {
    height: 39vw;
  }
}

@media only screen and (max-width: 1200px) {
  .v-parallax {
    height: 49vw;
  }
}

@media only screen and (max-width: 960px) {
  .v-parallax {
    height: 55vh;
  }
}

@media only screen and (max-width: 850px) {
  .v-parallax {
    height: 65vh;
  }
}

@media only screen and (max-width: 650px) {
  .v-parallax {
    height: 75vh;
  }
}
</style>
