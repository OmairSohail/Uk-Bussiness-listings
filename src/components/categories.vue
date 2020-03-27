<template>
  <div class="categories">
    <h2>Categories</h2>
    <div class="links">
      <router-link to="/" v-for="c in categories" :key="c.id">{{c.category}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categories',
  data() {
      return {
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
          ]
      }
  }
}
</script>

<style scoped>
h2 {
  margin: 0;
  padding: 0.5rem;
  background-color: lightseagreen;
  color: linen;
}

div.categories {
  border: 1px solid lightseagreen;
  
}

.categories .links{
    padding:0 1rem;
    display:grid;
    grid-template-columns: repeat(4,25%);
    margin:0 auto;
  }
</style>
