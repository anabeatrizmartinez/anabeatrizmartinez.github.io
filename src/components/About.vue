<template>
  <v-container id="about">
    <span class="title-about">About Me</span>
    
    <div class="description-container">
      <p> Hi! My name is Ana Beatriz, and welcome to my portfolio. I'm a Game Programmer and Fronted Developer. Here, you'll find the projects I've worked on and my <a @click="openResume">résumé</a>.</p>
  
      <br>
  
      <p>Currently, I'm working as a Full-stack Developer while enhancing my skills in game programming. I've published a 2D platformer game developed in Unity, <a @click="scroll('aForestAdventure')">A Forest Adventure</a>, and now I'm using Unreal Engine. My journey began with developing PWAs and mobile applications for various companies. I like a good challenge and always strive to create immersive and enjoyable gaming experiences, as well as applications with a great user experience. I'm known for my responsibility, dedication, and ability to work well in teams.</p>
      
      <br>
      
      <p>I hold an Advanced Technician, University Level, in Maintenance of Software Systems, and a degree in Civil Engineering.</p>

      <br>

      <p>Feel free to reach out to discuss job opportunities or any questions you may have about my work 
        <a @click="scroll('contact')">here</a>.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  methods: {
    scroll(refName) {
      const el = document.getElementById(refName);
      el.scrollIntoView({behavior: 'smooth'});
    },

    openResume() {
      const pdfUrl = 'https://drive.google.com/file/d/1p-7rkaFXnRTUt1cHDL3Q9FLCmYS0dz7m/view?usp=drive_link';
      window.open(pdfUrl, '_blank');
    }
  }
};
</script>

<style scoped>
#about {
  padding: 0;
}

.title-about {
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  background-color: var(--link-hover-color);
  margin-bottom: 20px;
}
</style>