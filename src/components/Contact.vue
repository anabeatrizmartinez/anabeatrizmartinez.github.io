<template>
  <v-container id="contact">
    <div class="title-container">
      <span class="title">{{ title }}</span>
  
      <v-divider opacity="1"></v-divider>
    </div>

    <div class="description-container">
      <p>Feel free to contact me here:</p>

      <v-list>
        <v-list-item>
          <v-icon>mdi-email</v-icon>
          Email: 
          <a class="link-contact" href="mailto:anamartinez.developer@gmail.com">anamartinez.developer@gmail.com</a>
        </v-list-item>

        <v-list-item>
          <v-icon>mdi-linkedin</v-icon>
          LinkedIn: 
          <a class="link-contact" href="https://www.linkedin.com/in/anabeatrizmartinez/" target="_blank">linkedin.com/in/anabeatrizmartinez</a>
        </v-list-item>

        <v-list-item>
          <v-icon>mdi-github</v-icon>
          GitHub: 
          <a class="link-contact" href="https://github.com/anabeatrizmartinez" target="_blank">github.com/anabeatrizmartinez</a>
        </v-list-item>

        <v-list-item>
          <div class="v-list-item__content">
            <v-img src="/assets/itch-io-white.png" class="custom-icon"></v-img>
            <span>itch.io profile: </span>
            <a class="custom-icon-link" href="https://anabeatrizmartinez.itch.io/" target="_blank">anabeatrizmartinez.itch.io</a>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Contact",
    };
  },
};
</script>

<style scoped>
.custom-icon-link {
  margin-left: 5px;
}
</style>