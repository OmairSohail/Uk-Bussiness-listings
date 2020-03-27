<template>
  <div class="signupform">
     <form action="" @submit.prevent>
        <label for="fullname">Full Name:</label>
        <input type="text" name="fullname" placeholder="Enter Your Fullname ..." v-model="fullname"> 
        
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Enter Your Email..." v-model="email">

        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Enter Your Password..." v-model="password">

        <label for="confirmpassword">Confirm Password:</label>
        <input type="password" name="confirmpassword" placeholder="Confirm Your Password..." v-model="confirmpassword">

        <label for="iagree">I Agree To The Terms And Conditions . </label>
        <input type="checkbox" name="iagree" v-model="iagree">

        <router-link to="/forgotpassword">Forgot Password ?</router-link>
        <button @click="signup()">SignUp</button>    
     </form>  
  </div>
</template>

<script>
import firebase from 'firebase'
import Swal from 'sweetalert2'
export default {
    name:'signupform',
    data(){
        return{
             fullname:'',
             email:'',
             password:'',
             confirmpassword:'',
             iagree:false
        }
    },
    methods: {
        signup(){
            if(this.fullname == '' && this.email == '' && this.password == '' && this.confirmpassword == '' && this.iagree == false){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
                })
            }
           firebase.auth()
                   .createUserWithEmailAndPassword(this.email,this.password)
                   .then(()=>{
                        Swal.fire(
                            'Good job!',
                            'User Has Been Created!',
                            'success'
                            )
                       
                   })
                   .catch(err => console.log(err.message))
        }
    }

}
</script>

<style scoped>
.signupform{
    width:50%;
   background-color:gray;
   padding:1rem;
}

.signupform form{
     display:flex;
    flex-direction: column;
    padding:1rem;
    
}

.signupform form > * {
margin:0.3rem;
}

</style>