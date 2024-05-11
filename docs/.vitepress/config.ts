import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

export default defineConfig({
	lang: 'zh-CN',
	base: '/',
	title: 'Hero',
	description: '基于 vitepress 的文档模板',
	head: [['link', { rel: 'icon', href: '/favicon.png' }]],
	vite: {
		plugins: [
			AutoSidebar({
			titleFromFile: true
		}

		)]
	},
	themeConfig: {
		logo: 'logo.svg',
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2022 markthree'
		},
		nav: [
			{
				text: 'Guide',
				link: '/guide/'
			},
			{
				text: 'About',
				link: '/about/'
			}
		],
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/name/repo'
			}
		]
	}
})
