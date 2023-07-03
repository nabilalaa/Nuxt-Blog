<template>
	<section class="py-20">
		<div class="container">
			<div class="lg:flex gap-4 lg:h-[35rem] h-full">
				<post
					v-for="post in posts.slice(0, 1)"
					:key="post"
					class="lg:w-[60%] lg:h-full w-full h-96"
					:image="
						post._embedded['wp:featuredmedia']
							? post._embedded[
									'wp:featuredmedia'
							  ][0].source_url
							: 'https://placehold.co/600x400'
					"
					:to="`posts/${post.slug}`"
					:title="post.title.rendered"
					:date="post.date.slice(0, 10)"
				/>
				<div
					class="lg:flex lg:gap-y-4 lg:flex-col flex-col lg:w-1/2 lg:h-full h-full"
				>
					<post
						v-for="post in posts.slice(1, 3)"
						:key="post"
						class="lg:w-full lg:h-1/2 w-full h-[400px] lg:my-0 my-4"
						:image="
							post._embedded['wp:featuredmedia']
								? post._embedded[
										'wp:featuredmedia'
								  ][0].source_url
								: ''
						"
						:to="`posts/${post.slug}`"
						:title="post.title.rendered"
						:date="post.date.slice(0, 10)"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="py-20">
		<div class="container">
			<div class="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
				<post
					v-for="post in posts.slice(3)"
					:key="post"
					:image="
						post._embedded['wp:featuredmedia']
							? post._embedded[
									'wp:featuredmedia'
							  ][0].source_url
							: ''
					"
					:to="`posts/${post.slug}`"
					:title="post.title.rendered"
					:date="post.date.slice(0, 10)"
					class="h-[400px]"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
const { data: posts } = useFetch(
	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?_embed`
);

console.log(posts);
// export default {
// 	data() {
// 		return {
// 			posts: []
// 		};
// 	},
// 	mounted() {
// 		axios.get(
// 			"https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?_embed"
// 		).then((response) => {
// 			this.posts = response.data;
// 			console.log(response.data);
// 		});
// 	}
// };
</script>

<style>
@import url("https://fonts.googleapis.com/earlyaccess/droidarabickufi.css");
body {
	background: #e2ffdb;
	font-family: "Droid Arabic Kufi", serif;
}
</style>
