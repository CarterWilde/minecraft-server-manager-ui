<template>
  <div>
    <v-app-bar elevate-on-scroll app>
      <v-badge overlap dot color="green" class="ma-2">
        <v-icon>mdi-desktop-classic</v-icon>
      </v-badge>
      {{ this.CurrentServer.name }}
    </v-app-bar>
    <v-expansion-panels multiple hover tile>
      <ServerConsole :Server="this.CurrentServer" />
      <v-expansion-panel>
        <ServerProperties />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import ServerConsole from "@/components/ServerConsole";
import ServerProperties from "@/components/ServerProperties";
import axios from "axios";

const getServerData = async ServerID => {
  let res = await axios.get(
    `${process.env.VUE_APP_API_URL}/Servers/${ServerID}`
  );
  return res.data;
};

export default {
  components: {
    ServerConsole,
    ServerProperties
  },
  async created() {
    this.CurrentServerID = this.$route.params.name;
    this.CurrentServer = await getServerData(this.CurrentServerID);
  },
  data() {
    return {
      collapseOnScroll: true,
      CurrentServerID: "",
      CurrentServer: {}
    };
  },
  async beforeRouteUpdate(to, from, next) {
    this.CurrentServerID = to.params.name;
    this.CurrentServer = await getServerData(this.CurrentServerID);
    next();
  }
};
</script>
