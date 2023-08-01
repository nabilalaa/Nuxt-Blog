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
					:src="
						p.image_url
							? p.image_url
							: 'https://placehold.co/600x400'
					"
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
import axios from "axios";
const id = useRoute().params.id;
const post = ref(null);
onMounted(async () => {
	await $fetch(`/api/articles/${id}`).then((response) => {
		post.value = response;
	});
});

// axios.get(`/api/articles/${id}`).then((res) => {
// 	console.log(res.data);
// 	post.value = res.data;
// });
</script>
