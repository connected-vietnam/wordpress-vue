/* eslint-disable import/prefer-default-export */

import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/pages/Home/index.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
      },
    ],
  })
}
