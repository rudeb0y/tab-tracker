<template>
  <v-layout column>
    <app-panel title="Register">

      <!-- <v-toolbar-items slot="toolbar-left">
        <v-btn class="indigo" flat>Hello</v-btn>
      </v-toolbar-items>

      <v-toolbar-items slot="toolbar-right">
        <v-btn class="indigo" flat dark></v-btn>
      </v-toolbar-items> -->
        <v-container slot="content">
        <form>
          <v-flex><v-text-field
          label="Email"
          v-model="email"
        ></v-text-field></v-flex>
          <br>
        <v-flex><v-text-field
          label="Password"
          v-model="password"
          type="password"
        ></v-text-field></v-flex>
        </form>
        <br>
        <div class="red darken-4" v-html="error" />
        <br>
        <v-btn class="indigo" dark @click="register">Register</v-btn>
       </v-container>
       </app-panel>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import AppPanel from '@/components/AppPanel.vue';

export default {
  name: 'Register',
  components: {
    AppPanel,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });

        this.error = null;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
