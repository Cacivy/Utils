<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <input type="text" name="" v-model="text" @keyup.enter="add">
    <ul>
      <todo v-for="(index,todo) in todos" :todo="todo"></todo>
    </ul>
  </div>
</template>

<script>
import todo from './Todo'
import {
  addTodo
} from '../vuex/actions'

export default {
  data () {
    return {
      text: ""
    }
  },
  vuex: {
    getters: {
      todos: state => state.todos
    },
    actions: {
      addTodo
    }
  },
  components: {
    todo
  },
  methods: {
    add() {
      if(this.text){
        this.addTodo(this.text)
        this.text=""
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  padding: 0;
  margin: 0;
}
h1 {
  color: #42b983;
}
ul>li{
  list-style: none;
  text-align: left;
}
</style>
