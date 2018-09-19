<template>
  <v-toolbar color="indigo" dark fixed app>

  <router-link to="/" tag="v-toolbar-title" id="toolbar">
        TabTracker
      </router-link>

      <v-toolbar-items>
        <v-btn
          to="songs"
          flat
          dark
        >
          Browse
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn"
          to="register"
          flat
          dark
        >
          Sign Up
        </v-btn>
         <v-btn v-if="!$store.state.isUserLoggedIn"
          to="login"
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#toolbar {
  cursor: pointer;
      transition: .3s cubic-bezier(.25,.8,.5,1);
}


</style>
