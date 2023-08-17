// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/image",
		"nuxt-icon",
		"@nuxtjs/supabase",
		"nuxt-simple-robots"
	],
	extends: ["nuxt-seo-kit"],
	robots: {
		// provide simple disallow rules for all robots `user-agent: *`

		allow: ["/"],
		mergeWithRobotsTxtPath: "robots.txt"
	},
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
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
			"2xl": 1536
		}
	},
	runtimeConfig: {
		public: {
			siteUrl:
				process.env.NUXT_PUBLIC_SITE_URL ||
				"https://blog-0-0.netlify.app",
			siteName: "Free For All ",
			siteDescription:
				"موقع يختص بإشعارك بكل ما هو مجاني على الانترنت",
			language: "ar"
		}
	},

	app: {
		head: {
			meta: [
				{
					name: "google-site-verification",
					content: "b71UVrFPw3ZPCuYp5Qsu6jDgdq2LA8Amuyp0j0uRCmY"
				}
			],
			script: []
		}
	}
});
