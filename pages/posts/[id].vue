<template>
	<!-- <ins
		class="adsbygoogle"
		style="display: block"
		data-ad-client="ca-pub-6052257709634296"
		data-ad-slot="4020145914"
		data-ad-format="auto"
		data-full-width-responsive="true"
	></ins> -->
	<section class="py-20">
		<div class="container max-w-screen-md p-4">
			<article v-for="p in post" :key="p">
				<h1 class="text-center">
					{{ p.title }}
				</h1>
				<p class="text-center my-8">
					{{ p.created_at.slice(0, 10) }}
				</p>
				<!-- <nuxt-img
					provider="cloudinary"
					sizes="sm:100vw, md:500px"
					densities="x1 x2"
					height="100%"
					width="100%"
					class="mx-auto lg:h-[499px] object-cover"
					:src="
						p.image_url ? p.image_url.slice(50) : 'https://placehold.co/600x400'
					"
					:alt="p.title"
					format="webp"
				/> -->
				<CldImage
					width="auto"
					height="auto"
					class="mx-auto md:!w-72 object-cover"
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
			</article>
		</div>
		<!-- <ins
			class="adsbygoogle"
			style="display: block"
			data-ad-client="ca-pub-6052257709634296"
			data-ad-slot="4020145914"
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins> -->
	</section>
</template>

<script setup>
// useHead({
// 	link: [
// 		{
// 			rel: "canonical",
//             href:"https://blog-0-0.netlify.app/posts/${p.id}"
//             	},
// 		{
// 			rel: "stylesheet",
// 			href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
// 			crossorigin: ""
// 		}
// 	]
// });
const id = useRoute().params.id;
const post = ref(null);
await $fetch(`/api/articles/${id}`, {
	headers: {
		Authorization: "Nn123123",
	},
}).then((response) => {
	post.value = response;
});
</script>
