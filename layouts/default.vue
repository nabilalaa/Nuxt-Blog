<template>
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
