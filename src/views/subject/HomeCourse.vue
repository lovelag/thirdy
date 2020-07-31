<template>
<v-container>
  <v-row>  
    <v-col
        cols="12"
        sm="4"
        md="4"
      >
     <v-card
        class="pa-2"
        outlined
        tile
      >
     <CoursePanel title="Create Songs">
         
     </CoursePanel>
     </v-card>
    </v-col>
    

    <!--Middle-->  
     <v-col
        cols="12"
        sm="4"
        md="4"
      >
     <v-card
        class="pa-2"
        outlined
        tile
      >
     <CoursePanel title="Create Songs">  
     </CoursePanel>
     </v-card>
    </v-col>
    <!---->  
   
    <v-col
        cols="6"
        md="4"
    >
     <v-card
          class="pa-2"
          outlined
          tile
      >  
     <CoursePanel title="Songs Structure">       
     </CoursePanel>
     </v-card>
    </v-col>
    <!----->
  </v-row>

  <!---2ndrow--->
  <v-row>  
    <v-col
        cols="12"
        sm="4"
        md="4"
      >
     <v-card
        class="pa-2"
        outlined
        tile
      >
     <CoursePanel title="Create Songs">
         
     </CoursePanel>
     </v-card>
    </v-col>
    

    <!--Middle-->  
     <v-col
        cols="12"
        sm="4"
        md="4"
      >
     <v-card
        class="pa-2"
        outlined
        tile
      >
     <CoursePanel title="Create Songs">  
     </CoursePanel>
     </v-card>
    </v-col>
    <!---->  
   
    <v-col
        cols="6"
        md="4"
    >
     <v-card
          class="pa-2"
          outlined
          tile
      >  
     <CoursePanel title="Songs Structure">       
     </CoursePanel>
     </v-card>
    </v-col>
    <!----->
  </v-row>

   <!---3rdrow---->
     <v-row>  
    <v-col
        cols="12"
        sm="4"
        md="4"
      >
     <v-card
        class="pa-2 cpoint"
        outlined
        tile
      >
     <CoursePanel title="Create Songs">
         
     </CoursePanel>
     </v-card>
    </v-col>
    

    <!--Middle-->  
     <v-col
        cols="12"
        sm="4"
        md="4"
      >
     <v-card
        class="pa-2 cpoint"
        outlined
        tile
      >
     <CoursePanel title="Create Songs">  
     </CoursePanel>
     </v-card>
    </v-col>
    <!---->  
   
    <v-col
        cols="6"
        md="4"
    >
     <v-card
          class="pa-2 cpoint"
          outlined
          tile
      >  
     <CoursePanel title="Songs Structure">       
     </CoursePanel>
     </v-card>
    </v-col>
    <!----->
  </v-row>

</v-container>
  
</template>

<script>
// @ is an alias to /src
/* const API_URL = 'http://localhost:4000/api/users/allusers'; */
import CoursePanel from "../subject/CoursePanel";
import SongService from '../../services/SongService';

export default {
  data () {
      return{
          song:{
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageURL: null,
                youtubeId:null,
                lyrics:null,
                tab:null
            },
            rules:{
              required: (value) => !!value || 'Required.'
            },
            error:null
      }
  },
  components:{
      CoursePanel
  },
  methods:{
    async create(){
       this.error = null
       const areAllFieldsFilledin = Object.keys(this.song)
       .every(key => !!this.song[key])
       if(!areAllFieldsFilledin){
         this.error = 'Please fill in all the required'
         return
       }
        try{
         await SongService.post(this.song)
         this.$router.push({
             name:'songs'
         })
      }catch (err){
          console.log(err)
      }
    }
  }
};
</script>
<style>
hr {
  border-top: 1px solid white;
}
img {
  max-width: 300px;
  height: auto;
}
.cpoint{
  cursor: pointer;
}
</style>
