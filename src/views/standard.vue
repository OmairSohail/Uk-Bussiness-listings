<template>
  <div class="standard">
    <h2 class="text-center">Standard Listings</h2>
  <div class="standardlisting mt-4">
       <form @submit="submitListing">
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="bname">Bussiness Name</label>
            <input type="text" class="form-control" id="bname" placeholder="Bussiness Name" v-model="bussinessname" required>
            </div>
            <div class="form-group col-md-6">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" id="phone" placeholder="Phone No" v-model="phone" required>
            </div>
        </div>
        
         <div class="form-group">
            <label for="categories">Categories</label>
            <select class="form-control" id="categories" v-model="category" required>
            <option v-for="c in categories" :key="c.id">{{c.category}}</option>
            </select>
        </div>

        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="address">
        </div>
        <div class="form-group">
            <label for="bussinessaddress">Bussiness Address</label>
            <input type="text" class="form-control" id="bussinessaddress" placeholder="Bussiness address" v-model="baddress" required>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" v-model="city" required>
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control" v-model="state" required>
                <option v-for="s in statedata" :key="s.id">{{s.state}}</option>
            </select>
            </div>
            <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" v-model="zip" required>
            </div>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="10" v-model="description" required></textarea>
        </div>
         <div class="form-group">
                <label for="image">Image</label>
                <input type="file" class="form-control-file" id="image" name="image"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit Listing</button>
        </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import firebase from 'firebase'
import axios from 'axios'
export default {
    name:'standard',
    data(){
        return{
            bussinessname:'',
            phone:'',
            address:'',
            baddress:'',
            category:'',
            description:'',
            city:'',
            state:'',
            zip:'',
            image:'',
            countrydata:[],
             categories:[
              {
                  id:1,
                  category:'arts'
              },{
                  id:2,
                  category:'Industries'
              },{
                  id:3,
                  category:'Communication'
              },{
                  id:4,
                  category:'Computer Hardware'
              },{
                  id:5,
                  category:'Computer Software'
              },
              {
                  id:6,
                  category:'arts'
              },{
                  id:7,
                  category:'Industries'
              },{
                  id:8,
                  category:'Communication'
              },{
                  id:9,
                  category:'Computer Hardware'
              },{
                  id:10,
                  category:'Computer Software'
              },
          ],
            statedata:[
                {id:1,state:'Sindh'},
                {id:2,state:'Punjab'},
                {id:3,state:'KPK'},
                {id:4,state:'Balochistan'},
                {id:5,state:'Azad Kashmir'},
            ]
        }
    },
    created(){
        console.log(this.countrydata)
    },
    computed:{
     
    },
    methods: {
        submitListing:function(event){
            event.preventDefault();
             const id = firebase.auth().currentUser.uid;
             const email = firebase.auth().currentUser.email;
             const now = new Date();
            //  const name = firebase.auth().currentUser.name
             firebase.database().ref(`listings/standard/`).push({
                 bussinessName:this.bussinessname,
                 email:email,
                 phone:this.phone,
                 address:this.address,
                 bussinessAddress:this.baddress,
                 category:this.category,
                 city:this.city,
                 state:this.state,
                 zip:this.zip,
                 description:this.description,
                 image:this.image,
                 postedAt:now.toLocaleDateString()
                //  name: name
             }).then(()=>{
                 Swal.fire(
                            'Good job!',
                            'Your Listing Has Been Submitted',
                            'success'
                    ).then(this.$router.push('/addbussiness'))
             }).catch((err)=>{
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
</script>

<style scoped>
.standardlisting{
    width:50%;
    margin:0 auto;
}
</style>