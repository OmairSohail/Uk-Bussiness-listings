<template>
  <div class="listings">
      
          <div class="card" style="width: 18rem;" v-for="l in listings" :key="l.bussinessName">
                <img class="card-img-top" src="../assets/image-not-found.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{l.bussinessName}}</h5>
                    <p class="card-text">{{l.description}}
                        <br>
                         <p>{{l.email}}</p>
                         <p>{{l.postedAt}}</p>
                    </p>
                   
                    <a href="#" class="btn btn-primary">Learn More..</a>
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
          listings:this.$store.state.listings,
        }
    },
    mounted(){
         const path = firebase.database().ref(`listings/standard`) 
         path.on('value', (snapshot) => {    
         this.setListings(snapshot.val())    
       })
      
         const fil = this.$store.state.listings;
         console.log(fil.listings)
    }
}
</script>

<style>
.listings{
    border:1px lightseagreen solid;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    padding:1rem;
}
</style>