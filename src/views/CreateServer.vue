<template>
  <v-card>
    <v-form @submit.prevent="CreateServer" v-model="valid" ref="form">
      <v-container>
        <v-row>
          <v-card-title>
            <v-icon>mdi-desktop-classic</v-icon>
            Create Server
          </v-card-title>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-text-field
              label="Server Name"
              prepend-inner-icon="mdi-textbox"
              counter="24"
              v-model="model.main.ServerName"
            />
          </v-col>
          <v-col cols="4">
            <v-autocomplete
              label="Game Version"
              :items="GameVersions"
              prepend-inner-icon="mdi-surround-sound-7-1"
              v-model="model.main.GameVersion"
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="10">
            <v-text-field
              prepend-inner-icon="mdi-ip"
              label="IP Address"
              :rules="IPAddressRules"
              v-model="model.main.IPAddress"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              prepend-inner-icon="mdi-server-network"
              label="Server Port"
              type="number"
              :rules="PortRules"
              v-model="model.main.ServerPort"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-card-title>
            <v-icon>mdi-settings-outline</v-icon>
            Properties
          </v-card-title>
        </v-row>
        <v-text-field
          prepend-inner-icon="mdi-earth"
          label="World Name"
          type="text"
          v-model="model.properties.WorldName"
        />
        <v-combobox
          prepend-inner-icon="mdi-gamepad-square-outline"
          label="Gamemode"
          :items="Gamemodes"
          v-model="model.properties.Gamemode"
        />
        <v-combobox
          prepend-inner-icon="mdi-one-up"
          label="Difficulty"
          :items="Difficulty"
          v-model="model.properties.Difficulty"
        />
        <v-text-field
          prepend-inner-icon="mdi-server-network"
          label="Max Players"
          type="number"
          v-model="model.properties.MaxPlayers"
        />
        <v-text-field
          prepend-inner-icon="mdi-matrix"
          label="Level Seed"
          type="number"
          v-model="model.properties.LevelSeed"
        />
        <v-slider
          label="View Distance"
          prepend-icon="mdi-eye-outline"
          min="3"
          max="30"
          step="1"
          :tick-labels="ViewDistanceLables"
          v-model="model.properties.ViewDistance"
        />
        <v-text-field
          prepend-inner-icon="mdi-message-text-outline"
          label="Message of the Day"
          type="text"
          v-model="model.properties.MOTD"
        />
        <v-combobox
          prepend-inner-icon="mdi-format-list-bulleted-type"
          label="Level Type"
          :items="LevelTypes"
          v-model="model.properties.LevelType"
        />
        <v-text-field
          prepend-inner-icon="mdi-ruler"
          label="Max Build Height"
          type="number"
          :rules="BuildHeightRules"
          v-model="model.properties.MaxBuildHeight"
        />
        <v-text-field
          prepend-inner-icon="mdi-ruler-square"
          label="Max World Size"
          type="number"
          v-model="model.properties.MaxWorldSize"
        />
        <v-text-field
          prepend-inner-icon="mdi-radius-outline"
          label="Spawn Protection"
          type="number"
          v-model="model.properties.SpawnProtection"
        />
        <v-text-field
          prepend-inner-icon="mdi-timer"
          label="Player Idle Time"
          type="number"
          v-model="model.properties.PlayerIdleTime"
        />
        <v-text-field
          prepend-inner-icon="mdi-package-variant-closed"
          label="Resource Pack"
          type="url"
          v-model="model.properties.ResourcePack"
        />
        <v-text-field
          prepend-inner-icon="mdi-package-variant"
          label="Resource SHA1"
          v-model="model.properties.ResourcePackSHA1"
        />
        <v-textarea
          label="Generator Settings"
          rows="1"
          prepend-inner-icon="mdi-gantry-crane"
          v-model="model.properties.GeneratorSettings"
        />
        <v-row>
          <v-col>
            <v-switch
              label="Allow Nether"
              prepend-icon="mdi-fire"
              v-model="model.properties.AllowNether"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Force Gamemode"
              prepend-icon="mdi-gamepad-square-outline"
              v-model="model.properties.ForceGamemode"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Hardcore"
              prepend-icon="mdi-sword"
              v-model="model.properties.Hardcore"
            />
          </v-col>
          <v-col>
            <v-switch
              label="PVP"
              prepend-icon="mdi-sword-cross"
              v-model="model.properties.PVP"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Spawn NPC"
              prepend-icon="mdi-account-group"
              v-model="model.properties.SpawnNPC"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              label="Spawn Animals"
              prepend-icon="mdi-sheep"
              v-model="model.properties.SpawnAnimals"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Spawn Monsters"
              prepend-icon="mdi-minecraft"
              v-model="model.properties.SpawnMonsters"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Generate Structures"
              prepend-icon="mdi-home-city-outline"
              v-model="model.properties.GenerateStructures"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Enable Command Block"
              prepend-icon="mdi-console"
              v-model="model.properties.EnableCommandBlock"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Allow Flight"
              prepend-icon="mdi-bee"
              v-model="model.properties.AllowFlight"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-card-title>
            <v-icon>mdi-database-settings</v-icon>
            Advanced Settings
          </v-card-title>
        </v-row>
        <v-combobox
          prepend-inner-icon="mdi-gamepad-square-outline"
          label="Operator Permission Level"
          :items="PermissionLevels"
          v-model="model.properties.PermissionLevel"
        />
        <v-combobox
          prepend-inner-icon="mdi-code-braces"
          label="Function Permission Level"
          :items="PermissionLevels"
          value="4"
        />
        <v-text-field
          type="number"
          label="Network Compression Threshold"
          prepend-inner-icon="mdi-download-network-outline"
          value="256"
        />
        <v-text-field
          type="number"
          label="Max Tick Time"
          prepend-inner-icon="mdi-clock"
          value="60000"
        />
        <v-row>
          <v-col>
            <v-switch
              label="Prevent Proxy Connections"
              prepend-icon="mdi-transit-connection"
              v-model="model.properties.PreventProxyConnections"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Whitelist"
              prepend-icon="mdi-account"
              v-model="model.properties.Whitelist"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Enforce Whitelist"
              prepend-icon="mdi-shield-account"
              v-model="model.properties.EnforceWhitelist"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              label="Online Mode"
              prepend-icon="mdi-security-network"
              v-model="model.properties.OnlineMode"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Snooper Enabled"
              prepend-icon="mdi-leak"
              v-model="model.properties.SnooperEnabled"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Use Native Transport"
              prepend-icon="mdi-lan"
              v-model="model.properties.UseNativeTransport"
            />
          </v-col>
        </v-row>
        <v-switch
          label="Enable Query"
          prepend-icon="mdi-access-point"
          v-model="model.properties.EnableQuery"
        />
        <v-text-field
          v-if="model.properties.EnableQuery"
          prepend-inner-icon="mdi-console-network"
          label="Query Port"
          type="number"
          :rules="PortRules"
          v-model="model.properties.QueryPort"
        />
        <v-switch
          label="RCON Enabled"
          prepend-icon="mdi-access-point-network"
          v-model="model.properties.RCONEnabled"
        />
        <v-text-field
          v-if="model.properties.RCONEnabled"
          prepend-inner-icon="mdi-console-network"
          label="RCON Port"
          type="number"
          :rules="PortRules"
          v-model="model.properties.RCONPort"
        />
        <v-text-field
          v-if="model.properties.RCONEnabled"
          prepend-inner-icon="mdi-textbox-password"
          :append-icon="PasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="PasswordVisible = !PasswordVisible"
          :type="PasswordVisible ? 'text' : 'password'"
          label="RCON Password"
          v-model="model.properties.RCONPassword"
        />
        <v-row>
          <v-card-title>JVM Settings</v-card-title>
        </v-row>
        <MemoryInput
          type="Xmx"
          @memory-input="OnXmxMemoryInput"
          @unit-input="OnXmxUnitInput"
        />
        <MemoryInput
          type="Xms"
          @memory-input="OnXmsMemoryInput"
          @unit-input="OnXmsUnitInput"
        />
        <v-card-actions>
          <v-btn
            :disabled="!valid"
            color="success"
            type="submit"
            @click="validate"
            >Create</v-btn
          >
          <v-btn text color="error">Cancel</v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import GameVersions from "../game-versions.json";
import MemoryInput from "../components/MemoryInput";
import axios from "axios";

export default {
  components: {
    MemoryInput
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async CreateServer() {
      if (this.$refs.form.validate()) {
        let payload = {
          "Name": this.model.main.ServerName,
          "GameVersion": this.model.main.GameVersion,
          "ServerURL": "https://launcher.mojang.com/v1/objects/3dc3d84a581f14691199cf6831b71ed1296a9fdf/server.jar",
          "OutputFile": "output.stream.log",
          "VMProperties": {
            "Xmx": `${this.model.JVMSettings.XmxMemory}${this.model.JVMSettings.XmxUnit}`,
            "Xms": `${this.model.JVMSettings.XmsMemory}${this.model.JVMSettings.XmsUnit}`,
            "jar": "true",
            "nogui": "true"
          },
          "Properties":{
            "op-permission-level": this.model.properties.PermissionLevel,
            "allow-nether": this.model.properties.AllowNether,
            "level-name": this.model.properties.WorldName,
            "enable-query": this.model.properties.EnableQuery,
            "allow-flight": this.model.properties.AllowFlight,
            "announce-player-achievements": "true",
            "server-port": this.model.main.ServerPort,
            "enable-rcon": this.model.properties.RCONEnabled,
            "force-gamemode": this.model.properties.ForceGamemode,
            "max-build-height": this.model.properties.MaxBuildHeight,
            "spawn-npcs": this.model.properties.SpawnNPC,
            "white-list": this.model.properties.Whitelist,
            "spawn-animals": this.model.properties.SpawnAnimals,
            "hardcore": this.model.properties.Hardcore,
            "snooper-enabled": this.model.properties.SnooperEnabled,
            "online-mode": this.model.properties.OnlineMode,
            "pvp": this.model.properties.PVP,
            "difficulty": this.model.properties.Difficulty,
            "enable-command-block": this.model.properties.EnableCommandBlock,
            "gamemode": this.model.properties.Gamemode,
            "player-idle-timeout": this.model.properties.PlayerIdleTime,
            "max-players": this.model.properties.MaxPlayers,
            "spawn-monsters": this.model.properties.SpawnMonsters,
            "generate-structures": this.model.properties.GenerateStructures,
            "view-distance": this.model.properties.ViewDistance,
            "spawn-protection": this.model.properties.SpawnProtection,
            "motd": this.model.properties.MOTD
          }
        };
        console.log(payload);
        axios.post();
      }
    },
    OnXmxMemoryInput(data) {
      this.model.JVMSettings.XmxMemory = data;
    },
    OnXmxUnitInput(data) {
      this.model.JVMSettings.XmxUnit = data;
    },
    OnXmsMemoryInput(data) {
      this.model.JVMSettings.XmsMemory = data;
    },
    OnXmsUnitInput(data) {
      this.model.JVMSettings.XmsUnit = data;
    }
  },
  data() {
    return {
      valid: true,
      GameVersions: GameVersions.versions.map(item => {
        return item.id;
      }),
      BuildHeightRules: [num => (num > 0 ? true : "Must be larger than 0")],
      IPAddressRules: [
        address => {
          let regx = RegExp(
            "(([2]([0-4][0-9]|[5][0-5])|[0-1]?[0-9]?[0-9])[.]){3}(([2]([0-4][0-9]|[5][0-5])|[0-1]?[0-9]?[0-9]))"
          );
          return regx.test(address) || address === "*";
        }
      ],
      PortRules: [
        num => (num > 1 && num < 49151 ? true : "Must be a valid port")
      ],
      model: {
        main: {
          ServerName: "",
          GameVersion: "",
          IPAddress: "*",
          ServerPort: "25565"
        },
        JVMSettings: {
          XmxMemory: 2048,
          XmxUnit: "M",
          XmsMemory: 2048,
          XmsUnit: "M"
        },
        properties: {
          WorldName: "",
          Gamemode: "Survival",
          Difficulty: "Easy",
          MaxPlayers: 20,
          LevelSeed: "",
          ViewDistance: 10,
          MOTD: "A Minecraft Server",
          LevelType: "Default",
          MaxBuildHeight: 256,
          MaxWorldSize: 29999984,
          SpawnProtection: 16,
          PlayerIdleTime: 0,
          ResourcePack: "",
          ResourcePackSHA1: "",
          GeneratorSettings: "",
          AllowNether: true,
          ForceGamemode: false,
          Hardcore: false,
          PVP: true,
          SpawnNPC: true,
          SpawnAnimals: true,
          SpawnMonsters: true,
          GenerateStructures: true,
          EnableCommandBlock: false,
          AllowFlight: false,
          PreventProxyConnections: false,
          Whitelist: false,
          EnforceWhitelist: false,
          OnlineMode: true,
          SnooperEnabled: true,
          UseNativeTransport: true,
          EnableQuery: false,
          QueryPort: 25565,
          RCONEnabled: false,
          RCONPort: 25575,
          RCONPassword: "",
          PermissionLevel: 4
        }
      },
      PasswordVisible: false,
      Gamemodes: ["Survival", "Creative", "Adventure", "Spectator"],
      LevelTypes: ["Default", "Flat", "Large Biomes", "Amplified", "Buffet"],
      Difficulty: ["Peaceful", "Easy", "Normal", "Hard"],
      PermissionLevels: [1, 2, 3, 4],
      ViewDistanceLables: [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        28,
        29,
        30,
        31,
        32
      ]
    };
  }
};
</script>
