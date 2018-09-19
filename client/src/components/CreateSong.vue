<template>
  <!-- <v-container fluid> -->
    <v-layout column>
      <app-panel title="Create Song">

        <v-container slot="content">
          <p v-for="song in songs" :key="song.id">
            {{song.title}} - {{song.artist}}
          </p>
        </v-container>

      </app-panel>
    </v-layout>
  <!-- </v-container> -->
</template>

<script>
import SongsService from '@/services/SongsService';
import AppPanel from '@/components/AppPanel.vue';

export default {
  name: 'CreateSong',
  components: {
    AppPanel,
  },
  data() {
    return {
      song: [

      ],
    };
  },
  methods: {
    async createSong() {
      try {
        const response = await SongsService.post();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
