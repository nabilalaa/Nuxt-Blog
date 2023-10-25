<template>
	<SideMenu />
	<nav class="w-full p-8">
		<div class="container">
			<div
				class="flex justify-between lg:justify-center items-center mb-16"
			>
				<div
					class="logo font-logo font-bold tracking-wider text-xl space-x-2 uppercase text-mainColor"
				>
					مدونة
				</div>
				<div
					@click="showMenu"
					id="sidemenu_btn"
					class="lg:hidden text-4xl"
				>
					<Icon
						name="material-symbols:menu"
						class="pointer-events-none"
					/>
				</div>
			</div>
			<ul class="lg:flex hidden justify-center text-black">
				<li>
					<NuxtLink
						to="/"
						class="p-2 ml-6 opacity-80 font-bold hover:opacity-100 transition-opacity"
					>
						الصفحة الرئيسية</NuxtLink
					>
				</li>
				<li>
					<NuxtLink
						to="/contact"
						class="p-2 ml-6 opacity-80 font-bold hover:opacity-100 transition-opacity"
						>اتصل بنا</NuxtLink
					>
				</li>
				<li>
					<NuxtLink
						to="/about"
						class="p-2 opacity-80 font-bold hover:opacity-100 transition-opacity"
						>عنا</NuxtLink
					>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			menu: "<Icon name='uil:github'/>"
		};
	},
	methods: {
		showMenu() {
			document
				.querySelector(".sidemenu")
				.classList.toggle("active");
		}
	},
	mounted() {
		// document.onclick = (e) => {
		// 	if (
		// 		e.target.id !== "sidemenu" &&
		// 		e.target.id !== "sidemenu_btn"
		// 	) {
		// 		document
		// 			.querySelector(".sidemenu")
		// 			.classList.remove("active");
		// 	}
		// 	console.log(e.target);
		// };
	}
};
</script>

<style></style>
