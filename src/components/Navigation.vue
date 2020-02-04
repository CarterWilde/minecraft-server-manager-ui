<template>
  <v-navigation-drawer
    v-model="drawer"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    app
  >
    <v-list nav>
      <v-list-item two-line :class="miniVariant && 'px-0'" link to="/">
        <v-list-item-avatar>
          <img
            src="https://www.gravatar.com/avatar/3428d1ed22dd56c4198fcacc46f64b0d"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            Carter Wilde
          </v-list-item-title>
          <v-list-item-subtitle>
            Minecraft Server Manager
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        v-for="server in Servers"
        :key="server.name"
        link
        :to="`/Servers/${server.name}`"
      >
        <v-list-item-icon>
          <v-badge overlap dot color="green">
            <v-icon>mdi-desktop-classic</v-icon>
          </v-badge>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ server.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link to="/Servers/CreateServer">
        <v-list-item-icon>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Create New Server</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    let res = await axios.get(`${process.env.VUE_APP_API_URL}/Servers`);
    this.Servers = res.data;
    setInterval(async () => {
      let res = await axios.get(`${process.env.VUE_APP_API_URL}/Servers`);
      this.Servers = res.data;
    }, 5000);
  },
  data: () => ({
    expandOnHover: true,
    drawer: true,
    miniVariant: true,
    Servers: []
  })
};
</script>
