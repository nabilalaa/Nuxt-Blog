<template>
	<NuxtLink :to="to">
		<div
			:style="{
				'background-image': `url(${image})`,
				'background-size': 'cover',
				'background-position': 'center'
			}"
			class="w-full h-full relative rounded-3xl"
		>
			<div
				class="overlay bg-mainColor opacity-50 w-full h-full rounded-3xl"
			></div>
			<div
				class="content absolute opacity-100 bottom-0 right-0 z-80 w-full p-4"
			>
				<h1 class="text-white opacity-100">{{ title }}</h1>
				<div class="data font-serif text-white">{{ date }}</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script>
export default {
	props: ["image", "to", "date", "title"]
};
</script>

<style></style>
