<template>
  <div class="home">
    <div class="container">
       <categories/>
       <listings/>
    </div>
      
  </div>
</template>

<script>
import categories from '../components/categories'
import listings from '../components/displayListings'
export default {
  name: 'Home',
  components: {
    categories,
    listings
  }
}
</script>

<style scoped>
.container{
  display:grid;
  grid-gap:1rem;
}
</style>
