<template>
	<NuxtLink
		class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
		:to="to"
	>
		<div class="sm:flex">
			<div
				class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44"
			>
				<CldImage
					width="800"
					height="600"
					:src="image.slice(50)"
					class="w-full h-full object-cover absolute rounded-3xl"
					:alt="title"
				/>
			</div>

			<div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
				<h3
					class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white"
				>
					{{ title }}
				</h3>
				<p class="mt-3 text-gray-600 dark:text-gray-400">
					{{ date }}
				</p>
				<p
					class="mt-4 inline-flex items-center gap-x-1 text-accent decoration-2 hover:underline font-medium"
				>
					اقرأ المزيد
					<svg
						class="flex-shrink w-3 h-3 text-accent"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 8 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
						/>
					</svg>
				</p>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps(["image", "to", "title", "date"]);
</script>

<style lang="scss" scoped></style>
