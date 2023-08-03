<template>
	<form
		action=""
		class="flex flex-col w-[500px] justify-center items-center m-auto py-28"
	>
		<Forms_FormInput label="الاسم" />
		<Forms_FormInput label="الايميل" type="email" />
		<Forms_FormTextarea label="الرسالة" />

		<Forms_FormButton
			text="ارسال"
			TextColor="text-white"
			BackgroundColor="bg-mainColor"
		/>
	</form>
</template>

<script setup></script>

<style scoped></style>
