<template>
	<section v-if="pending">loading</section>
	<section v-else-if="error">loading</section>

	<section class="py-20" v-else>
		<div class="container">
			<div class="lg:flex gap-4 lg:h-[35rem] h-full">
				<post
					v-for="post in posts.blogs.slice(0, 1)"
					:key="post"
					class="lg:w-[60%] lg:h-full w-full h-96"
					:to="`posts/${post.id}`"
					:image="post.image_url"
					:title="post.title"
					:date="post.created_at.slice(0, 10)"
				/>

				<div
					class="lg:flex lg:gap-y-4 lg:flex-col flex-col lg:w-1/2 lg:h-full h-full"
				>
					<post
						v-for="post in posts.blogs.slice(1, 3)"
						:key="post"
						class="lg:w-full lg:h-1/2 w-full h-[400px] lg:my-0 my-4"
						:to="`posts/${post.id}`"
						:image="post.image_url"
						:title="post.title"
						:date="post.created_at.slice(0, 10)"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="py-20">
		<div class="container">
			<div class="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
				<post
					v-for="post in posts.blogs.slice(3)"
					:key="post"
					class="lg:w-full lg:h-[400px] w-full h-[400px] lg:my-0 my-4"
					:to="`posts/${post.id}`"
					:image="post.image_url"
					:title="post.title"
					:date="post.created_at.slice(0, 10)"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
// const url = "https://blog-backend-strapi.onrender.com";
const {
	data: posts,
	pending,
	error
} = useFetch(`/api/articles`, {
	lazy: true
});

// import axios from "axios";
// export default {
// 	data() {
// 		return {
// 			posts: []
// 		};
// 	},
// 	methods: {
// 		async getposts() {
// 			await axios
// 				.get(
// 					"https://blog-backend-strapi.onrender.com/api/blogs?populate=image"
// 				)
// 				.then((response) => {
// 					this.posts = response.data.data;
// 					console.log(response.data);
// 				});
// 			document.body.style.overflow = "auto";
// 			document.querySelector(".loading").style.display = "none";
// 		}
// 	},
// 	mounted() {
// 		document.body.style.overflow = "hidden";
// 		window.addEventListener("load", this.getposts());
// 	}
// };
</script>

<style></style>
