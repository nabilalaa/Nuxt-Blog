export default [
	{ UserAgent: "*" },
	{ BlankLine: true },
	{ Disallow: "" },
	{ BlankLine: true },
	{ Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
];
