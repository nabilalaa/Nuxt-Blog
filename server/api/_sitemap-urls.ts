export default defineEventHandler(async (event) => {
	const posts = await $fetch("/api/articles", {
		headers: {
			Authorization: "Nn123123"
		}
	});
	console.log(event);
	return posts.blogs.map((p) => {
		return {
			loc: `${event.context.siteConfigNitroOrigin}${p.id}`,
			lastmod: p.created_at
		};
	});
});
