import Vue from 'Vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 定义组件
var Foo = Vue.extend({
  template:
    '<div class="foo">' +
      '<h2>This is Foo!</h2>' +
      '<router-view></router-view>' + // <- nested outlet
    '</div>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

var Baz = Vue.extend({
    template: '<p>This is baz!</p>'
})

var User = Vue.extend({
    template: '<p>This is User!</p>'
})

// configure router
var router = new VueRouter()

router.map({
  '/foo': {
    component: Foo,
    // add a subRoutes map under /foo
    subRoutes: {
      '/': {
        // This component will be rendered into Foo's <router-view>
        // when /foo is matched. Using an inline component definition
        // here for convenience.
        component: {
          template: '<p>Default sub view for Foo</p>'
        }
      },
      '/bar': {
        // Bar will be rendered inside Foo's <router-view>
        // when /foo/bar is matched
        component: Bar
      },
      '/baz': {
        // same for Baz, but only when /foo/baz is matched
        component: Baz
      }
    }
  },
  '/user/:username':{
  	name: 'user',
  	component: User
  }
})

// start app
var App = Vue.extend({})
router.start(App, '#app')