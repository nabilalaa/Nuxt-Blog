import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event);
	const id = event.context.params.id;
	// console.log(event.context.params.id );
	let { data: blogs, error } = await client
		.from("blogs")
		.select("*")
		.eq("id", id);

	return blogs;
});
