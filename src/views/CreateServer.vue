<template>
  <v-card>
    <v-form>
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
            />
          </v-col>
          <v-col cols="4">
            <v-autocomplete
              label="Game Version"
              :items="GameVersions"
              prepend-inner-icon="mdi-surround-sound-7-1"
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="10">
            <v-text-field
              prepend-inner-icon="mdi-ip"
              label="IP Address"
              :rules="IPAddressRules"
              value="*"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              prepend-inner-icon="mdi-server-network"
              label="Server Port"
              type="number"
              :rules="PortRules"
              value="25565"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-card-title>JVM Settings</v-card-title>
        </v-row>
        <MemoryInput type="Xmx" />
        <MemoryInput type="Xms" />
        <v-row>
          <v-card-title>Properties</v-card-title>
        </v-row>
        <v-text-field
          prepend-inner-icon="mdi-earth"
          label="World Name"
          type="text"
        />
        <v-combobox
          prepend-inner-icon="mdi-gamepad-square-outline"
          label="Gamemode"
          :items="Gamemodes"
          value="Survival"
        />
        <v-combobox
          prepend-inner-icon="mdi-one-up"
          label="Difficulty"
          :items="Difficulty"
          value="Easy"
        />
        <v-text-field
          prepend-inner-icon="mdi-server-network"
          label="Max Players"
          type="number"
          value="20"
        />
        <v-text-field
          prepend-inner-icon="mdi-matrix"
          label="Level Seed"
          type="number"
        />
        <v-slider
          label="View Distance"
          prepend-icon="mdi-eye-outline"
          min="3"
          max="30"
          step="1"
          :tick-labels="ViewDistanceLables"
          value="10"
        />
        <v-text-field
          prepend-inner-icon="mdi-message-text-outline"
          label="Message of the Day"
          type="text"
          value="A Minecraft Server"
        />
        <v-combobox
          prepend-inner-icon="mdi-format-list-bulleted-type"
          label="Level Type"
          :items="LevelTypes"
          value="Default"
        />
        <v-text-field
          prepend-inner-icon="mdi-ruler"
          label="Max Build Height"
          type="number"
          :rules="BuildHeightRules"
          value="256"
        />
        <v-text-field
          prepend-inner-icon="mdi-ruler-square"
          label="Max World Size"
          type="number"
          value="29999984"
        />
        <v-text-field
          prepend-inner-icon="mdi-radius-outline"
          label="Spawn Protection"
          value="16"
          type="number"
        />
        <v-text-field
          prepend-inner-icon="mdi-timer"
          label="Player Idle Time"
          type="number"
          value="0"
        />
        <v-text-field
          prepend-inner-icon="mdi-package-variant-closed"
          label="Resource Pack"
          type="url"
        />
        <v-text-field
          prepend-inner-icon="mdi-package-variant"
          label="Resource SHA1"
        />
        <v-textarea
          v-model="GeneratorSettings"
          label="Generator Settings"
          rows="1"
          prepend-inner-icon="mdi-gantry-crane"
        />
        <v-row>
          <v-col>
            <v-switch
              label="Allow Nether"
              prepend-icon="mdi-fire"
              v-model="AllowNether"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Force Gamemode"
              prepend-icon="mdi-gamepad-square-outline"
              v-model="ForceGamemode"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Hardcore"
              prepend-icon="mdi-sword"
              v-model="Hardcore"
            />
          </v-col>
          <v-col>
            <v-switch
              label="PVP"
              prepend-icon="mdi-sword-cross"
              v-model="PVP"
            s/>
          </v-col>
          <v-col>
            <v-switch
              label="Spawn NPC"
              prepend-icon="mdi-account-group"
              v-model="SpawnNPC"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              label="Spawn Animals"
              prepend-icon="mdi-sheep"
              v-model="SpawnAnimals"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Spawn Monsters"
              prepend-icon="mdi-minecraft"
              v-model="SpawnMonsters"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Generate Structures"
              prepend-icon="mdi-home-city-outline"
              v-model="GenerateStructures"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Enable Command Block"
              prepend-icon="mdi-console"
              v-model="EnableCommandBlock"
            />
          </v-col>
          <v-col>
            <v-switch
              label="Allow Flight"
              prepend-icon="mdi-bee"
              v-model="AllowFlight"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-card-title>Advanced Settings</v-card-title>
        </v-row>
        <v-combobox
          prepend-inner-icon="mdi-gamepad-square-outline"
          label="Operator Permission Level"
          :items="PermissionLevels"
          value="4"
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
        <v-switch
          label="Prevent Proxy Connections"
          prepend-icon="mdi-transit-connection"
          v-model="PreventProxyConnections"
        />
        <v-switch
          label="Online Mode"
          prepend-icon="mdi-security-network"
          v-model="OnlineMode"
        />
        <v-switch
          label="Whitelist"
          prepend-icon="mdi-account"
          v-model="Whitelist"
        />
        <v-switch
          label="Enforce Whitelist"
          prepend-icon="mdi-shield-account"
          v-model="EnforceWhitelist"
        />
        <v-switch
          label="Snooper Enabled"
          prepend-icon="mdi-leak"
          v-model="SnooperEnabled"
        />
        <v-switch
          label="Use Native Transport"
          prepend-icon="mdi-lan"
          v-model="UseNativeTransport"
        />
        <v-switch
          label="Enable Query"
          prepend-icon="mdi-access-point"
          v-model="EnableQuery"
        />
        <v-text-field
          v-if="EnableQuery"
          prepend-inner-icon="mdi-console-network"
          label="Query Port"
          type="number"
          :rules="PortRules"
          value="25565"
        />
        <v-switch
          label="RCON Enabled"
          v-model="RCONEnabled"
          prepend-icon="mdi-access-point-network"
        />
        <v-text-field
          v-if="RCONEnabled"
          prepend-inner-icon="mdi-console-network"
          label="RCON Port"
          type="number"
          :rules="PortRules"
          value="25575"
        />
        <v-text-field
          v-if="RCONEnabled"
          prepend-inner-icon="mdi-textbox-password"
          :append-icon="PasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="PasswordVisible = !PasswordVisible"
          :type="PasswordVisible ? 'text' : 'password'"
          label="RCON Password"
          v-model="RCONPassword"
        />
        <v-card-actions>
          <v-btn color="green" style="color:#fff">Create</v-btn>
          <v-btn text color="red">Cancel</v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import GameVersions from "../game-versions.json";
import MemoryInput from "../components/MemoryInput";

export default {
  components: {
    MemoryInput
  },
  data() {
    return {
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
      Gamemodes: ["Survival", "Creative", "Adventure", "Spectator"],
      GeneratorSettings: "",
      RCONEnabled: false,
      PasswordVisible: false,
      EnableQuery: false,
      EnableCommandBlock: false,
      PreventProxyConnections: false,
      Hardcore: false,
      PVP: true,
      SpawnNPC: true,
      SpawnMonsters: true,
      ForceGamemode: false,
      RCONPassword: "",
      PermissionLevels: [1, 2, 3, 4],
      GenerateStructures: true,
      SpawnAnimals: true,
      SnooperEnabled: true,
      UseNativeTransport: true,
      AllowNether: true,
      AllowFlight: false,
      OnlineMode: true,
      EnforceWhitelist: false,
      Whitelist: false,
      LevelTypes: ["Default", "Flat", "Large Biomes", "Amplified", "Buffet"],
      Difficulty: ["Peaceful", "Easy", "Normal", "Hard"],
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
