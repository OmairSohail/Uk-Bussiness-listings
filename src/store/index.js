import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[],
    listings:[]
  },
  mutations: {
    setUser:(state,payload) => {
          state.user = payload
    },
    outUser: (state) => {
          state.user = ''
    },
    setListings: (state,payload) => {
       state.listings = payload
    }
  },
  actions: {
    createUser({commit},payload){
       this.commit('setUser',payload)
    },
    removeUser({commit}){
        this.commit('outUser') 
    },
    setListings({commit},payload){
       this.commit('setListings',payload)
    }

  },
  getters:{
    // getListings:(state) => {
    //         return state.listings.filter()  
    // }
  },
  modules: {
  }
})
