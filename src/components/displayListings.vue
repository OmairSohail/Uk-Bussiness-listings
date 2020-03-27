<template>
  <div class="listings">
      <div class="container">
          <div class="card" style="width: 18rem;" v-for="l in listings.listings" :key="l.id">
                <img class="card-img-top" src="../assets/image-not-found.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{l.bussinessName}}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
         </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import {mapActions} from 'vuex'
export default {
    name:'listings',
    methods:{
        ...mapActions(['setListings'])
    },
    data(){
        return{
          listings:this.$store.state.listings
        }
    },
    mounted(){
   
    },
    created(){  
         const path = firebase.database().ref(`/`) 
         path.on('value', (snapshot) => {
         this.setListings(snapshot.val())
         
       })
      
         
    }
}
</script>

<style>
.listings{
    border:1px lightseagreen solid;
    display:grid;
    grid-template-columns: 30% 30% 30%;
}
</style>