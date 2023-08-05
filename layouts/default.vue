<template>
	<SeoKit />
	<PageLoader />
	<Html lang="ar" dir="rtl"></Html>

	<Navbar />
	<SideMenu />

	<slot></slot>
	<Footer />
</template>

<script setup>
// const loading = ref(null);

// onMounted(() => {
// 	loading.value = "hi";
// 	console.log(loading);
// });
</script>

<style>
@import url("https://fonts.googleapis.com/earlyaccess/droidarabickufi.css");
body {
	background: #e2ffdb;
	font-family: "Droid Arabic Kufi", system-ui;
}
</style>
