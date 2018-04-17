import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home'
import Label from '@/components/page/Label'
import Files from '@/components/page/Files'
import About from '@/components/page/About'
import Login from '@/components/admin/Login'
import Edit from '@/components/admin/Edit'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/Home',
		component: Home
	}, {
		path: '/Label',
		component: Label
	}, {
		path: '/Files',
		component: Files
	}, {
		path: '/About',
		component: About
	}, {
		path: '/Login',
		component: Login
	},{
		path: '/Edit',
		component: Edit
	}, {
		path: '*',
		redirect: '/Home'
	}

	]
})
