<template>
  <v-layout column>
    <app-panel title="Login">

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
      <v-container v-html="error" class="red lighten-4" v-if="error" />
      <br>
      <v-btn class="indigo" dark
        @click="login"
      >Login
      </v-btn>
    </v-container>
    </app-panel>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import AppPanel from '@/components/AppPanel.vue';

export default {
  name: 'Login',
  components: {
    AppPanel,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.error = null;
        this.$router.push({ name: 'home' });
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
