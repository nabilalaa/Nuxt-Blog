<template>
	<section class="py-24">
		<div class="container">
			<article v-for="p in post" :key="p">
				<h1 class="text-center">
					{{ p.title }}
				</h1>
				<nuxt-img
					format="webp"
					sizes="sm:100vw md:50vw lg:400px"
					class="mx-auto h-[499px] object-cover"
					:src="p.image_url"
					alt=""
				/>
				<p class="text-center my-8">
					{{ p.created_at.slice(0, 10) }}
				</p>

				<div class="content" v-html="p.content"></div>
				<Title>{{ p.title }}</Title>
				<Meta name="description" :content="p.title" />
			</article>
		</div>
	</section>
</template>

<script setup>
const id = useRoute().params.id;
// const url = "https://blog-backend-strapi.onrender.com";

const { data: post } = await useFetch(`/api/articles/${id}`);
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

figure img {
	width: 50% !important;
}
</style>
