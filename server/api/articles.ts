import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event);

	let { data: blogs, error } = await client.from("blogs").select("*");

	return {
		blogs
	};
});
