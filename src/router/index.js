import { createRouter, createWebHistory } from "vue-router";
import Index from '@/pages/index.vue'
import TypographyPage from '@/pages/TypographyPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'
import CheckboxPage from '@/pages/CheckboxPage.vue'
import RadioButtonPage from '@/pages/RadioButtonPage.vue'
import ProgressPage from '@/pages/ProgressPage.vue'
import InputPage from '@/pages/InputPage.vue'

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
			name: 'Typography',
			component: TypographyPage
		},
		{
			path: '/button',
			name: 'Button',
			component: ButtonPage
		},
		{
			path: '/checkbox',
			name: 'Checkbox',
			component: CheckboxPage
		},
		{
			path: '/radiobutton',
			name: 'RadioButton',
			component: RadioButtonPage
		},
		{
			path: '/progress',
			name: 'Progress',
			component: ProgressPage
		},
		{
			path: '/input',
			name: 'InputPage',
			component: InputPage
		},
	]
})

export default router;