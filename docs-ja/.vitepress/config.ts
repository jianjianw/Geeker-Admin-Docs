import mdItCustomAttrs from "markdown-it-custom-attrs";

export default {
	title: "Geeker-Admin",
	lang: "ja",
	description: "Geeker Admin ドキュメンテーション",
	head: [
		["meta", { name: "author", content: "HalseySpicy" }],
		["meta", { name: "keywords", content: "Geeker, Geeker-Admin, Geeker-Admin-Docs, Vite, Vue, Vue3, Admin" }],
		["link", { rel: "icon", href: "/logo.svg" }],
		["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
		["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
	],
	markdown: { config: (md) => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }) },
	lastUpdated: true,
	themeConfig: {
		logo: "/logo.svg",
		algolia: {
			appId: "YMXN47DKMJ",
			apiKey: "8bf7d8e2b7e7b32a95f5aec9aca38a70",
			indexName: "Geeker-Admin",
		},
		editLink: {
			text: "このページの改善提案",
			pattern: "https://github.com/HalseySpicy/Geeker-Admin-Docs",
		},
		socialLinks: [{ icon: "github", link: "https://github.com/HalseySpicy/Geeker-Admin" }],
		footer: {
			message: "MITライセンス。",
			copyright: "Copyright © 2024 链接CRM",
		},
		nav: [
			{ text: "ガイド", link: "/guide/", activeMatch: "/guide" },
			{
				text: "コンポーネント",
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
				text: "関連リンク",
				items: [
					{ text: "プレビューアドレス", link: "https://admin.spicyboy.cn/" },
					{ text: "Gitee ソースコード", link: "https://gitee.com/HalseySpicy/Geeker-Admin" },
					{ text: "GitHub ソースコード", link: "https://github.com/HalseySpicy/Geeker-Admin" },
					{ text: "ドキュメンテーションのソースコード", link: "https://github.com/HalseySpicy/Geeker-Admin-Docs" },
					{ text: "更新履歴", link: "https://github.com/HalseySpicy/Geeker-Admin/blob/master/CHANGELOG.md" },
				],
			},
			{ text: "🍵 スポンサー", link: "/sponsor/index" },
			{
				text: "言語",
				items: [{ text: "简体中文", link: "https://docs.spicyboy.cn" }],
			},
		],

		sidebar: {
			"/guide/": [
				{
					text: "ガイド",
					collapsible: true,
					items: [
						{ text: "紹介", link: "/guide/introduce" },
						{ text: "クイックスタート", link: "/guide/" },
						{ text: "ディレクトリ構造", link: "/guide/catalogue" },
						{ text: "ルーティング、メニュー", link: "/guide/router" },
						{ text: "権限管理", link: "/guide/auth" },
						{ text: "ネットワークリクエスト", link: "/guide/request" },
						{ text: "ビルド、デプロイ", link: "/guide/build" },
					],
				},
				{
					text: "高度な使い方",
					collapsible: true,
					items: [
						{ text: "プロジェクトの規範", link: "/guide/standard" },
						{ text: "テーマ設定", link: "/guide/theme" },
						{ text: "レイアウトモード", link: "/guide/layout" },
					],
				},
				{
					text: "その他",
					collapsible: true,
					items: [{ text: "よくある質問", link: "/guide/question" }],
				},
			],
			"/components/": [
				{
					text: "コンポーネント",
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
