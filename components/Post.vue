<template>
	<NuxtLink :to="to" class="block text-white">
		<div
			:style="{
				'background-image': `url(${image})`,
				'background-size': 'cover',
				'background-position': 'center',
			}"
			class="w-full h-full relative rounded-3xl"
		>
			<div
				class="overlay bg-mainColor opacity-50 w-full h-full rounded-3xl"
			></div>
			<div
				class="content absolute opacity-100 bottom-0 right-0 z-80 w-full p-4"
			>
				<h2 class="text-white opacity-100 text-3xl mb-3">
					{{ title }}
				</h2>
				<div class="data font-serif text-white flex items-center">
					<Icon name="ant-design:calendar-twotone" class="ml-1" />{{ date }}
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	image: String,
	to: String,
	title: String,
	date: String,
});
</script>

<style></style>
