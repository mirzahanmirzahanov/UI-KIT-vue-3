import { createRouter, createWebHistory } from "vue-router";
import Index from '@/pages/index.vue'
import TypographyPage from '@/pages/TypographyPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'

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
			component: ButtonPage
		},
		{
			path: '/typography',
			name: 'typography',
			component: TypographyPage
		},
	]
})

export default router;