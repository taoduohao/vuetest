import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import deone from '@/components/detail/deone'
import detwo from '@/components/detail/detwo'
import dethree from '@/components/detail/dethree'
import defour from '@/components/detail/defour'

Vue.use(Router)

export default new Router({
	// mode:'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path:'/detail',
			component:detail,
			redirect:'/detail/deone',
			children: [
				{
					path:'/detail/deone',
					component:deone
				},
				{
					path:'/detail/detwo',
					component:detwo
				},
				{
					path:'/detail/dethree',
					component:dethree
				},
				{
					path:'/detail/defour',
					component:defour
				}
			]
		}
	]
})
