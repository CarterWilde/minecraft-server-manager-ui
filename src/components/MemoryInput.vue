<template>
  <v-row no-gutters>
    <v-col cols="10">
      <v-select :label="type" prepend-inner-icon="mdi-memory" :items="Memory" />
    </v-col>
    <v-col cols="2">
      <v-select label="Unit" :items="MemoryUnits" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      MemoryUnits: ["K", "M", "G"],
      Memory: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
    };
  }
};
</script>
