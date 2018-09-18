<template>
  <v-toolbar color="indigo" dark fixed app>

  <v-toolbar-title >
        TabTracker
      </v-toolbar-title>
      <!-- TODO - implement me -->
      <!-- <v-toolbar-items>
        <v-btn flat dark>
          Browse
        </v-btn>
      </v-toolbar-items>
    -->
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to="register" flat dark>
          Sign Up
        </v-btn>
         <v-btn to="login" flat dark>
          Login
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

</style>
