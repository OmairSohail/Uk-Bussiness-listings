import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAf3fq4QVw-7b2DqBlIU6I8EMnI36MoH10",
  authDomain: "bussiness-listing.firebaseapp.com",
  databaseURL: "https://bussiness-listing.firebaseio.com",
  projectId: "bussiness-listing",
  storageBucket: "bussiness-listing.appspot.com",
  messagingSenderId: "430923014628",
  appId: "1:430923014628:web:3e408331afbf5e50ca67f1",
  measurementId: "G-1P85EZC2XS"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user)=>{
   if(user){

    const userData = {
      id:user.uid,
      email:user.email,
      name:user.displayName
    }
     
     store.dispatch('createUser',userData)   
   }
})

Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
