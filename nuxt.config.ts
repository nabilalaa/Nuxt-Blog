// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	modules: [
		"@nuxt/image",
		"nuxt-icon",
		"@nuxtjs/supabase",
		"@nuxtjs/robots",
		"nuxt-simple-sitemap",
		"@nuxtseo/module",
		"@nuxtjs/cloudinary",
	],
	cloudinary: {
		cloudName: "dnru0whph",
	},
	site: {
		url: "https://blog-0-0.netlify.app",
		name: "Free For All",
		description: "موقع يختص بإشعارك بكل ما هو مجاني على الانترنت",
		defaultLocale: "ar",
	},

	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	image: {
		// The screen sizes predefined by `@nuxt/image`:
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
			"2xl": 1536,
		},
		cloudinary: {
			baseURL: "https://res.cloudinary.com/dnru0whph/image/upload/",
		},
	},
	sitemap: {
		sitemapName: "my_sitemap.xml",
	},

	app: {
		head: {
			meta: [
				{
					name: "google-site-verification",
					content: "b71UVrFPw3ZPCuYp5Qsu6jDgdq2LA8Amuyp0j0uRCmY",
				},
				{
					name: "robots",
					content: "follow",
				},
				{
					name: "google-adsense-account",
					content: "ca-pub-6052257709634296",
				},
			],
		},
		body: {
			script: [],
		},
	},
});
