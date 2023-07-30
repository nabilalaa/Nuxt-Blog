<template>
	<section class="py-24">
		<div class="container">
			<article v-for="p in post" :key="p">
				<h1 class="text-center">
					{{ p.title }}
				</h1>
				<p class="text-center my-8">
					{{ p.created_at.slice(0, 10) }}
				</p>
				<nuxt-img
					format="webp"
					sizes="sm:100vw md:50vw lg:400px"
					class="mx-auto lg:h-[499px] object-cover"
					:src="p.image_url"
					alt=""
				/>

				<div class="content mt-10" v-html="p.content"></div>
				<Title>{{ p.title }}</Title>
				<Meta name="description" :content="p.title" />
			</article>
		</div>
	</section>
</template>

<script setup>
const id = useRoute().params.id;

const { data: post } = await useFetch(`/api/articles/${id}`);
</script>

<style scoped>
ul {
	list-style-type: disc !important;
	list-style-position: inside !important;
}
ol {
	list-style-type: decimal !important;
	list-style-position: inside !important;
}
h1 {
	display: block !important;
	font-size: 2em !important;
	margin-top: 0.67em !important;
	margin-bottom: 0.67em !important;
	margin-left: 0 !important;
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
	display: block !important;
	font-size: 0.67em !important;
	margin-top: 2.33em !important;
	margin-bottom: 2.33em !important;
	margin-left: 0 !important;
	margin-right: 0 !important;
	font-weight: bold !important;
}

figure img {
	width: 50% !important;
}
</style>
