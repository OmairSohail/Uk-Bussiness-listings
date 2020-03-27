<template>
  <div class="loginform">
     <form @submit.prevent>
         <div>
             <label for="email">Email:</label>
             <input type="email" name="email" placeholder="Enter Your Email ..." v-model="email">
         </div>

        <div>
           <label for="password">Password:</label>
           <input type="password" name="password" placeholder="Enter Your Password..." v-model="password">
        </div>

        <div>
           <label for="remember">Remember me ?</label>
           <input type="checkbox" name="remember">
        </div>

        <div>
            <router-link to="/forgotpassword">Forgot Password ?</router-link>
        </div>
        <div>
            <button @click="login()">Login</button>
        </div>
     </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import firebase from 'firebase'

export default {
  name: 'loginform',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {  
    login () {
      if (this.email == '' && this.password == '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      } else {
        firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            Swal.fire(
              'Logged In!',
              'Sign In Successfull',
              'success'
            ).then(()=>{    
               this.$router.push('/')
            })

            
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: err.code,
              text: err.message,
              footer: '<a href>Why do I have this issue?</a>'
            })
          })
      }
    }
  }
}
</script>

<style scoped>
.loginform{
    width:50%;
   background-color:gray;
   padding:1rem;
}

.loginform form{
     display:flex;
    flex-direction: column;
    padding:1rem;

}

.loginform form > * {
margin:0.3rem;
}

</style>
