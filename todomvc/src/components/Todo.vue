<template>
<li><input type="checkbox" name="" :checked="todo.done" @change="toggleTodo(todo)"> {{ todo.text }} <span @click="del">X</span></li>
</template>
<script>
import {
  deleteTodo,
  toggleTodo
} from '../vuex/actions'
export default {
  data () {
    return {

    }
  },
  vuex: {
    actions: {
      deleteTodo,
      toggleTodo
    }
  },
  props: ['todo'],
  methods: {
  	del(){
  		this.deleteTodo(this.todo)
  	}
  }
}
</script>

<style scoped>
	li span{
		color: #c362e7;
		cursor: pointer;
	}
</style>