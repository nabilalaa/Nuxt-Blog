<template>
	<Html lang="ar" dir="rtl"></Html>
	<Navbar />
	<SideMenu />

	<section class="py-20">
		<div class="container">
			<div
				class="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 gap-4 h-[600px] w-full"
			>
				<post
					v-for="post in posts"
					:key="post"
					class="col-span-1 row-span-2 w-full"
					image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					to="/"
					:title="post.title.rendered"
					:date="post.date.toDateString()"
				/>
			</div>
		</div>
	</section>
	<section class="py-20">
		<div class="container">
			<div class="grid grid-cols-3 h-[400px] gap-4 w-full">
				<post
					image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					to="/"
				/>
				<post
					image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					to="about"
				/>
				<post
					image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			posts: null
		};
	},
	mounted() {
		axios.get("http://blog.local/wp-json/wp/v2/posts").then(
			(response) => {
				this.posts = response.data;
				console.log(response.data);
			}
		);
	}
};
</script>

<style>
@import url("https://fonts.googleapis.com/earlyaccess/droidarabickufi.css");
body {
	background: #e2ffdb;
	font-family: "Droid Arabic Kufi", serif;
}
</style>
