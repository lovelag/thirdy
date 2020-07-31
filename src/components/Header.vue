<template>
 <v-card
    color="grey lighten-4"
    height="50px"
    tile
    class="headermi"
  >
    <v-toolbar class="cyan">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        
          <span class="home"  @click="navigateTo({name:'root'})">
            Home
          </span>
       
      </v-toolbar-title>
      <v-toolbar-items>
          <v-btn  class="cyan" dark v-if="!$store.state.isUserLoggedIn">
           <router-link  dark to="/Songs">Browse</router-link>
          </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn  class="cyan" dark v-if="!$store.state.isUserLoggedIn">
           <router-link  dark to="/register">Sign up</router-link>
          </v-btn>
          <v-btn  class="cyan" dark v-if="!$store.state.isUserLoggedIn">
           <router-link  dark to="/login">login</router-link>
          </v-btn>
          <v-btn 
          v-if="$store.state.isUserLoggedIn"
          dense dark class="cyan" @click="logout">
            Log out
          </v-btn>
      
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>
 
<script>


export default {
   methods:{
     navigateTo(route){
       this.$router.push(route)
     },
     logout (){
       this.$store.dispatch('setToken',null)
       this.$store.dispatch('setUser',null)
       //redirect homepate
       this.$router.push({
         name:'root'
       })
     }

   }
   
}
</script>

<style lang="scss" scoped>
#nav a{
  color: #fbfefc;
}
#nav a.router-link-exact-active{
  color: #fbfefc;
}
.home {
  cursor:pointer;
 
}
.home:hover{
  color:skyblue;
}
.v-application a{
  text-decoration: none;
}
</style>
