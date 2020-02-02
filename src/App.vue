<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>
