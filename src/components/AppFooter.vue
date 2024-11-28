<template>
  <v-container id="footer">
    <div class="footer-text-container">
      <p>Copyright © {{ new Date().getFullYear() }} Ana Beatriz Martinez. All Rights Reserved.</p>
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
    // 
  }
};
</script>

<style scoped>
#footer {
  padding: 0;
  background-color: var(--link-hover-color);
}

.footer-text-container {
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center
}
</style>