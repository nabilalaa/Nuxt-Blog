<template>
	<SideMenu />
	<nav class="text-text w-full p-8">
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
					id="btn_sideBar"
					class="btn_sideBar text-2xl lg:hidden"
					@click="showMenu"
				>
					XX
				</div>
			</div>
			<ul class="lg:flex hidden justify-center">
				<li>
					<NuxtLink
						to="/"
						class="p-2 ml-6 opacity-80 font-bold hover:opacity-100 transition-opacity text-white"
					>
						الصفحة الرئيسية</NuxtLink
					>
				</li>
				<li>
					<NuxtLink
						class="p-2 ml-6 opacity-80 font-bold hover:opacity-100 transition-opacity"
						>اتصل بنا</NuxtLink
					>
				</li>
				<li>
					<NuxtLink
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
	methods: {
		showMenu() {
			document
				.querySelector(".sidemenu")
				.classList.toggle("active");
		}
	},
	mounted() {
		document.onclick = (e) => {
			if (
				e.target.id !== "btn_sideBar" &&
				e.target.id !== "sidemenu"
			) {
				document
					.querySelector(".sidemenu")
					.classList.remove("active");
			}
		};
	}
};
</script>

<style></style>
