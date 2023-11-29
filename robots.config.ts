export default [
	{ UserAgent: "*" },
	{ BlankLine: true },
	{ Disallow: "" },
	{ BlankLine: true },
	{ Allow: "/" },
	{ BlankLine: true },
	{ Sitemap: (req) => `https://${req.headers.host}/my_sitemap.xml` },
];
