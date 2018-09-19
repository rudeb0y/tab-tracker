<template>
  <v-toolbar color="indigo" dark fixed app>

  <router-link to="/" tag="v-toolbar-title" id="toolbar">
        TabTracker
      </router-link>
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

#toolbar {
  cursor: pointer;
      transition: .3s cubic-bezier(.25,.8,.5,1);
}


</style>
