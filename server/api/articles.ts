import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event);
    console.log(event)

	let { data: blogs } = await client
		.from("blogs")
		.select("*")
		.order("updated_at", { ascending: false });

	return {
		blogs
	};
});
