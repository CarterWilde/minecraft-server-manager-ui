<template>
  <v-row no-gutters>
    <v-col cols="10">
      <v-select
        :label="type"
        prepend-inner-icon="mdi-memory"
        :items="Memorys"
        v-model="Memory"
        @input="$emit('memory-input', Memory)"
      />
    </v-col>
    <v-col cols="2">
      <v-select
        label="Unit"
        :items="MemoryUnits"
        v-model="Unit"
        @input="$emit('unit-input', Unit)"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      Unit: "M",
      Memory: 2048,
      MemoryUnits: ["K", "M", "G"],
      Memorys: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
    };
  }
};
</script>
