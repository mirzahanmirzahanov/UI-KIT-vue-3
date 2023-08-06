import { createRouter, createWebHistory } from "vue-router";
import Index from '@/pages/index.vue'
import TypographyPage from '@/pages/TypographyPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'
import CheckboxPage from '@/pages/CheckboxPage.vue'

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
			path: '/typography',
			name: 'typography',
			component: TypographyPage
		},
		{
			path: '/button',
			name: 'button',
			component: ButtonPage
		},
		{
			path: '/checkbox',
			name: 'checkbox',
			component: CheckboxPage
		},
	]
})

export default router;