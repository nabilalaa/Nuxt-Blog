<template>
	<section class="py-24">
		<div class="container">
			<article>
				<h1 class="text-center">
					{{ post.data.attributes.title }}
				</h1>
				<p class="text-center my-8">
					{{ post.data.attributes.createdAt.slice(0, 10) }}
				</p>

				<nuxt-img
					fit="cover"
					width="940"
					height="480"
					sizes="sm:355px md:320px lg:480px"
					class="m-auto mb-12 lg:w-1/2"
					:src="
						post.data.attributes.image.data[0]
							.attributes.url
					"
					alt=""
				/>

				<div
					id="content"
					v-html="post.data.attributes.content"
				></div>
			</article>
		</div>
	</section>
</template>

<script setup>
// import axios from "axios";
// export default {
// 	created() {
// 		this.getPost();
// 	},
// 	methods: {
// 		getPost() {
// 			axios.get(
// 				`http://localhost:1337/api/blogs/${this.id.id}?populate=image`
// 			).then((response) => {
// 				this.post = response.data.data;
// 				console.log(response.data.data);
// 			});
// 		}
// 	},
// 	data() {
// 		return {
// 			id: this.$route.params,
// 			post: []
// 		};
// 	}
// };

const id = useRoute().params.id;
const url = "https://blog-backend-strapi.onrender.com";

const { data: post } = await useFetch(
	`${url}/api/blogs/${id}?populate=image`,
	{}
);
</script>

<style scoped>
ul {
	list-style-type: disc;
	list-style-position: inside;
}
ol {
	list-style-type: decimal;
	list-style-position: inside;
}
h1 {
	display: block;
	font-size: 2em;
	margin-top: 0.67em;
	margin-bottom: 0.67em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h2 {
	display: block;
	font-size: 1.5em;
	margin-top: 0.83em;
	margin-bottom: 0.83em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h3 {
	display: block;
	font-size: 1.17em;
	margin-top: 1em;
	margin-bottom: 1em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h4 {
	display: block;
	margin-top: 1.33em;
	margin-bottom: 1.33em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h5 {
	display: block;
	font-size: 0.83em;
	margin-top: 1.67em;
	margin-bottom: 1.67em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
h6 {
	display: block;
	font-size: 0.67em;
	margin-top: 2.33em;
	margin-bottom: 2.33em;
	margin-left: 0;
	margin-right: 0;
	font-weight: bold;
}
</style>
