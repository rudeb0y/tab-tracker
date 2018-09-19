<template>
  <v-toolbar color="indigo" dark fixed app>

  <router-link to="/" tag="v-toolbar-title" id="toolbar">
        TabTracker
      </router-link>

      <v-toolbar-items>
        <v-btn
          to="/songs"
          flat
          dark
        >
          Browse
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn"
          to="/register"
          flat
          dark
        >
          Sign Up
        </v-btn>
         <v-btn v-if="!$store.state.isUserLoggedIn"
          to="/login"
          flat
          dark
        >
          Login
        </v-btn>
         <v-btn v-if="$store.state.isUserLoggedIn"
          @click="logOut"
          to="/"
          flat
          dark
        >
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>

export default {
  name: 'PageHeader',
  data() {
    return {

    };
  },
  methods: {
    logOut() {
      this.$store.dispatch('setUser', null);
      this.$store.dispatch('setToken', null);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#toolbar {
  cursor: pointer;
}

</style>
