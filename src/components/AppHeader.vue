<template>
  <v-container id="header">
    <v-app-bar color="transparent" flat class="vAppBar" absolute>
      <v-toolbar-title>
        <span class="toolbar-title__placeholder">{{ title }}</span>
      </v-toolbar-title>
      
      <!-- For small screens -->
      <div class="hidden-md-and-up">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-menu" v-bind="props" id="menuButton"></v-btn>
          </template>

          <v-list id="menuList">
            <v-list-item>
              <v-btn @click="scroll('about')" prepend-icon="mdi-account" class="menuList-button">About</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="scroll('projects')" prepend-icon="mdi-heart" class="menuList-button">Projects</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="openResume" prepend-icon="mdi-file-account" class="menuList-button">Résumé</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="scroll('contact')" prepend-icon="mdi-email" class="menuList-button">Contact</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- For big screens -->
      <div class="hidden-sm-and-down">
        <v-btn @click="scroll('about')" prepend-icon="mdi-account">About</v-btn>
        <v-btn @click="scroll('projects')" prepend-icon="mdi-heart">Projects</v-btn>
        <v-btn @click="openResume" prepend-icon="mdi-file-account">Résumé</v-btn>
        <v-btn @click="scroll('contact')" prepend-icon="mdi-email">Contact</v-btn>
      </div>
    </v-app-bar>
  </v-container>

  <v-divider opacity="0.7"></v-divider>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Ana Beatriz Martinez",
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
#header {
  padding: 0;
}

.vAppBar {
  padding: 10px 8%;
}

.v-toolbar-title {
  font-size: 1.8rem;
}

.toolbar-title__placeholder {
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}

#menuList {
  background-color: var(--background-color);
  padding: 0;
}

#menuButton {
  font-size: 1.8rem;
}

.v-list-item {
  padding: 0 !important;
  width: 140px;
}

.menuList-button {
  display: flex;
  justify-content: flex-start;
}

.v-divider {
  position: relative;
  top: 84px;
  z-index: 1;
}
</style>