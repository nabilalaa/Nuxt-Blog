// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["@/assets/css/main.css"],
	modules: ["@nuxt/image", "nuxt-icon", "@nuxtjs/supabase"],
	extends: ["nuxt-seo-kit"],
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
			siteDescription: "Welcome to my awesome site!",
			language: "ar"
		}
	}
});
