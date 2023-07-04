<template>
	<section class="py-24">
		<div class="container">
			<!-- <h1>{{ users[0].title.rendered }}</h1>
			<p class="content" v-html="users[0].content.rendered"></p> -->

			<!-- <p v-for="p in post" :key="p">{{ p.title.rendered }}</p> -->
			<div v-for="p in post" :key="p">
				<img
					class="lg:h-96 w-full h-full"
					:src="
						p._embedded['wp:featuredmedia']
							? p._embedded['wp:featuredmedia'][0]
									.source_url
							: 'https://placehold.co/600x400'
					"
					alt=""
				/>
				<h1>{{ p.title.rendered }}</h1>
				<p class="my-4">
					{{ p.date.slice(0, 10) }}
				</p>
				<p class="content" v-html="p.content.rendered"></p>
			</div>
		</div>
	</section>
</template>

<script setup>
// export default {
// mounted() {
// 	this.getPost();
// },
// methods: {
// 	getPost() {
// 		axios.get(
// 			`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?slug=${this.slug.slug}&_embed`
// 		).then((response) => {
// 			this.post = response.data[0];
// 			console.log(response.data[0]);
// 		});
// 	}
// },
// data() {
// 	return {
// 		slug: this.$route.params,
// 		post: ""
// 	};
// }
// };

const { slug } = useRoute().params;
const { data: post } = await useFetch(
	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
	{ lazy: true, server: false, key: slug }
);
// const users = await $fetch(
// 	`https://feline-rail.000webhostapp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
// ).catch((error) => error.data);
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
