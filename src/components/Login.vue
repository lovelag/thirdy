<template>
<v-container>
  <v-layout column>
    <v-flex class="register">
      <div class="white elevation-2">
        <v-toolbar dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4">
          <v-col class="hreg" cols="12" sm="6" md="12">
          <v-text-field
            label="email"
            outlined
            type="email"
            name="email"
            v-model="email">
          </v-text-field>
        </v-col>
        
         <v-col class="hreg" cols="12" sm="6" md="12">
          <v-text-field
            label="password"
            outlined
            type="password"
            name="password"
            v-model="password">
          </v-text-field>
          </v-col>
       
          <div class="error" v-html="error" />
          <v-btn class="cyan" @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import AuthenticationService from "../services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
      const response =   await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setToken', response.data.user)
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
  /*sample of two data binding in model *
     watch and mounted
    /


    /* watch: {
      email (value) {
        console.log("email value", value);
    }
  },
   mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    },2000)
   } */
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
.register {
  .hreg{
    height: 70px;
  }
}
</style>
