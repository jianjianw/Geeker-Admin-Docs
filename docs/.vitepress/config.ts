import mdItCustomAttrs from "markdown-it-custom-attrs";

export default {
	title: "链接CRM",
	lang: "zh-CN",
	description: "链接CRM 中文文档",
	head: [
		["meta", { name: "author", content: "链接CRM" }],
		["meta", { name: "keywords", content: "CRM, 链接CRM, 链接CRM-Docs, Vite, Vue, Vue3, Admin" }],
		["link", { rel: "icon", href: "/logo.svg" }],
		["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
		["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
	],
	markdown: { config: (md) => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }) },
	lastUpdated: true,
	themeConfig: {
		logo: "/logo.svg",
		// algolia: {
		// 	appId: "YMXN47DKMJ",
		// 	apiKey: "8bf7d8e2b7e7b32a95f5aec9aca38a70",
		// 	indexName: "Geeker-Admin",
		// },
		search: {
			provider: 'local', // 可以开启本地搜索
			// provider: "algolia",
			// options: {
			// 	appId: "J67WNULBFG",
			// 	apiKey: "f1e6e7b8838def671add427b0412e596",
			// 	indexName: "lusxh",
			// 	placeholder: "请输入关键词lusxh",
			// 	translations: {
			// 		button: {
			// 			buttonText: "请输入关键词lusxh.",
			// 		},
			// 	},
			// },
		},
		editLink: {
			text: "为此页提供修改建议",
			pattern: "https://github.com/HalseySpicy/Geeker-Admin-Docs",
		},
		socialLinks: [{ icon: "github", link: "https://github.com/HalseySpicy/Geeker-Admin" }],
		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2025 链接CRM",
		},
		nav: [
			{ text: "指南", link: "/guide/", activeMatch: "/guide" },
			{
				text: "组件",
				items: [
					{ text: "ProTable", link: "/components/proTable" },
					{ text: "SelectIcon", link: "/components/selectIcon" },
					{ text: "SelectFilter", link: "/components/selectFilter" },
					{ text: "TreeFilter", link: "/components/treeFilter" },
					{ text: "Upload", link: "/components/upload" },
					{ text: "ImportExcel", link: "/components/importExcel" },
					{ text: "SvgIcon", link: "/components/svgIcon" },
					{ text: "WangEditor", link: "/components/wangEditor" },
				],
			},
			{
				text: "相关链接",
				items: [
					{ text: "预览地址", link: "https://admin.spicyboy.cn/" },
					{ text: "Gitee 源码", link: "https://gitee.com/HalseySpicy/Geeker-Admin" },
					{ text: "GitHub 源码", link: "https://github.com/HalseySpicy/Geeker-Admin" },
					{ text: "文档源码", link: "https://github.com/HalseySpicy/Geeker-Admin-Docs" },
					{ text: "更新日志", link: "https://github.com/HalseySpicy/Geeker-Admin/blob/master/CHANGELOG.md" },
				],
			},
			{ text: "🍵 赞助", link: "/sponsor/index" },
			{
				text: "语言",
				items: [{ text: "日本語", link: "http://ja.spicyboy.surge.sh" }],
			},
		],

		sidebar: {
			"/guide/": [
				{
					text: "指南",
					collapsible: true,
					items: [
						{ text: "介绍", link: "/guide/introduce" },
						{ text: "快速上手", link: "/guide/" },
						{ text: "目录结构", link: "/guide/catalogue" },
						{ text: "路由、菜单", link: "/guide/router" },
						{ text: "权限管理", link: "/guide/auth" },
						{ text: "网络请求", link: "/guide/request" },
						{ text: "构建、部署", link: "/guide/build" },
					],
				},
				{
					text: "进阶",
					collapsible: true,
					items: [
						{ text: "项目规范", link: "/guide/standard" },
						{ text: "主题配置", link: "/guide/theme" },
						{ text: "布局模式", link: "/guide/layout" },
					],
				},
				{
					text: "其他",
					collapsible: true,
					items: [{ text: "常见问题", link: "/guide/question" }],
				},
			],
			"/components/": [
				{
					text: "组件",
					items: [
						{ text: "ProTable", link: "/components/proTable" },
						{ text: "SelectIcon", link: "/components/selectIcon" },
						{ text: "SelectFilter", link: "/components/selectFilter" },
						{ text: "TreeFilter", link: "/components/treeFilter" },
						{ text: "Upload", link: "/components/upload" },
						{ text: "ImportExcel", link: "/components/importExcel" },
						{ text: "SvgIcon", link: "/components/svgIcon" },
						{ text: "WangEditor", link: "/components/wangEditor" },
					],
				},
			],
		},
	},
};
