<template>
	<!-- const { data: posts } = useFetch("https://fakestoreapi.com/products");

	<section class="grid grid-cols-3 gap-4">
		<div v-for="post in posts" :key="post">
			<h1>{{ post.title }}</h1>
			<img :src="post.image" alt="" class="w-40" />
		</div>
	</section>  -->
	<section class="py-20">
		<div class="container">
			<div class="lg:flex gap-4 lg:h-[35rem] h-full">
				<post
					v-for="post in posts.data.slice(0, 1)"
					:key="post"
					class="lg:w-[60%] lg:h-full w-full h-96"
					:image="
						'http://127.0.0.1:1337' +
						post.attributes.image.data[0].attributes.url
					"
					:to="`posts/${post.id}`"
					:title="post.attributes.title"
					:date="post.attributes.createdAt.slice(0, 10)"
				/>
				<div
					class="lg:flex lg:gap-y-4 lg:flex-col flex-col lg:w-1/2 lg:h-full h-full"
				>
					<post
						v-for="post in posts.data.slice(1, 3)"
						:key="post"
						class="lg:w-full lg:h-1/2 w-full h-[400px] lg:my-0 my-4"
						:image="
							'http://127.0.0.1:1337' +
							post.attributes.image.data[0]
								.attributes.url
						"
						:to="`posts/${post.id}`"
						:title="post.attributes.title"
						:date="
							post.attributes.createdAt.slice(0, 10)
						"
					/>
				</div>
			</div>
		</div>
	</section>
	<!-- <section class="py-20">
		<div class="container">
			<div class="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
				<post
					v-for="post in posts"
					:key="post"
					class="h-[400px]"
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
	</section> -->
</template>

<script setup>
const { data: posts } = await useFetch(
	"http://127.0.0.1:1337/api/blogs?populate=image"
);
// import axios from "axios";
// export default {
// 	data() {
// 		return {
// 			posts: []
// 		};
// 	},
// 	mounted() {
// 		axios.get("http://localhost:1337/api/blogs?populate=image").then(
// 			(response) => {
// 				this.posts = response.data;
// 				console.log(response.data);
// 			}
// 		);
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
