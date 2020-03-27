<template>
  <div class="addbussiness">
    <h1>Categories</h1>
    <div class="categories">
       <div class="category">
         <h3>Featured</h3>
         <hr>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, commodi! Ducimus possimus autem architecto, placeat earum quam nemo laudantium aspernatur.</p>
         <router-link to="/featured" class="btn btn-success">2.5$</router-link>
       </div>
       <div class="category">
         <h3>Premium / Permenent</h3>
         <hr>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, commodi! Ducimus possimus autem architecto, placeat earum quam nemo laudantium aspernatur.</p>
         <router-link to="/premium" class="btn btn-success">0.99$</router-link>
       </div> 
       <div class="category">
         <h3>Standard</h3>
         <hr>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, commodi! Ducimus possimus autem architecto, placeat earum quam nemo laudantium aspernatur.</p>
        <router-link to="/standard" class="btn btn-primary">Free</router-link>
       </div>     
    </div> 
  </div>
</template>

<script>
export default {
     name:'addbussiness'
}
</script>

<style scoped>
h1{
    text-align:center;
}

.categories{
    width:50%;
    margin:0 auto;
}

.category{
    margin-top:0.3rem;
    border:1px solid lightseagreen;
    padding:1rem;
}
</style>