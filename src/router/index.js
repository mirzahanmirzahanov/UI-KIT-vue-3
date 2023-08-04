import { createRouter, createWebHistory } from "vue-router";
import Index from '@/pages/index.vue'
import Typography from '@/pages/Typography.vue'
import Button from '@/pages/Button.vue'

const router = createRouter({
	history: createWebHistory()
	,
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/button',
			name: 'button',
			component: Button
		},
		{
			path: '/typography',
			name: 'typography',
			component: Typography
		},
	]
})

export default router;