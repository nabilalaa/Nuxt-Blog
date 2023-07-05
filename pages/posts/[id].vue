<template>
	<section class="py-24">
		<div class="container">
			<p></p>
			<!-- {{ this.post.attributes.title }} -->
			<!-- <h1>{{ post.attributes.title }}</h1> -->
			<!-- <p class="content" v-html="users[0].content.rendered"></p> -->

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
			<div v-for="p in post" :key="p">
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
			</div>
		</div>
	</section>
</template>

<script setup>
// import axios from "axios";
// export default {
// 	mounted() {
// 		this.getPost();
// 	},
// 	methods: {
// 		getPost() {
// 			axios.get(
// 				`http://localhost:1337/api/blogs[slug][$eq]=${this.slug.slug}`
// 			).then((response) => {
// 				this.post = response.data.data[0];
// 				console.log(response.data.data[0]);
// 			});
// 		}
// 	},
// 	data() {
// 		return {
// 			slug: this.$route.params,
// 			post: ""
// 		};
// 	}
// };

const { id } = useRoute().params;
// const { data: post } = await useFetch(
// 	`https://blog-backend-strapi.onrender.com/api/blogs/${id}?populate=*`,
// 	{
// 		key: id,
// 		transform: (_posts) => _posts.data
// 	}
// );

const { data: post } = await useFetch(
	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?slug=${id}&_embed`,
	{
		key: id,
		server: false
	}
);

console.log(post);
// const users = await $fetch(
// 	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
// ).catch((error) => error.data);
// const pos = post.value.data[0];
</script>

<style>
.content ul {
	list-style-type: disc;
	list-style-position: inside;
}
.content ol {
	list-style-type: decimal;
	list-style-position: inside;
}
h1 {
	font-size: 2em;
	font-weight: bold;
	margin: 0.67em 0;
}

h2 {
	font-size: 1.5em;
	font-weight: bold;
	margin: 0.83em 0;
}

h3 {
	font-size: 1.17em;
	font-weight: bold;
	margin: 1em 0;
}

h4 {
	font-size: 1em;
	font-weight: bold;
	margin: 1.33em 0;
}

h5 {
	font-size: 0.83em;
	font-weight: bold;
	margin: 1.67em 0;
}

h6 {
	font-size: 0.67em;
	font-weight: bold;
	margin: 2.33em 0;
}

p {
	margin: 2rem 0;
}

.content img {
	width: 50%;
}
</style>
