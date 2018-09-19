<template>
  <!-- <v-container fluid> -->
    <v-layout column>
      <app-panel title="Songs">

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
  name: 'Songs',
  components: {
    AppPanel,
  },
  data() {
    return {
      songs: null,
    };
  },
  methods: {
    async getSongs() {
      try {
        const response = await SongsService.index();
        this.songs = response.data.songs;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  mounted() {
    this.getSongs();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
