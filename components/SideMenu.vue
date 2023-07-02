<template>
	<div
		id="sidemenu"
		class="sidemenu bg-accent z-50 fixed h-full bottom-0 top-0 w-72 -left-72 lg:left-0 lg:fixed lg:hidden overflow-hidden transition-all"
	>
		<div
			class="closemenu w-7 h-7 bg-white lg:hidden absolute right-0 flex justify-center items-center"
			@click="closeMenu"
		>
			X
		</div>
		<div
			class="logo font-logo font-bold tracking-wider text-xl space-x-2 uppercase p-4 text-center"
		>
			oscar
		</div>
		<hr />
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
