<template>
	<div
		class="loading h-full w-full bg-black absolute z-50 overflow-auto flex justify-center items-center text-white font-bold font-sans"
	>
		loading
	</div>
	<Html lang="ar" dir="rtl"></Html>
	<Navbar />
	<SideMenu />

	<slot></slot>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/earlyaccess/droidarabickufi.css");
body {
	background: #e2ffdb;
	font-family: "Droid Arabic Kufi", serif;
}
</style>
