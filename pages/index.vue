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
		<div class="container">
			<div class="lg:flex gap-4 lg:h-[35rem] h-full">
				<post
					v-for="post in posts.blogs.slice(0, 1)"
					:key="post"
					class="lg:w-[60%] lg:h-full w-full h-96"
					:to="`posts/${post.id}`"
					:image="post.image_url"
					:title="post.title"
					:date="post.created_at.slice(0, 10)"
				/>

				<div
					class="lg:flex lg:gap-y-4 lg:flex-col flex-col lg:w-1/2 lg:h-full h-full"
				>
					<post
						v-for="post in posts.blogs.slice(1, 3)"
						:key="post"
						class="lg:w-full lg:h-1/2 w-full h-[400px] lg:my-0 my-4"
						:to="`posts/${post.id}`"
						:image="post.image_url"
						:title="post.title"
						:date="post.created_at.slice(0, 10)"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="py-20">
		<div class="container">
			<div class="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
				<post
					v-for="post in posts.blogs.slice(3)"
					:key="post"
					class="lg:w-full w-full h-[400px] lg:my-0 my-4"
					:to="`posts/${post.id}`"
					:image="post.image_url"
					:title="post.title"
					:date="post.created_at.slice(0, 10)"
				/>
			</div>
			<!-- <button
				v-show="morebtn"
				@click="more"
				class="outline-none flex justify-center items-center text-white bg-accent p-4 font-bold m-auto mt-8"
			>
				المزيد
			</button> -->
		</div>
	</section>
</template>

<script setup>
const posts = await $fetch("/api/articles", {
	headers: {
		Authorization: "Nn123123"
	}
});

const morebtn = ref(true);
const pag = ref(7);

const more = () => {
	if (pag.value > posts.blogs.length) {
		morebtn.value = false;
	} else {
		pag.value += 8;
	}
};
</script>

<style></style>
