import Vue from 'vue'
import Router from 'vue-router'
import Properties from './views/Properties.vue'
import NewProperty from './components/property/NewProperty.vue'
import Property from './components/property/Property.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: { name: 'new-property' } },
    {
      path: '/properties',
      component: Properties,
      children: [
        {
          path: '',
          name: 'new-property',
          component: NewProperty
        },
        {
          path: ':id',
          name: 'property',
          component: Property,
          props: true
        }
      ]
    }
  ]
})
