import { createStore } from 'vuex'

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.error('localStorage error:', e)
}

export default createStore({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {console.log('localStorage is not working')}
    }
  },
  actions: {
    
  },
  modules: {
    
  }
})
