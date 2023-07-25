<template>
	<div
		id="sidemenu"
		class="sidemenu bg-accent z-50 fixed h-full bottom-0 top-0 w-full sm:w-72 -left-full lg:left-0 lg:fixed lg:hidden transition-all"
	>
		<div
			class="closemenu w-12 h-12 bg-white lg:hidden -right-0 z-[9999999999999px] flex justify-center items-center text-3xl"
			@click="closeMenu"
		>
			<Icon
				name="radix-icons:cross-2"
				class="pointer-events-none"
			/>
		</div>

		<ul class="links p-4 text-white">
			<NuxtLink
				v-for="link in links"
				:key="link"
				:to="link.to"
				@click="closeMenu"
				class="text-secondaryColor flex p-4 rounded-xl mb-2 font-bold"
			>
				<li class="">{{ link.name }}</li>
			</NuxtLink>
		</ul>
	</div>
</template>

<script>
export default {
	methods: {
		closeMenu() {
			document
				.querySelector(".sidemenu")
				.classList.remove("active");
		}
	},
	data() {
		return {
			links: [
				{
					name: "الصفحة الرئيسية",
					to: "/"
				},
				{
					name: "اتصل بنا",
					to: "about"
				},
				{
					name: "عنا",
					to: "hello"
				}
			]
			// [("الصفحة الرئيسية", "اتصل بنا", "عنا")]
		};
	}
};
</script>

<style scoped>
.router-link-exact-active {
}
</style>
