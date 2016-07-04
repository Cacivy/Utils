import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'

Vue.use(Vuex)

export const STORAGE_KEY = 'todos-vuejs'

const state = {
  todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
  ADD_TODO (state, text) {
    state.todos.push({
      text: text,
      done: false
    })
  },
  DELETE_TODO (state, todo) {
    state.todos.splice(state.todos.indexOf(todo),1)
  },
  TOGGLE_TODO (state, todo) {
    todo.done = !todo.done
  }
}

export default new Vuex.Store({
  state,
  mutations,
  plugins
})