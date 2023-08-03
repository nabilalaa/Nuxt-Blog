<template>
	<footer
		class="flex justify-between bg-accent p-8 text-white items-center"
	>
		<div class="logo">
			<div
				class="logo font-logo font-bold tracking-wider text-xl space-x-2 uppercase text-mainColor"
			>
				مدونة
			</div>
		</div>
		<ul class="links font-bold">
			<li class="mb-4">
				<NuxtLink to="/">الصفحة الرئيسية</NuxtLink>
			</li>
			<li class="mb-4">
				<NuxtLink to="/contact"> اتصل بنا</NuxtLink>
			</li>
			<li class="mb-4"><NuxtLink to="/about"> عنا</NuxtLink></li>
		</ul>
		<ul class="social">
			<li>
				<a
					href="https://t.me/+GkLJbiVX_kVkODc0"
					target="_blank"
					rel="noopener noreferrer"
					class="font-bold capitalize font-mono"
				>
					telegram
					<Icon name="bi:telegram" class="text-3xl" />
				</a>
			</li>
		</ul>
	</footer>
</template>

<script setup></script>
