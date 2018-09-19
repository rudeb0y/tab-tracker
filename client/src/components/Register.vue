<template>
  <v-layout column>
    <v-flex xs12 sm6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="indigo" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
       <div class="pl-4 pr-4 pt-2 pb-2">
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
       </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'HelloWorld',
  data() {
    return {
      email: '',
      password: '',
      error: null,
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
