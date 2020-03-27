<template>
  <div class="navbar">
     <header>
         <div class="container">
             <div class="image">
               <img src="https://www.uk-businesses.co.uk/files/upload/logouk.jpg" alt="">
             </div>
               <div class="search">
                    <input type="text" placeholder="">
                    <input type="text">
                    <button>Search</button>
               </div>
         </div>
     <!-- navigation -->
<!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login" v-if="!isLoggedIn">Add your Bussiness</router-link>
      </li>
      <li class="nav-item">
       <router-link class="nav-link" to="/addbussiness" v-if="isLoggedIn">Add your Bussiness</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/">Request Quotes From Bussiness</router-link>
      </li>
       <li class="nav-item">
         <router-link class="nav-link" to="/">FAQ</router-link>
      </li>
       <li class="nav-item">
         <router-link class="nav-link" to="/">Contact Us</router-link>
      </li>
    </ul>
  </div>
</nav> -->
         <nav>
            <div class="nav-link-1">
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/login" v-if="!isLoggedIn">Add your Bussiness</router-link>
                <router-link class="link" to="/addbussiness" v-if="isLoggedIn">Add your Bussiness</router-link>
                <router-link class="link" to="/">Request Quotes From Bussiness</router-link>
                <router-link class="link" to="/faq">FAQ</router-link>
                <router-link class="link" to="/contact">Contact Us</router-link>
            </div>

            <div class="nav-link-2" v-if="this.isLoggedIn == false">
                 <router-link class="link" to="/login">Login</router-link>
                 <router-link class="link" to="/signup">SignUp</router-link>
            </div>

            <div class="nav-link-2" v-if="this.isLoggedIn == true">
                 <!-- <h3>{{this.store.state.user.email}}</h3> -->
                 <button @click="logout">Logout</button>
            </div>

         </nav>
     </header>
  </div>
</template>

<script>
import firebase from 'firebase'
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
export default {
  name: 'navbar',
  data(){
     return{
       isLoggedIn:false,
     }
  },
  created(){
      firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            this.isLoggedIn = true
          }else{
            this.isLoggedIn = false
          }
      })
  },
  methods: {
    ...mapActions(['removeUser']),
    logout: function () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.auth().signOut().then(() => {
            this.removeUser()
            Swal.fire(
              'Good job!',
              'User Has Been LoggedOut',
              'success'
            ).then(this.$route.push('/login'))
          })
        }
      })
    }
  }
}
</script>

<style scoped>
header{
    width:100%;
}

header .container{
    width:80%;
    margin:0 auto;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

nav{
    width:100%;
    height:3rem;
    background-color:black;
    color:white;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

nav .link{
    text-decoration: none;
    color:white;
    padding:1rem 2rem;
    cursor:pointer;
}

nav .link:hover{
    background-color:gray;
}
</style>
