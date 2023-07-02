<template>
	<section class="py-24">
		<div class="container">
			<div>
				<img
					class="lg:h-96 lg:w-full w-full h-full mb-4"
					:src="
						post._embedded
							? post._embedded[
									'wp:featuredmedia'
							  ][0].source_url
							: ''
					"
					alt=""
				/>
				<h1 v-html="post.title ? post.title.rendered : ''"></h1>
				<p class="my-4">
					{{ post.date ? post.date.slice(0, 10) : "" }}
				</p>
				<p
					class="content"
					v-html="post.content ? post.content.rendered : ''"
				></p>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";

export default {
	mounted() {
		this.getPost();
	},
	methods: {
		getPost() {
			axios.get(
				`https://rapid-insect.localsite.io/wp-json/wp/v2/posts?slug=${this.slug.slug}&_embed`
			).then((response) => {
				this.post = response.data[0];
				console.log(response.data[0]);
			});
		}
	},
	data() {
		return {
			slug: this.$route.params,
			post: ""
		};
	}
};
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
	font-size: 3rem;
}
h2 {
	font-size: 2rem;
}

h3 {
	font-size: 1rem;
}

p {
	margin: 2rem 0;
}
</style>
