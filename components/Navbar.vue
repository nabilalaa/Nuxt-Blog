<template>
	<nav class="w-full p-8">
		<div class="container">
			<div class="flex justify-between lg:justify-center items-center mb-10">
				<div
					class="logo font-logo font-bold tracking-wider text-xl space-x-2 uppercase text-accent"
				>
					مدونة
				</div>
				<div
					@click="showMenu"
					id="sidemenu_btn"
					class="dark:text-white lg:hidden text-4xl"
				>
					<Icon name="material-symbols:menu" class="pointer-events-none" />
				</div>
			</div>
			<ul
				class="lg:flex hidden justify-center items-center text-black dark:text-white"
			>
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
						class="p-2 ml-6 opacity-80 font-bold hover:opacity-100 transition-opacity"
						>عنا</NuxtLink
					>
				</li>
				<li>
					<mode-btn class="!h-12"></mode-btn>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
function showMenu() {
	document.querySelector(".sidemenu").classList.toggle("active");
}
</script>

<style></style>
