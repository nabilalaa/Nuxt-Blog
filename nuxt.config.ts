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
			script: [
				{
					async: true,
					src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6052257709634296",
					crossorigin: "anonymous",
					body: true
				},
				{
					async: true,
					src: "https://www.googletagmanager.com/gtag/js?id=G-S32GHC4NCX",
					body: true
				},
				{
					type: "text/javascript",
					innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    
                    gtag("config", "G-S32GHC4NCX");
                    `
				}
			]
		}
	}
});
