export default [
	{ UserAgent: "*" },
	{ BlankLine: true },
	{ Disallow: "" },
	{ BlankLine: true },
	{ Allow: "/" },
	{ Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
];
