<template>
	<section class="py-24">
		<div class="container">
			<article>
				<nuxt-img
					fit="cover"
					width="940"
					height="480"
					sizes="sm:355px md:320px lg:480px"
					class="m-auto mb-10"
					:src="
						url +
						post.data.attributes.image.data[0]
							.attributes.url
					"
					alt=""
				/>
				<h1>{{ post.data.attributes.title }}</h1>

				<div
					id="content"
					v-html="post.data.attributes.content"
				></div>
			</article>
			<!-- {{ this.post.attributes.title }} -->
			<!-- <h1>{{ post.attributes.title }}</h1> -->

			<!-- <div>
				<img
					:src="
						'https://blog-backend-strapi.onrender.com' +
						post.attributes.cover.data[0].attributes.url
					"
					alt=""
				/>
				<h1>{{ post.attributes.title }}</h1>
				<p class="my-4">
					{{ post.attributes.createdAt.slice(0, 10) }}
				</p>
				<p class="content" v-html="post.attributes.content"></p>
			</div> -->
			<!-- <div v-for="p in post" :key="p">
				<Meta
					name="description"
					:content="p.excerpt.rendered"
				/>
				<img
					:src="
						p._embedded['wp:featuredmedia']
							? p._embedded['wp:featuredmedia'][0]
									.source_url
							: ''
					"
					alt=""
				/>
				<h1>{{ p.title.rendered }}</h1>
				<Title>{{ p.title.rendered }}</Title>

				<p class="my-4">
					{{ p.date.slice(0, 10) }}
				</p>
				<p class="content" v-html="p.content.rendered"></p>
			</div> -->
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
const url = "http://127.0.0.1:1337";

const { data: post } = await useFetch(
	`${url}/api/blogs/${id}?populate=image`,
	{}
);

// const { data: post } = await useFetch(
// 	`http://localhost:1337/api/blogs/${id}?populate=image`
// );

// console.log(post);
// const users = await $fetch(
// 	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
// ).catch((error) => error.data);
// const pos = post.value.data[0];
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
