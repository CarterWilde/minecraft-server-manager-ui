<template>
  <v-navigation-drawer
    v-model="drawer"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    app
  >
    <v-list nav>
      <v-list-item two-line :class="miniVariant && 'px-0'">
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

      <v-list-item v-for="server in json.Servers" :key="server.name" link>
        <v-list-item-icon>
          <v-icon>mdi-desktop-classic</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ server.Name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/create" link>
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
import jsonF from "../test-server-config.json";

export default {
  data: () => ({
    expandOnHover: true,
    drawer: true,
    miniVariant: true,
    json: jsonF
  })
};
</script>
