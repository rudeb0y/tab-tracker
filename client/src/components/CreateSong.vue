<template>
  <!-- <v-container fluid> -->
    <v-layout>
      <v-flex xs4>
        <app-panel title="Create Song">
          <v-container slot="content">
            <!-- <form> -->
              <v-flex>
                <v-text-field
                  label="Title"
                  v-model="song.title"
                ></v-text-field>
              </v-flex>
              <br>
              <v-flex>
                <v-text-field
                  label="Artist"
                  v-model="song.artist"
                ></v-text-field>
              </v-flex>
              <br>
              <v-flex>
                <v-text-field
                  label="Genre"
                  v-model="song.genre"
                ></v-text-field>
              </v-flex>
              <br>
              <v-flex>
                <v-text-field
                  label="Album"
                  v-model="song.album"
                ></v-text-field>
              </v-flex>
              <br>
              <v-flex>
                <v-text-field
                  label="Album Image URL"
                  v-model="song.albumImageUrl"
                ></v-text-field>
              </v-flex>
              <br>
              <v-flex>
                <v-text-field
                  label="YouTube ID"
                  v-model="song.youtubeId"
                ></v-text-field>
              </v-flex>

              <!-- </form> -->
          </v-container>
        </app-panel>
      </v-flex>
      <v-flex xs8>
        <app-panel title="Something else" class="pl-2">
          <v-container slot="content">
            <v-flex>
              <v-textarea
                label="Lyrics"
                v-model="song.lyrics"
              ></v-textarea>
            </v-flex>
            <v-flex>
              <v-textarea
                label="Tab"
                v-model="song.tab"
              ></v-textarea>
            </v-flex>
            <v-btn
              class="indigo" dark
              @click="createSong"
            >Create Song
            </v-btn>
          </v-container>
        </app-panel>
        <v-container
          ml-2 mt-2 mr-4 mb-2
          v-html="error"
          class="red lighten-4"
          v-if="error"
        />
      </v-flex>
    </v-layout>
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
      error: 'dwadwadawdwa',
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
    };
  },
  methods: {
    async createSong() {
      try {
        await SongsService.post();
        this.song = null;
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
