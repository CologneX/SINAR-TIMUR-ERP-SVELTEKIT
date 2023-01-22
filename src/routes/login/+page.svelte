<script lang="ts">
	import src from '$lib/images/LOGO SVG.svg';
	import { focusTrap } from '@skeletonlabs/skeleton';
	import { GradientHeading } from '@skeletonlabs/skeleton';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	export let form;
</script>

<svelte:head>
	<title>Log In | SINAR TIMUR SORONG</title>
</svelte:head>

<div class="grid h-screen place-items-center">
	<div class="card max-w-fit max-h-fit p-3 pl-20 pr-20">
		<div class="card-body place ">
			<GradientHeading
				tag="h1"
				direction="bg-gradient-to-r"
				from="from-primary-500"
				to="to-secondary-500">Log In</GradientHeading
			>
			<img {src} alt="Logo" class="mx-auto" />
			<form use:focusTrap={true} action="?/login" method="POST">
				<div class="form-group ">
					<label for="username">User</label>
					<input type="text" name="username" class="form-control shadow-xl" />
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" name="password" class="form-control shadow-xl" id="password" />
					<button type="submit" class="btn btn-ghost-primary btn-base shadow-2xl mt-5 w-full"
						>Login</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
<Toast />
