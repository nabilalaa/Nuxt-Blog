<template>
	<ins
		class="adsbygoogle"
		style="display: block"
		data-ad-client="ca-pub-6052257709634296"
		data-ad-slot="4020145914"
		data-ad-format="auto"
		data-full-width-responsive="true"
	></ins>

	<section class="py-20">
		<div class="container max-w-screen-md p-4">
			<a href="https://yllix.com/publishers/577462" target="_blank"
				><img
					src="//ylx-aff.advertica-cdn.com/pub/728x90.png"
					style="border: none; margin: 0; padding: 0; vertical-align: baseline"
					alt="ylliX - Online Advertising Network"
			/></a>
			<article v-for="p in post" :key="p">
				<h1 class="text-center">
					{{ p.title }}
				</h1>
				<p class="text-center my-8">
					{{ p.created_at.slice(0, 10) }}
				</p>
				<CldImage
					width="1000"
					height="500"
					class="mx-auto object-cover"
					sizes="sm:100vw, md:500px"
					:src="
						p.image_url ? p.image_url.slice(50) : 'https://placehold.co/600x400'
					"
					:alt="p.title"
					format="webp"
				/>

				<div class="content mt-10" v-html="p.content"></div>
				<Title>{{ p.title }}</Title>
				<Meta name="description" :content="p.title" />
				<Link
					rel="canonical"
					:href="`https://blog-0-0.netlify.app/posts/${p.id}`"
				/>
				<ads></ads>
			</article>
		</div>
	</section>
</template>

<script setup>
useHead({
	script: [
		// {
		// 	tagPosition: "bodyOpen",
		// 	type: "text/javascript",
		// 	src: "https://udbaa.com/bnr.php?section=General&pub=577462&format=728x90&ga=g",
		// },
		{
			tagPosition: "head",
			defer: "true",
			type: "text/javascript",
			src: "/js/main.js",
		},
		{
			tagPosition: "head",
			type: "text/javascript",
			src: "https://js.onclckmn.com/static/onclicka.js",
			async: "true",
			"data-admpid": "200345",
			"data-admpid": "200345",
		},
	],
});
const id = useRoute().params.id;
const post = ref(null);
await $fetch(`/api/articles/${id}`, {
	headers: {
		Authorization: "Nn123123",
	},
}).then((response) => {
	post.value = response;
});

onMounted(() => {});
</script>
